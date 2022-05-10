<template>
    <!-- Add this to your tailwind.config.js -->
    <header class="bg-white dark:bg-gray-800">
        <nav class="border-b dark:border-gray-700">
            <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div class="flex items-center justify-between">
                    <div>
                        <a href="/" class="flex items-center">
      <img src="../assets/logo1.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
                         <!-- <router-link class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" to="/">GREEN PICK</router-link> -->
                    </div>
                    
                    <!-- Mobile menu button -->
                    <div class="lg:hidden">
                        <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <div class="items-center lg:flex">
                    <div class="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:space-x-16">
                        <!-- <a class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" href="#">MY TICKETS</a> -->
                        <router-link class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/products">PRODUCTS</router-link> 
                        
                        <router-link class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/orders
                        ">ORDERS</router-link> 
                        <router-link class="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline" to="/restaurants">RESTAURANTS</router-link> 
                        

<router-link  v-if="!loggedIn" class="font-medium text-gray-700 dark:text-gray-200 hover:underline" to="/login"> 
 <button class="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                          Login
                        </button>
</router-link> 

 <button v-if="loggedIn" @click="logout" class="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-red-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                          Logout
                        </button>
            
                       
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    data(){
        return{
            loggedIn:false,
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('loggedUser')
            console.log('logged out')
            this.$router.push({ name: "Login"})
        }
    },
    created(){
        if(localStorage.getItem('loggedUser')!=null){
            this.loggedIn=true
        }
        
    }
}
</script>