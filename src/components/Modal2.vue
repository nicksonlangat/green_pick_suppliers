<template>
    <div>
    
    <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Edit {{data.name}}
                </h3>
                <button @click="$emit('close')"  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <form @submit.prevent="addProduct" class="mt-2 ">
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                       </div>
            </div>
<br>
<div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product name</label>
                    <input type="text" v-model="product.name" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Name">
       </div>
            </div>
<br>
<div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Unit of measurement</label>
                    <input type="text" v-model="product.unit_of_measurement" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="e.g kgs, bunch etc">
       </div>
            </div>
<br>
<div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product price</label>
                    <input type="text" v-model="product.price" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="KES">
       </div>
            </div>
<br>

            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Category</label>
                    <select v-model="product.category" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option>Select category</option>
        <option v-for="cat of categories" :key="cat.id" :value="cat.id">
            {{cat.name}}
        </option>
        </select>
     
                    </div>
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Preference</label>
                    <select v-model="product.preference" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
        <option>Local</option>
         <option>Imported</option>
         
        </select>
                </div>
            </div>
            <br>
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product image</label>
                    <input name="imagesArray" @change="onChange" type="file"  class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-6 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
       </div>
            </div>
            <div class="flex justify-center mt-6">
                <button  class="px-4 py-2 text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">Update product</button>
            </div>
        </form>
            </div>
            
        </div>
    </div>
    </div>
    <div  class="opacity-10 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    props: ['data'],
    data(){
        return {
            categories:[],
        product:{
            name:this.data.name,
            price:this.data.price,
            unit_of_measurement:this.data.unit_of_measurement,
            preference:this.data.preference,
            category:this.data.category
        },
        imagesArray: null
        }
    },
    methods:{
      getProducts(){
          const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get('https://api.greenpick.store/products', config).then(res=>{
              this.products=res.data;
          })
      },
      getCategories(){
          const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get('https://api.greenpick.store/categories', config).then(res=>{
              this.categories=res.data.results;
          })
      },
       onChange (event) {
          this.imagesArray = event.target.files[0]
        },
      addProduct(){
             const data ={
                 name:this.product.name,
                 product_image:null,
                 price:this.product.price,
                 unit_of_measurement:this.product.unit_of_measurement,
                 preference:this.product.preference,
                 category:this.product.category     
            }
            const formData = new FormData()
      
            formData.append('category', data.category)
            formData.append('name', data.name)
            formData.append('price', data.price)
            formData.append('preference', data.preference)
            formData.append('unit_of_measurement', data.unit_of_measurement)
            formData.append('product_image', this.imagesArray, this.imagesArray.name)
            console.log(formData)
            const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          axios.post('https://api.greenpick.store/products/', formData, config).then(res=>{
              this.$router.push({ name: "Products"})
          }).catch(error=>{
              console.log(error)
          })
      }
  },
  created(){
    console.log(this.data)
      this.user =JSON.parse(localStorage.getItem('loggedUser'))
      this.getProducts()
      this.getCategories()
  }
}
</script>