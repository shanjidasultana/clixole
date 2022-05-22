// import React, { useEffect, useState } from 'react';
import React from 'react';
import serviceData from '../Services/ServicesData';

import Service from '../Service/Service'

const Services = () => {
    // const [services,setServices] =useState([]);
    // useEffect(()=>{
    //     fetch('./Service.json')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[])
    return (
        <div>
            <h1 class='font-bold text-blue-900  text-5xl my-24 mx-auto'>Our Services</h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    serviceData.map(service=> <Service
                    key={service.title}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;