import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Loading } from '../Shared/Loading/Loading';

export const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [imageURL,setImageURL] = useState('');
    const [productLoading,setProductLoading] = useState(false);
    const imageUploadKey = '27d05fa666a7f03aab6d9998b4a1812c';
    
    const onSubmit= (data,event)=>{
        event.preventDefault();
        console.log(data);
        
        
        
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        setProductLoading(true)
        const uninterceptedAxiosInstance = axios.create();
        
        const url = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`
        uninterceptedAxiosInstance.post(url,formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            console.log(response.data.data.url);
            const photoURL = response?.data?.data?.url;
            setImageURL(photoURL);

            const product = {
                name:data.product,
                price:data.price,
                minimum:data.minimum,
                available:data.available,
                description:data.description,
                image:photoURL,
            }
            axios.post('https://infinite-escarpment-22015.herokuapp.com/parts',product)
            .then((response) => {
                const added = response.data.acknowledged;

                setProductLoading(false);
                if(added){
                    toast.success("Product Added")
                    reset();
                }
              }, (error) => {
                console.log(error);
                toast.error("Something Went Wrong!!")
              });
          }, (error) => {
            console.log(error);
            setProductLoading(false);
            toast.error("Something Went Wrong!!")
          });

    }
    if(productLoading){
        return <Loading></Loading>
    }
  return (
      <div>
        <div className='lg:mb-56'></div>
    <div className='flex justify-center items-center'>
       <div className="bg-base-100  shadow-xl">
        <h2 className='text-2xl font-medium mt-24'>Add a Product</h2>
  <div className="card-body items-center text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Product Name:</span>
      </label>
      <input className="input w-full input-bordered " placeholder="Product Name" {...register("product",{required:true})} ></input>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.product?.type === 'required' && "Name is required")}</span>
      </label>
      </div>

      
      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Price</span>
      </label>
      <input className="input w-full input-bordered " placeholder="Product Price" {...register("price",{required:true})} ></input>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.price?.type === 'required' && "Product Price is required")}</span>
      </label>
      </div>

      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Min Order Quantity</span>
      </label>
      <input className="input w-full input-bordered " placeholder="Minimum Quantity Per Order" {...register("minimum",{required:true})} ></input>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.minimum?.type === 'required' && "Minimun Order Quantity is required")}</span>
      </label>
      </div>

      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Stock Count</span>
      </label>
      <input className="input w-full input-bordered " placeholder="Stock Count" {...register("available",{required:true})} ></input>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.available?.type === 'required' && "Stock Count is required")}</span>
      </label>
      </div>

      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Short Description</span>
      </label>
      <textarea className="input h-36 w-full input-bordered " placeholder="Short Decription" {...register("description",{required:true,minLength:200,})} ></textarea>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.description?.type === 'required' && "Stock Count is required")||(errors.description?.type === 'minLength' && "Description length must be more then 200.")}</span>
      </label>
      </div>

      <div className="form-control w-full max-w-full">
      <label className="label">
      <span className="label-text">Product Image</span>
      </label>
      <input type="file" className="input w-full input-bordered " placeholder="Educational State" {...register("image",{required:true})} ></input>
      <label className="label">
      <span className="label-text-alt text-red-500">{(errors.image?.type === 'required' && "Image file is required")}</span>
      </label>
      </div>

        <div>
            <button type='submit' className='btn btn-outline btn-primary'>Add Product</button>
        </div>
      </form>
   
  </div>
  </div>
</div>
    </div>
  )
}
