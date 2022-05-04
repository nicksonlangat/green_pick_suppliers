<template>
    <!-- Component Code -->

<div class="grid bg-gray-200 grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
  
  <div class="flex items-center justify-center">
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
              <a href="/orders" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                Get started
              </a>
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
  
</div>


</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif !important;
}

</style>