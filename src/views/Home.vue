<template>

<div>
  <Navigation />
  
  <div class="container my-12 mx-auto px-4 md:px-12">
   
<section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div class="flex items-center p-8 bg-green-400 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            10
          </div>
          <div>
            <span class="block text-2xl font-bold">Orders</span>
            <span class="block text-gray-500">Placed</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-indigo-900 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            10
          </div>
          <div>
            <span class="block text-2xl font-bold">Products</span>
            <span class="block text-gray-500">Available</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-blue-300 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            14
          </div>
          <div>
            <span class="inline-block text-2xl font-bold">Restaurants</span>
          
            <span class="block text-gray-500">Onboarded</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-gray-900 shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            89
          </div>
          <div>
            <span class="block text-2xl font-bold">Users</span>
            <span class="block text-gray-500">Active</span>
          </div>
        </div>
      </section>
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>
   
   <div class="flex items-center">
    
    <div class="flex bg-gray-50 items-center p-2 rounded-md">
				
				<input v-model="number" class="rounded ml-1 block " type="text" name="" id="" placeholder="search order...">
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
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PLACED ON
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ORDER NUMBER
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 RESTAURANT
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 ORDER TOTAL
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DELIVERY STATUS
                </th>
                <!-- <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CONTENT
                </th> -->
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 DELIVERY ADDRESS
                </th>
                
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PAYMENT METHOD
                </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NOTES
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRODUCTS
                </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                      <div v-if="!ord.is_fulfilled" class="text-sm  font-medium text-indigo-600">
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
                <td class="px-6 py-4 ">
                  <div v-if="ord.delivery_address"  class="text-sm text-gray-900"> {{ord.delivery_address}}</div>
                  <div v-else class="text-sm text-gray-900"> 154 James Gichuru Road, Nairobi</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900">  {{ord.payment_method}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.order_notes}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> 
                    <ol>
                      <li v-for="prod of ord.products" :key="prod.qty">{{prod.qty}} {{prod.unit}} of {{prod.name}} </li>
                    </ol>
                  </div>
                </td>
               
                
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a @click="fullfil(ord.id)" class="text-green-600 hover:text-green-900">Delivered</a>
                  |
                <a v-if="isSuperuser" @click="deleteOrd(ord.id)" class="text-red-600"  >Delete</a>
								</td>

                
              </tr>
            </tbody>
          </table>
          
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
      isSuperuser:true
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
    // http://3.143.144.168/orders/
          return axios.get('http://3.143.144.168/orders/', config).then(res=>{
            console.log(res)
        this.orders=res.data
        console.log(this.orders)
      }).catch(error=>{
        console.log(error)
      })
    },
    fullfil(id){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
      axios.patch(`http://3.143.144.168/orders/${id}/`,
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
      axios.delete(`http://3.143.144.168/orders/${id}/`,
        ).then(res=>{
          this.getOrders()
        }).catch(error=>{
          console.log(error)
        })
    },
  },
  created(){
    this.user =JSON.parse(localStorage.getItem('loggedUser'))
    this.moment = moment;
    this.getOrders()
  }
}
</script>