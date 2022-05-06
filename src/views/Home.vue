<template>

<div>
  <Navigation />
  
  <div class="container my-12 mx-auto px-4 md:px-12">
   
<section class="grid gap-6 my-6 md:grid-cols-3">
            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Orders </dt>

                    <dd class="text-2xl font-light md:text-6xl">{{orders.length}} orders</dd>
                </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Fulfilled Orders</dt>

                    <dd class="text-5xl font-light md:text-6xl">5 orders </dd>
                </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Total restaurants</dt>

                    <dd class="text-5xl font-light md:text-6xl">1 restaurant</dd>

                    
                </dl>
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
                      <div v-if="!ord.is_fulfilled" class="text-sm  font-medium text-yellow-500">
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
                  <a @click="fullfil(ord.id)" class="text-green-600 hover:text-green-900">Mark delivered</a>
                  
                <!-- <button v-if="isSuperuser" @click="deleteOrd(ord.id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button> -->
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