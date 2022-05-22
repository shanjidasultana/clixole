import React from 'react';
const Service = ({service}) => {
//    let {icon}=service;
    const {title,image,price,details,icon} = service;
   
    return (
        <div class='w-3/4 mx-auto h-3/4'>
            <div class="rounded  overflow-hidden h-70 shadow-lg">
            <img  fluid class="w-full h-52 " src={image} alt=""/>
                <div class='inline-flex'>
                    <div class='mt-9 ml-6 text-yellow-900 bg-red-900'>
                        <img class='text-blue-900 bg-red-500' height={100} src={icon} alt="" width={200}/>
                    </div>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{title}</div>
                        <p class="text-gray-700 text-base">
                            {details}
                        </p>
                        <p class="text-red-700 text-2xl font-bold">
                            $ {price}
                        </p>
                    </div>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="inline-block  bg-green-200 rounded-full px-4 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-pink-300 ">View Details</button>
                    <button class="inline-block  bg-green-200 rounded-full px-4 py-3 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-pink-300 ">Add to Cart</button>
                </div>
            </div>
           
         </div>
    );
};

export default Service;