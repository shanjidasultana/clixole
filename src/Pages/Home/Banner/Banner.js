import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
         
const Banner = () => {
    return (
        
          <AwesomeSlider animation="cubeAnimation" class="bg-gray-200">
            <div class="relative ">
                <img class='h-3/4' src='https://danielscleaningservice.com/wp-content/uploads/2017/06/bg2.jpg' alt="" />
                <div class="absolute  left-32 top-44 my-12 space-x-6 space-y-8 text-3xl font-bold">
                    <h1 class=" inset-0 md:inset-y-1 ...">We Are Clixole</h1>
                    <p class=" inset-0 md:inset-y-1 ...">Best Cleaning  Service in the Town</p>
                    <p class=" inset-0 md:inset-y-0 ...">Absolute child</p>
                    <button class="bg-red-500 hover:bg-red-700 ...">Our Services</button>
                </div>
            </div> 
            <div class="relative">
                <img class='h-3/4' src='http://dzinetrip.com/wp-content/uploads/House-cleaning-service.jpg' alt="" />
                <div class="absolute  left-32 top-44 my-12 space-x-6 space-y-8 text-3xl font-bold">
                    <h1 class=" inset-0 md:inset-y-1 ...">We Are Clixole</h1>
                    <p class=" inset-0 md:inset-y-1 ...">Best Cleaning  Service in the Town</p>
                    <p class=" inset-0 md:inset-y-0 ...">Absolute child</p>
                    <button class="bg-red-500 hover:bg-red-700 ...">Our Services</button>
                </div>
            </div> 
            <div class="relative ">
                <img class='h-3/4' src='https://deluxearthomeimprovement.com/wp-content/uploads/2021/03/512untitled_6_recovered_recovered_recovered.jpg' alt="" />
                <div class="absolute  left-32 top-44 my-12 space-x-6 space-y-8 text-3xl font-bold">
                    <h1 class="  inset-0 md:inset-y-1 ...">We Are Clixole</h1>
                    <p class="  inset-0 md:inset-y-1 ...">Best Cleaning  Service in the Town</p>
                    <p class="  inset-0 md:inset-y-0 ...">Absolute child</p>
                    <button class="bg-red-500 hover:bg-red-700 ...">Our Services</button>
                </div>
            </div> 
            <div class="relative ">
                <img class='h-3/4' src='https://media.angi.com/s3fs-public/female-janitor-vacuums-living-room.jpg' alt="" />
                <div class="absolute  left-32 top-44 my-12 space-x-6 space-y-8 text-3xl  font-bold">
                    <h1 class="text-blue-600  inset-0 md:inset-y-1 ...">We Are Clixole</h1>
                    <p class=" text-blue-600 inset-0 md:inset-y-1 ...">Best Cleaning  Service in the Town</p>
                    <p class=" text-blue-600 inset-0 md:inset-y-0 ...">Absolute child</p>
                    <button class=" text-black bg-red-500 hover:bg-red-700 ... rounded-full px-4 py-2 ">ButtoOur Services</button>
                </div>
            </div>     
            
          </AwesomeSlider>

        
    );
};

export default Banner;