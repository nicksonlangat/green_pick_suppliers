<template>
    <div>
    
    <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {{ data.name }}
                </h3>
                <button @click="$emit('close')"  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                
            <section class="w-full max-w-2xl px-6 py-4">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white"> Edit {{ data.name }}</h2>
        
        
        <form @submit.prevent="editCategory" class="mt-2 ">
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                       </div>
            </div>
<br>
<div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Product name</label>
                    <input type="text" v-model="category.name" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" :placeholder="data.name">
       </div>
            </div>
            <br><br>
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
    </section>

            </div>
            <!-- Modal footer -->
            <!-- <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button  type="button" class="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center ">Mark Delivered</button>
               <button  type="button" class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center ">Mark Rejected</button>
            </div> -->
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
            user:null,
            category:{
            name:'',
        },
        imagesArray: null
        }
    },
    methods: {
        onChange (event) {
          this.imagesArray = event.target.files[0]
        },
        editCategory(){
             const data ={
                 name:this.category.name,
                 category_image:null,   
            }
            const formData = new FormData()
      
           
            formData.append('name', data.name)
           if(this.imagesArray != null) {
            formData.append('product_image', this.imagesArray, this.imagesArray.name)
           }
           else {'no image'}
            console.log(formData)
            const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          axios.patch(`https://api.greenpick.store/products/${this.data.id}/`, formData, config).then(res=>{
              this.$emit('close')
          }).catch(error=>{
              console.log(error)
              this.$emit('close')
          })
      }

    },
    created(){
      this.user =JSON.parse(localStorage.getItem('loggedUser'))
  }
  };
</script>