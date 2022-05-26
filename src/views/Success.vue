<template>
    <div class="">
        <Navigation/>
        
    <section class="bg-white rounded shadow mt-32 max-w-2xl mx-auto">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 class="text-3xl font-bold tracking-tight text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>
            </h2>
            <h2 class="text-3xl font-bold tracking-tight">
                Thank you for signining up with us.
            </h2>

            <p class="block max-w-2xl mt-4 text-xl text-gray-900">
                Your login credentials have been sent to your email.
                <br>
                If you have any questions, please contact <span class="text-green-400">hello@greenpick.store</span>
            </p>
            
            <div class="mt-6">
                <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
                    <router-link to="/login" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-blue-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                        
                        <span class="mx-2">
                          Continue to login
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
       
    </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';
export default {
  components:{
    Navigation,
    
}
}
</script>