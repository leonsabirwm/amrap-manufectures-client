import React from 'react'
import './Blogs.css'

export const Blogs = () => {
  return (
    <div className='QNA-section'>
    <div className='portion-one'>
        <div className='section-title answer'>
            <h1 className='lg:text-7xl text-2xl p-8 font-bold'><span id='change-color'>QNA</span> Section</h1>
            <div className='circle'>
            </div>
        </div>
        <div className='answer p-12'>
            <h2 className='text-3xl  font-medium'>How will you improve performace of a React Application?</h2>
            <div className='text-justify'>
                <p className='my-8'>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.Here some methods are given underneath to improve performace of a React Application:</p>

                <p className=""><span className='underline text-lg font-medium text-black'>Large Bundle Size :</span>With the growth of application if the size of bundle get's large that may hinder the performace of an app.In that case,we can spilit the bundle with Lazy and Suspense Component.</p>
                <p className=""><span className='underline text-lg font-medium text-black'>Large Rendering :</span>If we load a large amount of data at a time that causes performace issues to our app,to prevent that we can implement partial rendering or gradual rendering with React Window which will render only those parts which are visible parts on an window of an app.</p>
                <p className=""><span className='underline text-lg font-medium text-black'>Scaffolding :</span>To get better performace from you react app avoid Scaffolding.</p>
                <p className=""><span className='underline text-lg font-medium text-black'>Download on Demand :</span>Some content needs to be downloaded to reflect in UI.If we render all those type of content together that will result into performace related issues.So,to avoid that we will download only those content's which are on my view port right now and others will get rendered when they will be in my viewport or window range.To implement download on demand we have Lazy Load.</p>


                </div>
        </div>
    </div>
    <div className='portion-two '>
    <div className='answer p-12 text-justify'>
            <h2 className='text-3xl font-medium'> Why you do not set the state directly in React?</h2>
            <div className='text-justify'>
                <p className='mt-8'>React basically works on basis of states.If a state is changed in React,it listens to the changes and make a copy of DOM with the changed state(also known as virtual DOM).Then it matches the changed with the previous state.If any mismatch is found or any change is noticed between two DOM.React identifies that change and renders the relevent component based on the change.Here setState() dispatcher hepls to notify react where and what change has happend,which helps react to identify the changes and render the component according to that.Updating state directly does not notifies react to re-render component with changed state.</p>
            </div>
        </div> 
        
        
        
        <div className='answer p-12 text-justify'>
            <h2 className='text-3xl font-medium'>What are the different ways to manage a state in a React application?</h2>
            <div className='mt-8 text-left'>
                <div>
                Generally states are classified in three catagories in react :
                    <ol type="i" className='flex'>
                        <li>i.Form State</li>
                        <li className='mx-4'>ii.UI State</li>
                        <li>iii.Server Cache State</li>
                    </ol>
                    <p className='my-4'>They are handled differntly depending on the developers preferances.Here Some methods and packages are mentioned below:</p>
                    <p className=""><span className='underline text-lg font-medium text-black'>Form State:</span> Form state can be managed with - useState,Form Library,State Machines,etc</p>
                    <p className=""><span className='underline text-lg font-medium text-black'>UI State:</span> For managing UI State we have - useState,useContext+useReducer,Redux toolkit.Jodai,Valito,Recoil (or Relay if you use GraphQL),etc</p>
                    <p className=""><span className='underline text-lg font-medium text-black'>Server Cache State:</span> swr,React Query,Apollo(if you are familliar with GraphQL).</p>
                </div>
            </div>
        </div>
    </div>
    <div className='portion-two '>
    <div className='answer p-12 text-justify'>
            <h2 className='text-3xl font-medium'>  What is a unit test? Why should write unit tests?</h2>
            <div className='text-justify'>
                <div className='mt-8'>
                    <p>Unit means the individual part of your app.Unit testing is the process of checking samll pieces of independent code to ensure that individual parts of a program is work on their own.This is also known as tier-1 testing or level-1 testing beacuse it is done on the first step and done by the developers before integration.Some reasons to write unit tests:</p>

                <ol>
                    <li>It helps to isolate written code and determine if it works as it should.If done correctly it can detect early flaws in code,they can be hard to find in early stages.
                    </li>
                    <li>It occurs at the first step of testing to get assureance of a unit does not rely on external code or function.</li>
                    <li>To keep programmes working effeciently,unit tests should be done frequently,manually or automatically by developer or QA teams.</li>
                    <li>Errors get fixed at early stages which costs a lot cheaper than fixing it later.</li>
                    <li>Debugging process is made esier and developers can quickly change code base.</li>
                </ol>
                </div>
            </div>
        </div> 
        
        
        
        <div className='answer p-12 text-justify'>
            <h2 className='text-3xl font-medium'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
            <div className='mt-8 text-left'>
                <div>
                    <p>So,to find the products based on name property,first of all I will run a filter operation on the given array.On is each iteration I will get a product.Then we will apply a condition of matching our search query value with every product's name property.Since we ran a filter method,that will store element in an arry if any iteration's elements satisfies the conditon.Then that will return the array which will be contains our desired search results. </p>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

