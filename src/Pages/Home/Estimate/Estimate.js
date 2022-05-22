import React from 'react';

const styles=
    {
        background:' linear-gradient(rgba(135, 80, 156, 0.5), rgba(135, 80, 156, 0.9)), url(https://www.hourmaid.com/wp-content/uploads/2017/12/cleaning-services-1024x682.jpeg)',
        // backgroundRepeat:'no-repeat',
        backgroundSize:' cover',
        backgroundPosition:'center center',
        backgroundAttachment:'fixed',
        position:'relative',
        // height:"300px"
    }

const Estimate = () => {
    return (
        <div class='my-12 h-3/5 bg-no-repeat bg-blend-normal' style={styles}>
           <h1 class='mt-24 pt-16 text-5xl text-white font-bold w-50'>Want to work with our team  member?</h1>
          <p class='my-24 text-4xl  w-3/4  mx-auto text-white font-semibold'>We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.</p>
        
          <button class="bg-pink-900 mb-12 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-full">GET AN ESTIMATE</button>
        </div>
    );
};

export default Estimate;