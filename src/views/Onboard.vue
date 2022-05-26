<template>
<div>
  <Navigation/>
<div class="leading-loose">
  <form class="max-w-2xl m-4 mx-auto p-10 mt-4 bg-white rounded shadow-xl"  @submit.prevent="onBoard">
    <p class="text-[#E7BB7EB3] text-center font-bold uppercase">Personal Information</p>
    <div>
      <label class="block font-bold  text-[#E7BB7EB3]" >Name</label>
      <input v-model="user_data.name"  class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900" type="text"  placeholder="Your Name" >
    </div>
    <div class="mt-2">
      <label class="block font-bold  text-[#E7BB7EB3]" >Email</label>
      <input v-model="user_data.email"  class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900" type="email"  placeholder="Your Email" >
    </div>
    <div class="inline-block mt-2 w-1/2 pr-1">
      <label class="hidden block text-sm text-gray-600" >Phone Number</label>
      <input v-model="user_data.phone_number"  class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900"  type="text"  placeholder="Phone Number">
    </div>
    <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label class="hidden block text-sm text-white" >Role</label>
      <input v-model="user_data.role" class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900" type="text"    placeholder="Role" >
    </div>
     <p class="mt-4 text-[#E7BB7EB3] text-center font-bold uppercase">Restaurant Information</p>
    <div class="mt-2">
      <label class=" block font-bold  text-[#E7BB7EB3]" >Name</label>
      <input v-model="user_data.rest_name" class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900"  type="text"  placeholder="Restaurant's name" >
    </div>
    <div class="mt-2">
      <label class=" block font-bold  text-[#E7BB7EB3]" >Address</label>
      <input v-model="user_data.rest_address" class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900"  type="text"  placeholder="Address" >
    </div>
    <div class="mt-2">
      <label class=" block font-bold  text-[#E7BB7EB3]" >Cover Image(Optional)</label>
      <input  name="imagesArray" @change="onChange" class="w-full rounded-md peer pl-12 pr-2 py-2 text-gray-900 border-2 border-gray-900 bg-white placeholder-gray-900"  type="file" >
    </div>
    <div class="mt-4 mx-auto">
      <button class="px-4 py-1 ml-56 text-white font-light tracking-wider bg-blue-900 rounded" type="submit">Continue</button>
    </div>
  </form>
</div>
</div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  components:{Navigation},
  data(){
    return{
      user_data:{
        "name":"",
        "email":"",
        "phone_number":"",
        "password":"",
        "is_superuser":false,
        "role":"",
         "rest_name":"",
         "rest_address":"",
         "rest_cover_image":null,
      },
      user:null,
      orders:[],
      currentOrder:null,
      stats:{},
      isSuperuser:true,
      imagesArray: null
    }
  },
  computed: {
    filteredOrders() {
      return this.orders.filter((order) => {
        return order.order_number.toLowerCase().includes(this.number.toLowerCase());
      });
    },
  },
  methods:{
    onChange (event) {
          this.imagesArray = event.target.files[0]
        },

    onBoard(){
      console.log(this.user_data)
      const data = {
        "name":this.user_data.name,
        "email":this.user_data.email,
        "phone_number":this.user_data.phone_number,
        "password":Math.random().toString(36).slice(-8),
        "role":"Executive chef",
        "is_superuser":this.user_data.is_superuser,
        "restaurant_branch":null,
      }
      let rest_data = {
        "name":this.user_data.rest_name,
        "address":this.user_data.rest_address,
        "executive_chef":"",
      }
      const formData = new FormData()
      
      formData.append('name', rest_data.name)
      formData.append('address', rest_data.address)
      formData.append('cover_image', this.imagesArray, this.imagesArray.name)
      axios.post('http://localhost:8000/accounts/register',data).then(res=>{
                          console.log(res)
                          rest_data['executive_chef'] = res.data.user.id;
                          formData.append("executive_chef", rest_data.executive_chef)
                          this.onBoardRest(formData)
                        }).catch(error=>{
                          console.log(error)
                        })
    },
    onBoardRest(data){
      console.log(data)
      
      axios.post('http://localhost:8000/restaurants/',data).then(res=>{
                          console.log(res)
                           this.$router.push({ name: "Success"})
                        }).catch(error=>{
                          console.log(error)
                        })
    },
  },
  created(){
   
    console.log(Math.random().toString(36).slice(-8))
  }
}
</script>