<template>

<div>
  <Navigation />
  
  <div class="container my-12 mx-auto px-4 md:px-12">
   
<section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-green-500 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-white rounded-full mr-6">
            {{dash.orders}}
          </div>
          <div>
            <span class="block text-2xl text-white font-bold">Orders</span>
            <span class="block text-white">Placed</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-teal-900 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-white rounded-full mr-6">
           {{dash.products}}
          </div>
          <div>
            <span class="block text-2xl text-white font-bold">Products</span>
            <span class="block text-white">Available</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-blue-900 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            {{dash.rests}}
          </div>
          <div>
            <span class="inline-block text-2xl text-white font-bold">Restaurants</span>
          
            <span class="block text-black text-white">Onboarded</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-gray-900 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            {{dash.users}}
          </div>
          <div>
            <span class="block text-2xl text-white font-bold">Users</span>
            <span class="block text-white">Active</span>
          </div>
        </div>
      </section>
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>
   
   <div class="flex items-center">
    
    <div class="flex bg-gray-50 items-center p-2 rounded-md">
				
				<input v-model="number" class="rounded ml-1 block " type="text" name="" id="" placeholder="search by order number">
          </div>
</div>
   <br>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <modal v-if="modalVisible" @close="modalVisible = false" :data="modalData"/>
            <thead class="bg-white">
              <tr>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  DATE
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  ORDER NUMBER
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                 RESTAURANT
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                 ORDER TOTAL
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  ORDER STATUS
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  DELIVERED
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
              <tr v-for="ord of filteredOrders" :key="ord.id">
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> 
                    {{moment(ord.placed_on).format('DD.MM.YYYY')}}
                    </div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.order_number}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div v-if="ord.restaurant" class="text-sm text-gray-900"> {{ord.restaurant}}</div>
                  <div v-else class="text-sm text-gray-900"> The Social House</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.totals}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div v-if="ord.order_status=='Pending Approval'" class="text-sm  font-medium text-blue-500">
                        PENDING
                      </div>
                      <div v-if="ord.order_status=='Declined'" class="text-sm  font-medium text-red-500">
                        DECLINED
                      </div>
                      <div v-if="ord.order_status=='Approved'" class="text-sm  font-medium text-green-500">
                        APPROVED
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div v-if="ord.is_fulfilled" class="text-sm  font-medium text-green-500">
                        YES
                      </div>

                      <div v-else  class="text-sm  font-medium text-red-500">
                        NO
                      </div>
                     
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 flex text-right text-sm font-medium"> 
               <button @click="openModal(ord)" class="bg-white text-blue-600 active:bg-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    >
                view
              </button>
              
								</td>
              </tr>
            </tbody>
            
          </table>
         
        </div>
        <br>
        <div class="flex mx-auto max-w-md">
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
        </div>

      </div>
    </div>
  
</div>
<br>

</div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Modal from '@/components/Modal.vue'
import axios from 'axios'
import moment from 'moment'
export default {
  components:{Navigation, Modal},
  data(){
    return{
      number: '',
      user:null,
      orders:[],
      currentOrder:null,
      stats:{},
      isSuperuser:true,
      dash:{},
      showModal: 0,
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
    filteredOrders() {
      return this.orders.filter((order) => {
        return order.order_number.toLowerCase().includes(this.number.toLowerCase());
      });
    },
  },
  methods:{
    openModal(data) {
      this.modalData = data
      this.modalVisible = true
    },
    toggleModal: function(id){
      this.showModal = id;
      console.log(id)
    },
    getOrders(){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get(`https://api.greenpick.store/orders/?page=${this.page}`, config).then(res=>{
            
        this.orders=res.data.results
        // this.orders.push(...res.data.results)
        this.nextPage=res.data.links.next
        this.previous = res.data.links.previous
        this.total_pages = res.data.total_pages
        console.log(this.nextPage)
        
      }).catch(error=>{
        console.log(error)
      })
    },
    getNextOrders() {
        if(this.nextPage!=null){
            this.page++
            this.prevPage++
            this.getOrders()
        }
        else{
            this.endReached=true;
        }
            },
    getPrevOrders() {
        if(this.previous!=null){
            this.page--
            this.getOrders()
        }
        else{
            this.endReached=true;
        }
            },
    fullfil(id){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
      axios.patch(`https://api.greenpick.store/orders/${id}/`,
        {
    "is_fulfilled": true
  }).then(res=>{
          this.getOrders()
        }).catch(error=>{
          console.log(error)
        })
    },
    deleteOrd(id){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
      axios.delete(`https://api.greenpick.store/orders/${id}/`,
        ).then(res=>{
          this.getOrders()
        }).catch(error=>{
          console.log(error)
        })
    },


    getDashboardData(){
      
          return axios.get('https://api.greenpick.store/dash').then(res=>{
           
        this.dash['orders']=res.data.orders
        this.dash['products']=res.data.products
        this.dash['users']=res.data.users
        this.dash['rests']=res.data.restaurants
      }).catch(error=>{
        console.log(error)
      })
    },

  },
  created(){
    
    this.user =JSON.parse(localStorage.getItem('loggedUser'))
    this.moment = moment;
    this.getOrders()
    this.getDashboardData()
    
  }
}
</script>
<style scoped>
.modal-backdrop
{
    opacity:0.5 !important;
}
</style>