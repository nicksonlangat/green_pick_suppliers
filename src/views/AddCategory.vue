<template>
<div>
    <Navigation />
    <br>
    <br><br><br><br>
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white"> NEW CATEGORY</h2>
        
        
        <form @submit.prevent="addCategory" class="mt-2 ">
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                       </div>
            </div>
<br>
<div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Category name</label>
                    <input type="text" v-model="category.name" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Name">
       </div>
            </div>
            <br><br>
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Category image</label>
                    <input name="imagesArray" @change="onChange" type="file"  class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-6 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       </div>
            </div>
            <div class="flex justify-center mt-6">
                <button  class="px-4 py-2 text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">Save category</button>
            </div>
        </form>
    </section>
</div>

</template>
<script>
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'
export default {
  components:{Navigation},
  data(){
    return{
        user:null,
        category:{
            name:'',
        },
        imagesArray: null

    }
  },
  methods:{
       onChange (event) {
          this.imagesArray = event.target.files[0]
        },
      addCategory(){
             const data ={
                 name:this.category.name,
                 category_image:null,   
            }
            const formData = new FormData()
      
           
            formData.append('name', data.name)
            formData.append('category_image', this.imagesArray, this.imagesArray.name)
            console.log(formData)
            const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          axios.post('https://api.greenpick.store/categories/', formData, config).then(res=>{
              this.$router.push({ name: "categories"})
          }).catch(error=>{
              console.log(error)
          })
      }
  },
  created(){
      this.user =JSON.parse(localStorage.getItem('loggedUser'))
  }
}
</script>