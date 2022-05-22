// import { ChartBarIcon, EyeIcon, FireIcon } from "@heroicons/react/outline";
import React from "react";
import { GiWindow} from 'react-icons/gi';
import { ImSpoonKnife,ImDiamonds} from 'react-icons/im';
import { FaToilet} from 'react-icons/fa';
import Footer from '../../Shared/Footer/Footer';

const AboutUs = () => {
  return (
    <>
    <div>
      <div>
        <div>
          <div>
            <div
              class=" h-52	bg-left-top bg-auto bg-repeat-x  flex justify-center items-center"
              style={{
                backgroundImage:
                  "url(https://5.imimg.com/data5/UV/MV/MY-42119466/cleaning-services-500x500.png)",
                backgroundAttachment: "fixed",
                backgroundPosition:"center",
                backgroundSize: "cover",
                backgroundBlendMode:"overlay"
              }}
            >
              <h1 class="border-4 bg-yellow-500 text-white  p-3 text-3xl font-black">
                About Us
              </h1>
            </div>
          </div>
        </div>
        <div class=" container my-5 mx-auto grid grid-cols-1 md:grid-cols-2 h-screen">
          <div class="max-h-96 md:h-screen">
            <div class="h-54">
              <img fluid src="https://previews.123rf.com/images/bialasiewicz/bialasiewicz1702/bialasiewicz170201485/72232001-young-team-of-professional-cleaners-in-workplace.jpg" alt="" width={480} />
            </div> 
          </div>
          <div>
          <div class="flex flex-col mt-24 ">
            <div class=" my-16">
                <h1 class="text-3xl text-indigo-800 font-bold uppercase my-3">
                <ImDiamonds class=' text-yellow-400  text-xl'/><br />
                <ImDiamonds class=' text-yellow-400 -mt-4 text-xl ml-4'/> 
                 About Cleaning Agency</h1>
              <p class="text-xl text-red-700 font-medium">
             <span class="text-green-600 font-medium ">
             Why will you choose our services?
             </span>
                <br></br>
                <br />
                Bixol is a design studio founded in London. Nowadays, we've grown and expanded our services, and have become a multinational firm, offering a variety of services and solutions Worldwide.
              </p>
            </div>
            <hr />
            <div class="flex my-12 ">
                <iframe class='-mt-8' width="300" height="180" src="https://www.youtube.com/embed/XMWYZ-uZjnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div >
                    <h1 class="text-2xl font-bold">Check how we clean!</h1>
                    <p class=" font-semibold">Reference site about Lorem Ipsum, giving information on its origins.</p>
                </div>
            </div>
          </div>
          </div>
         
        </div>
        <div class=" mx-auto px-5 py-24 bg-gray-300">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4   p-4 ">
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded h-60  bg-indigo-400 p-4 transform translate-x-6 -translate-y-6  ">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                    <FaToilet class='text-4xl' />
                  </div>
                  <div class="flex-grow ">
                    <h2 class=" text-2xl text-indigo-900  font-bold mb-3">
                      Toilet Cleaning
                    </h2>
                    <p class="leading-relaxed text-white  text-sm text-justify">
                    We have more than 100 employees, who are all experts in
                      their respective fields. They have the experience and
                      professionalism to understand each and every customer's
                      requirements and fulfill it.                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded h-60  bg-indigo-500 p-4 transform translate-x-6 -translate-y-6 ">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                   <GiWindow class='text-4xl text-red-800'/>
                  </div>
                  <div class="flex-grow">
                  <h2 class=" text-2xl text-indigo-900  font-bold mb-3">
                      Window Cleaning
                    </h2>
                    <p class="leading-relaxed text-white  text-sm text-justify">
                      We have more than 100 employees, who are all experts in
                      their respective fields. They have the experience and
                      professionalism to understand each and every customer's
                      requirements and fulfill it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
              <div class="pattern-dots-md gray-light">
                <div class="rounded h-60 bg-indigo-500 p-4 transform translate-x-6 -translate-y-6 ">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                    <ImSpoonKnife class='text-4xl ' />
                  </div>
                  <div class="flex-grow">
                  <h2 class=" text-2xl text-indigo-900  font-bold mb-3">
                      Kitchen Cleaning
                    </h2>
                    <p class="leading-relaxed text-white  text-sm text-justify">
                      We have more than 100 employees, who are all experts in
                      their respective fields. They have the experience and
                      professionalism to understand each and every customer's
                      requirements and fulfill it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <Footer></Footer>
    </>
  );
};

export default AboutUs;
