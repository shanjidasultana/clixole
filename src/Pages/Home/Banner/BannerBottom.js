import React from 'react';
import { MdOutlineCleaningServices} from "react-icons/md";
import {GiVacuumCleaner} from "react-icons/gi";
import {GiBeachBucket} from "react-icons/gi";

const BannerBottom = () => {
    return (
        <div class=" w-3/4 mx-auto my-3 grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
            <div   class='shadow-lg'>
                <MdOutlineCleaningServices class='mx-auto  text-6xl'/>
                <h2  class='text-3xl text-indigo-900 font-bold my-5'>House Cleaning</h2>
                <p  class=' w-70 my-5 font-semibold text-gray-700 mx-auto '>As a app web Crawller expert,Organizations adjust</p>
            </div>
           
            <div class='shadow-lg'>
                <GiVacuumCleaner class='mx-auto  text-6xl'/>
                <h2 class='text-3xl text-indigo-900 font-bold my-5'>Indoor Cleaning</h2>
                <p class=' w-70 my-5 font-semibold text-gray-700 mx-auto '>As a app web Crawller expert,Organizations adjust</p>

            </div>
            <div class='shadow-lg'>
                <GiBeachBucket class='mx-auto text-6xl'/>
                <h2 class='text-3xl text-indigo-900 font-bold my-5'>Office Cleaning</h2>
                <p class=' w-70 my-5 font-semibold text-gray-700 mx-auto '>As a app web Crawller expert,Organizations adjust</p>
            </div>
        </div>
    );
};

export default BannerBottom;