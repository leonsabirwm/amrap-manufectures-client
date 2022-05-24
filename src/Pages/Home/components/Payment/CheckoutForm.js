import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'

export const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [success,setSuccess] = useState('');
    const [paymentLoading,setPaymentLoading] = useState(false);
    const [intentData,setIntentData] = useState({});
    const [clientSecret,setClientSecret] = useState('');

    const {_id,totalCost,client,email} = order;
    console.log(intentData);
    const price = {
        price:totalCost,
    }
    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method:"POST",
            headers:{
                'content-type':'application/json',
                
            },
            body: JSON.stringify(price)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        });
    },[order])

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log( error);
            setCardError(error.message);
          } else {
            setCardError('')
          }

          setSuccess('');
          setPaymentLoading(true);
          //confirming card payment
          const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: client,
                  email: email,
                },
              },
            },
          );
          if(intentError){
              setCardError(intentError.message);
              setPaymentLoading(false);
          }
          else{
              setCardError('')
              console.log(paymentIntent);
              setIntentData(paymentIntent);
              setSuccess('Congrats!Your payment is successful.');
              setPaymentLoading(false);

              fetch(`http://localhost:5000/order/${_id}`,{
                  method:'PATCH',
              })
              .then(res => res.json())
              .then(data => console.log(data))
          }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary btn-sm mt-8' type="submit" disabled={!stripe || !clientSecret ||success}>
        Pay
      </button>
    </form>
    
    {paymentLoading ? <progress className="progress progress-primary w-56"></progress> :<div>
    {
        cardError && <p className='text-red-500 text-sm font-medium'>{cardError}</p>
    }
    {
        success && <div className='text-green-500 my-4 text-sm font-medium'>
            <p>
            {success}
            </p>
            <p>
             Transaction ID: {intentData.id}
            </p>
            <p>You 've paid: {intentData.amount/100} <span className='uppercase'>{intentData.currency}</span></p>
            </div>
    }
    
    </div>}
    </div>
    
  )
}
