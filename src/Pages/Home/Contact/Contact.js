import React from 'react'
const Contact = () => {
    return (
        <>
            <div class="py-12" style={{background:`url(https://media.istockphoto.com/photos/cleaning-set-for-different-surfaces-in-kitchen-bathroom-and-other-picture-id918825114?k=20&m=918825114&s=612x612&w=0&h=hZpY6YLPIyZkgVww6azXU4JEN2Q5aTMMy6WQ2bnPXTU=)`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <div class="w-full ">
                    <div class=" ">
                        <h5 class=' font-bold text-2xl my-6  mx-auto bg-indigo-900 w-36 py-3 rounded text-center text-white  '>Contact Us</h5>
                        <h2 class='font-bold text-2xl mx-auto'>Let us handle your </h2>
                        <h3 class='font-bold text-2xl mx-auto'>Project Professionally.</h3>
                        <hr  class='my-3  w-72 mx-auto border-indigo-900 border-2 bg-indigo-900'/>
                    </div>

                    <form class="">
                        <div class="md:flex ">
                            <input class='w-full border-b-2 ml-12 mr-12 border-black  my-9 uppercase p-4 ' type="text" placeholder='First Name' name='fname'/>
                            <input class='w-full border-b-2 ml-12 mr-12 border-black  my-9 uppercase p-4 ' type="text" placeholder='Last Name'name='lname'/>
                        </div>
                        <div class="md:flex ">
                            <input class='w-full border-b-2 ml-12 mr-12 border-black  my-9 uppercase p-4 ' type="email" placeholder='Email Address' name='email'/>
                            <input class='w-full border-b-2 ml-12 mr-12 border-black  my-9 uppercase p-4 ' type="number" placeholder='Phone Number'name='phone'/>
                        </div>
                        <textarea class=' w-3/4 mx-auto border-black ml-12 my-9 uppercase mr-36 border-2' name="message" rows="4" placeholder='message' ></textarea>
                        <br />
                        <button class=' my-6 ml-9 bg-red-900 text-2xl py-3 px-6 rounded-full text-white ' type='submit'>Send</button>
                    
                    </form>
                </div>
            </div>   
        </>
    )
}

export default Contact;
