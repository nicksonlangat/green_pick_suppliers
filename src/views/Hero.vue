<template>
   <div>
     
      <section class="w-full px-8 text-gray-700 bg-white">
         <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <div class="relative flex flex-col md:flex-row">
               <router-link to="/orders" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                  <img src="../assets/Greenpick logo.svg" class=" h-16" alt="Logo" />
               </router-link>
               <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                  <router-link to="/orders" class="mr-5 font-medium leading-6 text-blue-900 hover:text-gray-900">Home</router-link>
               </nav>
            </div>
            
            <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
               <a href="#services" class="inline-flex items-center justify-center px-4 py-2 text-2xl text-base font-medium leading-6 text-black whitespace-no-wrap">
                  What we do
               </a>
               <a href="#restaurants" class="inline-flex items-center justify-center px-4 py-2 text-2xl text-base font-medium leading-6 text-black whitespace-no-wrap">
                  Restaurants
               </a>
               <a href="#farmers" class="inline-flex items-center justify-center px-4 py-2 text-2xl text-base font-medium leading-6 text-black whitespace-no-wrap">
                  Farmers
               </a>
               <router-link to="/login" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-lg text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
                  Login
               </router-link>
            </div>
         </div>
      </section>
      <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
         <div
            class="w-full h-full relative z-30 p-4 text-2xl text-white rounded-xl"
            >
            <h1 class="text-white text-5xl font-bold ml-48 mt-32">Taking your food business to the next 
               <br>
               level.
            </h1>
            <p class="text-white text-2xl ml-48 mt-12"> We leverage our purpose built technology and a compelling business model to
               aggregate produce 
               <br>
               from farmers, deliver it 
               to commercial kitchens across Africa by providing them with an efficient, fresh, 
               <br>
               healthy and cost effective way of purchasing their fruits and vegetables.
            </p>
            <a href="#patner" class="inline-flex mt-20 items-center justify-center ml-48 px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-700 w-48 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
               Patner with us
            </a>
         </div>
         <img
            class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
            src="../assets/grocery.png"
            >
            
         
      </header>
      <section class="flex items-center justify-center  bg-white min-w-screen">
         <div class=" bg-white">
            <div class="container flex gap-6 flex-col items-start mx-auto lg:items-center">
               <div class=" w-full mt-12 mb-4 lg:flex gap-4">
                  <div class="ml-0 flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/2 lg:mb-0">
                     <div class="flex items-start justify-start">
                        <div class="flex flex-col  items-start justify-center">
                           <h4 class="font-black text-black text-2xl flex gap-2">
                              <span class="text-green-500 mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                 </svg>
                              </span>
                              Fast delivery
                           </h4>
                        </div>
                     </div>
                     <p class=" text-lg text-black">
                        We get the orders delivered to you safely and in time. 
                        <br>
                        Our delivery channel caters foir outside town deliveries.
                     </p>
                  </div>
                  <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                     <div class="flex items-center justify-center">
                        <div class="flex flex-col items-start justify-center">
                           <h4 class="font-black text-black text-2xl flex gap-2">
                              <span class="text-green-500 mt-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                 </svg>
                              </span>
                              Save time, Get value
                           </h4>
                        </div>
                     </div>
                     <p class="text-lg text-black">
                        Retain your customers by always having your suppliers with you.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section>
         <section id="services" class="ml-20 bg-white dark:bg-gray-900">
            <h2 class="relative flex items-start mt-8 -ml-12 justify-start w-full text-blue-900 max-w-3xl text-5xl font-bold lg:justify-center">
               Our services
            </h2>
            <div class="container flex flex-col ml-2 items-center px-4 py-12 mx-auto xl:flex-row">
               <div class="flex justify-center xl:w-1/2 -ml-4">
                  <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover" src="../assets/restaurant_s.png" alt="">
               </div>
               <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                  <h2  id="restaurants" class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                     To Restaurants
                  </h2>
                  <p class="block max-w-2xl mt-4 text-xl text-black">
                     Our vast network of farmers across the region has enabled us to provide not only fresh produce but also quality and standard checked produce to restaurants. We offer a platform to order and keep track of the prices for your inventory as well as future planning of your restaurant business.
                  </p>
                  <div class="mt-6 sm:-mx-2">
                     <div class="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        <a href="#patner" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                        <span class="mx-2">
                        Patner with us
                        </span> 
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
               
               <div class="flex flex-col ml-36 items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                  <h2 id="farmers" class="text-3xl ml-10 font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                     To Farmers
                  </h2>
                  <p class="block max-w-2xl mt-4 ml-12 text-xl text-black">
                     In order to create a sustainable future we are empowering farmers to sell their produce directly to leading retail outlets,  We leverage our purpose built technology and a compelling business model to
                     aggregate produce 
                     from farmers, deliver it 
                     to commercial kitchens across Africa by providing them with an efficient, fresh, 
                     healthy and cost effective way of purchasing their fruits and vegetables.
                  </p>
                  <div class="mt-6  ml-10">
                     <div class=" mt-4 ml-16 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                        <a href="#patner" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                        <span class="mx-2">
                        Patner with us
                        </span> 
                        </a>
                     </div>
                  </div>
               </div>
               <div class="flex justify-center xl:w-1/2">
                  <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover" src="../assets/farmers-image.png" alt="">
               </div>
            </div>
         </section>
      </section>
      <div class="leading-loose ml-20">
         <form id="patner" class="max-w-5xl m-4 mx-auto p-10 mt-4 bg-white rounded shadow"  >
            <p class="text-blue-800 text-3xl font-bold uppercase">Patner with us</p>
            <br>
            <div>
               <label class="block font-bold" >Name</label>
               <input  class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-500 bg-white placeholder-gray-900" type="text"  placeholder="Enter Full Name" >
            </div>
            <div class="inline-block mt-2 w-1/2 pr-1">
               <label class="hidden block text-sm text-gray-600" >Email</label>
               <input   class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-500 bg-white placeholder-gray-900"  type="text"  placeholder="Enter Email Address">
            </div>
            <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
               <label class="hidden block text-sm text-white" >Phone Number</label>
               <input class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-500 bg-white placeholder-gray-900" type="text"    placeholder="Enter Phone Number" >
            </div>
            <div class="mt-2">
               <label class="block font-bold  text-[#E7BB7EB3]" >Patner as</label>
               <select  class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-500 bg-white placeholder-gray-900" type="email"  placeholder="Your Email" >
                  <option value="">Farmer</option>
                  <option value="">Restaurant</option>
               </select>
            </div>
            <div class="mt-2">
               <label class="block font-bold" >Briefly explain why you would like to patner with us</label>
               <textarea rows="5"  class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-500 bg-white placeholder-gray-900"></textarea>
            </div>
            <div class="mt-4 mx-auto">
               <button class="px-4 py-1 w-48 text-white font-light tracking-wider bg-blue-800 rounded" type="submit">Submit</button>
            </div>
         </form>
      </div>
      <!-- Section 7 -->
      <section class="bg-blue-800">
         <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
               <div class="px-5 py-2">
                  <a href="#" class="text-base leading-6 text-white">
                  Contact
                  </a>
               </div>
               <div class="px-5 py-2">
                  <a href="#" class="text-base leading-6 text-white">
                  Terms
                  </a>
               </div>
            </nav>
            <div class="flex justify-center mt-8 space-x-6">
               <a href="#" class="text-white">
                  <span class="sr-only">Facebook</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                     <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                  </svg>
               </a>
               <a href="#" class="text-white">
                  <span class="sr-only">Instagram</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                     <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                  </svg>
               </a>
               <a href="#" class="text-white">
                  <span class="sr-only">Twitter</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
               </a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-white">
               © 2022 GreenPick. All rights reserved.
            </p>
         </div>
      </section>
   </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif !important;
}
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.video-content {
  z-index: 2;
}
</style>