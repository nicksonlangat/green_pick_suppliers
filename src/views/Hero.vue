<template>
    <!-- Component Code -->

<div >
  <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="../assets/vid.mp4" type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2">
        <h1 class="font-light text-6xl">Welcome to GreenPick</h1>
        <div class="rounded-md shadow">
              <router-link to="/orders" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </router-link>
            </div>
    </div>
</section>
  
  <!-- <div class="flex items-center justify-center">
    <main class="max-w-screen-xl px-4 lg:px-16">
        <div class="text-left">
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-orange-500 sm:text-5xl sm:leading-none md:text-6xl">
            Save time,
            <span class="text-green-600">Get Value</span>
          </h2>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           With fresh produce straight from farms.
           Refining the agricultural & consumer space in Africa using Big Data & machine learning.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex justify-start">
            <div class="rounded-md shadow">
              <router-link to="/orders" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </router-link>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get the App
              </a>
            </div>
          </div>
        </div>
      </main>
  </div>
  <div class="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center"
  
  :style="{ backgroundImage: 'url(' + require('@/assets/tt.jpg') + ')' }"></div>
   -->
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