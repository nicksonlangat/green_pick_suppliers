<template>
    <div>
        <Navigation />
        <br>
        <!-- component -->
    <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-black uppercase ml-2 font-semibold">All users</h2>
                
            </div>
            <div class="flex items-center justify-center">
                <div class="flex items-center p-2 rounded-md">
                    
                    <input v-model="name" class="rounded mr-56 block " type="text" name="" id="" placeholder="search users...">
              </div>
                    
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
                      NAME
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      EMAIL
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                    PHONE
                    </th>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      ACTION
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="ord of filteredProducts" :key="ord.id">
                    <td class="px-6 py-4 ">
                      {{ord.name}}
                    </td>
                    <td class="px-6 py-4 ">
                      <div class="text-sm text-gray-900"> {{ord.email}}</div>
                    </td>
                    <td class="px-6 py-4 ">
                      <div  class="text-sm text-gray-900"> {{ord.phone_number}}</div>
                    </td>
                    
                    
                    <td class="px-6 py-4 gap-4 flex text-right text-sm font-medium">
                  <p class="text-red-500" @click="deleteProd(ord.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
                  </p>
                  
                    </td>
                  </tr>
                </tbody>
                
              </table>
             
            </div>
            <br>
            <div class="flex mx-auto max-w-md">
                <button v-if="previous !== null" @click="getPrevProducts()" class="px-4 py-2 mx-1 text-white capitalize bg-blue-900 rounded-md">
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
    
                
    
                <button v-if="nextPage !== null" @click="getNextProducts()" class="px-4 py-2 mx-1 transition-colors duration-200 transform bg-blue-900 rounded-md hover:text-white text-white">
                    <div class="flex items-center -mx-1">
                        <span class="mx-1">
                            Next
                        </span>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </button>
            </div>
    
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
      data(){
        return{
            name:'',
            user:null,
            products:[],
            editable:false,
            newPrice:'',
            page:1,
          nextPage:'',
          previous:'',
          endReached:false,
          prevPage:0,
          total_pages:'',
          modalVisible: false,
           modalData: null
        }
      },
      computed: {
        filteredProducts() {
          return this.products.filter((product) => {
            return product.name.toLowerCase().includes(this.name.toLowerCase());
          });
        },
      },
      methods:{
        openModal(data) {
          this.modalData = data
          this.modalVisible = true
        },
        getNextProducts() {
            if(this.nextPage!=null){
                this.page++
                this.prevPage++
                this.getProducts()
            }
            else{
                this.endReached=true;
            }
                },
        getPrevProducts() {
            if(this.previous!=null){
                this.page--
                this.getProducts()
            }
            else{
                this.endReached=true;
            }
                },
        getProducts(){
            const config = {
            headers: { Authorization: `Token ${this.user.access_token}` }
        };
          return axios.get(`https://api.greenpick.store/accounts/users/?page=${this.page}`).then(res=>{
            this.products=res.data.results
             this.nextPage=res.data.links.next
            this.previous = res.data.links.previous
            this.total_pages = res.data.total_pages
            // console.log(res.data)
          }).catch(error=>{
            console.log(error)
          })
        },
        edit(id){
            this.editable = true
            console.log('edited', id)
        },
        deleteProd(id){
        axios.delete(`https://api.greenpick.store/accounts/users/${id}/`).then(res=>{
                    this.getProducts()
                    }).catch(error=>{
                    console.log(error)
                    })
        },
        commit(id){
            axios.patch(`https://api.greenpick.store/products/${id}/`,
                    {
                "price": this.newPrice
            }).then(res=>{
                    this.getProducts()
                    this.editable = false
                    }).catch(error=>{
                    console.log(error)
                    })
                },
        update(){
            axios.patch('https://api.greenpick.store/accounts/users/1/',
                    {
                "name": "Adams"
            }).then(res=>{
                console.log(res.data)
                    }).catch(error=>{
                    console.log(error)
                    })
                }
            },
    created(){
        this.user =JSON.parse(localStorage.getItem('loggedUser'))
         this.getProducts()
      }
    }
    </script>