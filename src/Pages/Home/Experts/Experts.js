import React from 'react';
import ex1 from '../../../images/ex1.jpg'
import ex2 from '../../../images/ex2.jpg'
import ex3 from '../../../images/ex3.png'
const Experts = () => {
    return (
    <>
        <h4 class='text-green-400 font-bold text-3xl my-4'>......... Expert Team ........</h4>
        <h1 class='text-blue-900 font-bold text-4xl my-4'>We’ve Have an Expert Team</h1>
        <p class="w-3/5 text-blue-900 mx-auto my-5 font-bold text-2xl">We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div class="max-w-sm rounded overflow-hidden ">
                <img class="w-full" src={ex1} alt=""/>
                <div class="px-6 py-4">
                    <h2 class="text-pink-700 my-3 text-3xl font-bold "> Dianne Russel</h2>
                    <p class="text-blue-800 font-bold text-xl "> Hospital Cleaner</p>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden ">
                <img class="w-full" src={ex2} alt=""/>
                <div class="px-6 py-4">
                    <h2 class="text-pink-700 my-3 text-3xl font-bold "> David Cuper</h2>
                    <p class="text-blue-800 font-bold text-xl "> House Cleaner</p>
                </div>
            </div>
            <div class="max-w-sm rounded overflow-hidden">
                <img class="w-full" src={ex3} alt=""/>
                <div class="px-6 py-4">
                    <h2 class="text-pink-700 my-3 text-3xl font-bold ">Wiliams Taylor</h2>
                    <p class="text-blue-800 font-bold text-xl "> Company Cleaner</p>
                </div>
            </div>
       </div>
    </>
    );
};

export default Experts;