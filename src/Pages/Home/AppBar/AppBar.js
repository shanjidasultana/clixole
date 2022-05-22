import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import {FcPrivacy} from 'react-icons/fc';
// import {BsFillPhoneVibrateFill} from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
// import {ImCalculator} from 'react-icons/im';
// import {BiMessageDots} from 'react-icons/bi';
// import {MdManageAccounts,MdOutlineTravelExplore} from 'react-icons/md';


const AppBar = () => {
    const {logOut,user}=useAuth();
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <div>
        <nav class="bg-blue-200  p-12">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 ">
              <div class="flex items-center">
                <div class="flex mb-2">
                  {/* <img
                    className="h-16 w-16"
                    src={logo}
                    alt="Workflow"
                  /> */}
                  <cite class="font-bold text-3xl text-yellow-500">Clixole</cite>
                </div>
                <div class="hidden md:block items-center">
                  <div class="ml- flex items-baseline space-x-4">
                    <Link
                      to="/home"
                      class=" hover:bg-green-200 text-black px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      <FaHome className="text-2xl text-red-900"/>
                     Home
                    </Link>
                    
                    <Link
                      to="/services"
                      class="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      {/* <MdOutlineTravelExplore className="text-2xl text-red-900"/> */}
                      Services
                    </Link>
                    <Link
                      to="/aboutus"
                      class="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      {/* <ImCalculator className="text-2xl text-red-900"/> */}
                     About Us
                    </Link>
                    <Link
                      to="/destinations"
                      class="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      {/* <FaPlane className="text-2xl text-red-900"/> */}
                      Destinations
                    </Link>
                    <Link
                      to="/managemybooking"
                      class="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      {/* <MdManageAccounts className="text-2xl text-red-900"/> */}
                      ManageMyBooking
                    </Link>
  
                    <Link
                      to="/"
                      class="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      {/* <BsFillPhoneVibrateFill className="text-2xl text-red-900"/> */}
                      Contact
                    </Link>
  
                    <Link
                      to="/"
                      class="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                    >
                      {/* <BiMessageDots className="text-2xl text-red-900"/> */}
                      Reports
                    </Link>
                    {
                    user.email? <div class="flex flex-col items-center"> 
                      <img src={user.photoURL} alt="" class="w-10 h-10  rounded-full mr-4"/>
                      <h6 class="text-yellow-500  text-1xl font-bold">welcome {user.displayName}</h6>
                      </div>: <h6 class="text-yellow-500 text-1xl font-bold"> ? </h6>
                    }
                    {
                      user.email ?
                           <button class="bg-blue-500  ml-12 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={logOut}>log out</button>
                          : 
                          <Link
                      to="/login"
                      class="text-black hover:bg-green-200 ml-12  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                     {/* <FcPrivacy/> */}
                        Login
                    </Link >
                    }
                 
  
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div class="md:hidden" id="mobile-menu">
                <div ref={ref} class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                      to="/home"
                      class="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Home
                 </Link >
                
                
                <Link
                      to="/services"
                      class="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Services
                 </Link >
                <Link
                      to="/aboutus"
                      class="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      About Us
                 </Link >
                <Link
                      to="/destinations"
                      class="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Destinations
                 </Link >
                <Link
                      to="/managemybooking"
                      class="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      ManageMyBooking 
                 </Link > 
                 
                 {
                    user.email? <div class=" flex flex-col items-center mt-6 ml-10 justify-items-center">
                      <img src={user.photoURL} class="w-10 h-10 text-base items-center rounded-full mr-4 " alt="" />
                      <h6 class="text-yellow-500 text-base mt-3 mr-6 ">welcome {user.displayName}</h6>
                      </div>: <h6 class="text-yellow-500"> ?</h6>
                  } 
                  {
                      user.email ?
                          <>
                            <Link  to="/dashboard">
                              <button color="inherit">Dashboard</button>
                          </Link>
                          <button class="bg-blue-500 mt-9 hover:bg-blue-700  text-base text-white font-bold py-2 px-4 rounded" onClick={logOut}>log out</button>

                          </>                          :
                          <Link
                      to="/login"
                      class="text-black  mt-9 hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                     <FcPrivacy/>
                     Login
                 </Link >
                 }

                 {/* {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    } */}
                  
                </div>
              </div>
            )}
          </Transition>
        </nav>
  
        
       
      </div>
    );
};

export default AppBar;