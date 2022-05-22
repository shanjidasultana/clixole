/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import register from '../../../../images/register-removebg-preview.png'
import useAuth from '../../../Hooks/useAuth';
import { useNavigate} from "react-router-dom";
const Register = () => {
    const {
        setIsLoading,
        registerNewUser,
        // setUserName,
      } = useAuth();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [name, setName] = useState("");
      const [error, setError] = useState("");
      const navigate = useNavigate();
      // const location = useLocation();
      // const redirect_uri = location.state?.from || "/home";
    
      const handleName = (e) => {
        setName(e.target.value);
      };
     
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
    
      const handleRegistration = (e) => {
        e.preventDefault();
        if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          )
        ) {
          setError("Email is Not Valid");
          return;
        }
        if (password.length < 6) {
          setError("Password Must be 6 Characters");
          return;
        }
    
        console.log(email, password);
        registerNewUser(email, password,name)
          .then((result) => {
            const user = result.user;
            // setUserName(name);
            // verfiyEmail();
            navigate('/home');
            setError("");
            window.location.reload();
            // const userLocal = localStorage.setItem("user", JSON.stringify(user));
            // console.log(userLocal);
            console.log(user);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
    
      console.log(name, email, password);
    
    return (
        
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
            
            <div class="w-4/5 mx-auto" >
                <h1 class='text-4xl font-bold italic'>Please Login</h1>
                 <form onSubmit={handleRegistration} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                     <div class="mb-4">
                        <label class="block italic text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input onBlur={handleName} class="shadow italic appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                     </div>
                     <div class="mb-4">
                        <label class="block italic text-gray-700 text-sm font-bold mb-2" for="username">
                            UserEmail
                        </label>
                        <input onBlur={handleEmail} class="shadow italic appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username"/>
                     </div>
                     <div class="mb-6">
                        <label class="block italic text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input onBlur={handlePassword} class="shadow italic appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>

                     </div>
                     <div class="mb-6">
                        <label class="block italic text-gray-700 text-sm font-bold mb-2" for="password">
                            Re-type Password
                        </label>
                        <input onBlur={handlePassword} class="shadow italic appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>

                     </div>
                        <button  class="bg-blue-500 italic hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                        <br />
                        <br />
                     
                        <Link to='/login' class=" italic inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            <p> Already have an Account? Please Login..</p>
                        </Link>
                 </form>
                 
            </div>
            <div class='mx-auto'>
                 <img src={register} alt="" />
            </div>
        </div>


    );
};

export default Register;