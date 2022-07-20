<template>

<div>
  <Navigation />
  
  <div class="container my-12 mx-auto px-4 md:px-12">
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>
   
   <div class="flex items-center">
    
    <div class="flex bg-gray-50 p-2 rounded-md">
				
				<input v-model="name" class="rounded ml-1 block " type="text" name="" id="" placeholder="search...">
          </div>
          <div class="flex items-end justify-end">
            <router-link class="font-medium text-gray-700" to="/new-category"> 
					<button class="bg-blue-900 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Add category</button>
			</router-link>
          </div>
</div>
   <br>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <modal2 v-if="modalVisible" @close="modalVisible = false" :data="modalData"/>
            <thead class="bg-white">
              <tr>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Category Image
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Category Name
                </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Actions
                </th>
                
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="cat of filteredCats" :key="cat.id">
                <td class="px-6 py-4 ">
                  <img class="object-cover h-24 w-48" :src="cat.category_image" alt="">
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{cat.name}}</div>
                </td>
                <td class="px-6 py-12 flex text-right text-sm font-medium"> 
               <button @click="openModal(cat)" class="bg-white text-blue-600 active:bg-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    >
                edit
              </button>
              <button @click="deleteCat(cat.id)" class="bg-red-500 text-white active:bg-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    >
                delete
              </button>
              
			 </td>
              </tr>
            </tbody>
            
          </table>
         
        </div>
        <br>
        <!-- <div class="flex mx-auto max-w-md">
            <button v-if="previous !== null" @click="getPrevOrders()" class="px-4 py-2 mx-1 text-white capitalize bg-blue-900 rounded-md">
                <div class="flex items-center -mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>

                    <span class="mx-1">
                        previous
                    </span>
                </div>
            </button>

            <a href="#" class="hidden px-4 py-2 mx-1 text-gray-900 transition-colors duration-200 transform bg-gray-100 rounded-md sm:inline">
                Page {{page}} of {{total_pages}}
            </a>

            

            <button v-if="nextPage !== null" @click="getNextOrders()" class="px-4 py-2 mx-1 transition-colors duration-200 transform bg-blue-900 rounded-md hover:text-white text-white">
                <div class="flex items-center -mx-1">
                    <span class="mx-1">
                        Next
                    </span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </button>
        </div> -->

      </div>
    </div>
  
</div>
<br>

</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Modal2 from '@/components/Modal2.vue'
import axios from 'axios'
export default {
  components:{Navigation, Modal2},

  data() {
    return {
      rests:[],
      name:'',
      modalVisible: false,
    modalData: null
      
  }
  },
  computed: {
    filteredCats() {
      return this.rests.filter((cat) => {
        return cat.name.toLowerCase().includes(this.name.toLowerCase());
      });
    },
  },

  methods: {
    openModal(data) {
      this.modalData = data
      this.modalVisible = true
    },
    getCats(){
      return axios.get('https://api.greenpick.store/categories').then(res=>{
        this.rests = res.data.results
        console.log(this.rests)
      })
    },
    deleteCat(id){
      return axios.delete(`https://api.greenpick.store/categories/${id}/`).then(res=>{
       this.getCats()
      })
    },
  },
  mounted(){
    this.getCats()
  }

}
</script>

<style>

</style>