<template>
<div>
    <Navigation />
    <br>
    
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white"> NEW PRODUCT</h2>
        
        
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
                <button  class="px-4 py-2 text-white transition-colors duration-200 transform bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">Save product</button>
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
        products:[],
        categories:[],
        product:{
            name:'',
            product_image:'',
            price:'',
            unit_of_measurement:'',
            is_available:true,
            preference:'',
            category:''
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
              this.categories=res.data;
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
      this.user =JSON.parse(localStorage.getItem('loggedUser'))
      this.getProducts()
      this.getCategories()
  }
}
</script>