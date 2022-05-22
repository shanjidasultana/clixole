import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login-removebg-preview__1_-removebg-preview.png'
import useAuth from '../../Hooks/useAuth';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const { signInUsingGoogle, setIsLoading, loginNewUser } = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const redirect_uri = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
          .then((result) => {
            console.log(result);
            navigate('/home');
          })
          .catch((error) => {
            console.log(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };
      const handleLogin = (e) => {
        e.preventDefault();
        loginNewUser(email, password)
          .then((result) => {
            const user = result.user;
            // navigate('/home');
            console.log(user);
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
    return (
        
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
            
            <div class="w-4/5 mx-auto" >
                <h1 class='text-4xl font-bold italic'>Please Login</h1>
                 <form onSubmit={handleLogin} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                     <div class="mb-4">
                     <label class="block italic text-gray-700 text-sm font-bold mb-2" for="username">
                         Username
                     </label>
                     <input onBlur={handleEmail} class="shadow italic appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                     </div>
                     <div class="mb-6">
                     <label class="block italic text-gray-700 text-sm font-bold mb-2" for="password">
                         Password
                     </label>
                     <input onBlur={handlePassword}  class="shadow italic appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                     <p class="text-red-500 text-xs italic">Please choose a password.</p>
                     </div>
                        <button class="bg-blue-500 italic hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <button onClick={handleGoogleSignIn} class="bg-blue-500 italic hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Google Sign In
                        </button>
                        <br />
                        <br />
                     
                        <Link to='/register' class=" italic inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            <p> Don't have an account? Please Register..</p>
                        </Link>
                 </form>
                 
            </div>
            <div>
                 <img src={login} alt="" />
            </div>
        </div>


    );
};

export default Login;