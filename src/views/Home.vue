<template>

<div>
  <Navigation />
  
  <div class="container my-12 mx-auto px-4 md:px-12">
   
<section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-green-400 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            {{dash.orders}}
          </div>
          <div>
            <span class="block text-2xl font-bold">Orders</span>
            <span class="block text-black">Placed</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-indigo-900 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
           {{dash.products}}
          </div>
          <div>
            <span class="block text-2xl text-white font-bold">Products</span>
            <span class="block text-white">Available</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-blue-300 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            {{dash.rests}}
          </div>
          <div>
            <span class="inline-block text-2xl font-bold">Restaurant</span>
          
            <span class="block text-black">Onboarded</span>
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
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
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
                  DELIVERY STATUS
                </th>
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                 DELIVERY ADDRESS
                </th>
                
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  PAYMENT METHOD
                </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  NOTES
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  PRODUCTS
                </th> -->
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
                      <div v-if="!ord.is_fulfilled" class="text-sm  font-medium text-blue-500">
                        PENDING
                      </div>
                      <div v-else class="text-sm  font-medium text-green-500">
                        DELIVERED
                      </div>
                    </div>
                  </div>
                </td>
                 <!-- <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{loan.customer_credit_worthiness}}</div>
                </td> -->
                <!-- <td class="px-6 py-4 ">
                  <div v-if="ord.delivery_address"  class="text-sm text-gray-900"> {{ord.delivery_address}}</div>
                  <div v-else class="text-sm text-gray-900"> 154 James Gichuru Road, Nairobi</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900">  {{ord.payment_method}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.order_notes}}</div>
                </td> -->
                <!-- <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> 
                    <ol>
                      <li v-for="prod of ord.products" :key="prod.qty">{{prod.qty}} {{prod.unit}} of {{prod.name}} </li>
                    </ol>
                  </div>
                </td> -->
               
                
                <td class="px-6 py-4 flex text-right text-sm font-medium"> 
               <button class="bg-white text-blue-600 active:bg-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    >
                view
              </button>
								</td>

                
              </tr>
            </tbody>
            
          </table>
          

          
<div class="flex flex-col items-center">
  <!-- Help text -->
  <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">1</span> to <span class="font-semibold text-gray-900 dark:text-white">15</span> of <span class="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  <!-- Buttons -->
  <div class="inline-flex mt-2 xs:mt-0">
      <button class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Prev
      </button>
      <button class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
      </button>
  </div>
</div>

          
        </div>
      </div>
    </div>
  
</div>
<br>

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
      number: '',
      user:null,
      orders:[],
      currentOrder:null,
      stats:{},
      isSuperuser:true,
      dash:{},
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
    onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
    getOrders(){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get('https://api.greenpick.store/orders/', config).then(res=>{
            
        this.orders=res.data.results
        
      }).catch(error=>{
        console.log(error)
      })
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
            console.log(res)
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