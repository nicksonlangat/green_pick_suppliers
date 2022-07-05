<template>
  <div>
    <br><br><br><br><br>

    <div v-if="invalid" class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div class="flex items-center justify-center w-12 bg-red-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
            </svg>
        </div>
        
        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">Your email/password is invalid, check & retry!</p>
            </div>
        </div>
    </div>
    <br>
    <div class="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
       <img style="margin-right:auto; margin-left:auto; height:200px;" src="../assets/logo2.png" alt="">
       

        <form class="mt-6">
            <div>
                <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                <input 
                v-model="user.email"
                type="email"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>

            <div class="mt-4">
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                    <!-- <router-link class="text-xs text-gray-600 dark:text-gray-400 hover:underline" to="/reset-password">Forget Password?</router-link>  -->
                   
                </div>

                <input 
                v-model="user.password"
                type="password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            </div>

            <div class="mt-6">
                <button

                @click="loginUser"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
                    Login
                </button>
            </div>
        </form>

        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <!-- <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or</a> -->

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        

        <!-- <p class="mt-8 text-xs font-light text-center text-gray-400"> Don't have an account? 
          
           <router-link class="font-medium text-gray-700 dark:text-gray-200 hover:underline" to="/register">Create one</router-link> 
          </p> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      submitted: false,
      loading: false,
      invalid:false,
      message: '',
      user:{
        email:'',
        password:''
      },
    };
  },
  methods: {
    loginUser(e){
      const data={
        email:this.user.email,
        password:this.user.password
      }
      e.preventDefault();
      return axios.post('https://api.greenpick.store/accounts/login', data).then(res=>{
        localStorage.setItem('loggedUser', JSON.stringify(res.data))
        this.$router.push({ name: "Home"})
      }).catch(error=>{
        console.log(error)
        this.invalid=true
      })
    }
  }
}
</script>
