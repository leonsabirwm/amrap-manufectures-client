import React from 'react'
import './Blogs.css'

export const Blogs = () => {
  return (
    <div className='QNA-section'>
    <div className='portion-one'>
        <div className='section-title answer'>
            <h1 className='text-7xl font-bold'><span id='change-color'>QNA</span> Section</h1>
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
        </div> <div className='answer p-12 text-justify'>
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
</div>
);
};

