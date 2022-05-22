import React from 'react';

const About = () => {
    return (
        <div class='w-3/4 mx-auto'>
            <h1 class="text-indigo-900 font-bold text-4xl mt-12">About Us</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
            <div >
                <img src="https://st.depositphotos.com/1518767/2305/i/600/depositphotos_23050042-stock-photo-concentrated-woman-scrubbing-the-bar.jpg" alt="" />
                {/* <div class='h-32 mt-11 bg-red-300'>,,,,,</div> */}
            </div>
           
            <div>
                <h4 class='text-gray-500 font-bold text-2xl mt-5 '>About Cleaning Agency</h4>
                <h1 class='text-pink-900 font-bold text-4xl mt-5 '>You can depend on us to get a good services</h1>
                <p class='text-purple-900 font-bold mt-5  '>We are Bixol, cleaning service provider.</p>
                <p class='text-green-900 font-bold text-2xl mt-5  w-84 mx-auto'>Bixol has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design to deliver all layouts and blocks you need.</p>
                <button class="bg-pink-900 my-8 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-full">Our Services</button>

            </div>
        </div>
        </div>
    );
};

export default About;