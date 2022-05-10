<template>
  <div>
    <br>
    <br><br>
    <div class="w-full max-w-md p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <img style="margin-right:auto; margin-left:auto; height:200px;" src="../assets/logo2.png" alt="">
       
        
        <form  class="mt-6">
              <div>
                <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                <input
                  name="email"
                  v-model="user.email"
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

               <div>
                <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Full name</label>
                <input
                  name="first_name"
                  v-model="user.name"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>
               <div>
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Phone Number</label>
                <input
                  name="phone_number"
                  v-model="user.phone_number"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>
              <div>
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Role</label>
                <select
                  name="password"
                  v-model="user.role"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md
                   dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500
                    dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option value="Executive chef">Executive chef</option>
                  
                    </select>
              
              </div>
              <div>
                <label  class="block text-sm text-gray-800 dark:text-gray-200">Restaurant</label>
                <select
                 
                  v-model="user.restaurant_branch"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option v-for="cat of rests" :key="cat.id" :value="cat.id">
            {{cat.name}}
        </option>
                </select>
              
              </div>

              <div>
                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                <input
                  
                  v-model="user.password"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
              
              </div>

            <div class="mt-6">
                <button
                @click="registerUser" 
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Register
                </button>
            </div>
        </form>
     

        <div class="flex items-center justify-between mt-4">
            <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

            <!-- <a href="#" class="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or</a> -->

            <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <!-- <p class="mt-8 text-xs font-light text-center text-gray-400"> Have an account? 
          <router-link class="font-medium text-gray-700 dark:text-gray-200 hover:underline" to="/login">Log In</router-link> 
        </p> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      submitted: false,
      rests:[],
      message: '',
      user:{
        email:'',
        name:'',
        phone_number:'',
        password:'',
        role:"",
        restaurant_branch:"",
       
      }
  }
  },

  methods: {
    getRests(){
      return axios.get('http://3.143.144.168/restaurants').then(res=>{
        this.rests = res.data
        console.log(this.rests)
      })
    },
      registerUser(e){
          const data={
                email: this.user.email,
                name:this.user.name,
                phone_number:this.user.phone_number,
                password:this.user.password,
                is_superuser:true,
                role:this.user.role,
                restaurant_branch:this.user.restaurant_branch
          }
          e.preventDefault();
          console.log(data)
          return axios.post('http://3.143.144.168/accounts/register',data).then(res=>{
              console.log(res)
              this.$router.push({ name: "Home"})
          }).catch(error=>{
              console.log(error)
          })
      },
  },
  mounted(){
    this.getRests()
  }


}
</script>