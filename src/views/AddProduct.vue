<template>
<div>
    <Navigation />
    <br>
    
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white"> NEW PRODUCT</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Fill the form below.</p>
        
        <div class="mt-6 ">
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
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
                    </div>
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Preference</label>
                    <select v-model="product.preference" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
        <option>Local</option>
         <option>Imported</option>
         
        </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
                    <!-- <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email"> -->
                </div>
            </div>
            <div class="flex justify-center mt-6">
                <button @click="addProduct" class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save product</button>
            </div>
        </div>
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
        }

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
      addProduct(){
             const data ={
                 customer:this.user.user.id,
                 name:this.product.name,
                //  product_image:this.product.product_image,
                 price:this.product.price,
                 unit_of_measurement:this.product.unit_of_measurement,
                //  is_available:this.product.is_available,
                 preference:this.product.preference,
                 category:this.product.category     
            }
            console.log(data)
            const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          axios.post('https://api.greenpick.store/products/', data, config).then(res=>{
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