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

                    <dd class="text-5xl font-light md:text-6xl">{{stats.total_awarded_loans}} orders </dd>
                </dl>
            </div>

            <div class="p-6 bg-white shadow rounded-2xl">
                <dl class="space-y-2">
                    <dt class="text-sm font-medium text-gray-500">Total restaurants</dt>

                    <dd class="text-5xl font-light md:text-6xl">{{stats.total_users}} restaurants</dd>

                    
                </dl>
            </div>
            
        </section>
        <!-- Column -->
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        </div>
   
   <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2 text-dark-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text"  v-model="number" name="search" placeholder="search by order number"
        class="w-1/2 py-2 border-b-2 border-blue-400 outline-none focus:border-green-400">
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
                  ORDER STATUS
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
                    {{moment(ord.date_requested).format('DD.MM.YYYY')}}
                    </div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.order_number}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.restaurant}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.total}}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div v-if="ord.order_status =='Pending Approval'" class="text-sm  font-medium text-green-900">
                        {{ord.order_status}}
                      </div>
                    </div>
                  </div>
                </td>
                 <!-- <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{loan.customer_credit_worthiness}}</div>
                </td> -->
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.delivery_address}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900">  {{ord.payment_method}}</div>
                </td>
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> {{ord.order_notes}}</div>
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a @click="awardLoan(ord.id)" class="text-green-600 hover:text-green-900">Mark fulfilled</a>
                  
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
    getOrders(){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          return axios.get('http://3.143.144.168/orders/').then(res=>{
            console.log(res)
        this.orders=res.data
        console.log(this.orders)
      }).catch(error=>{
        console.log(error)
      })
    },
    awardLoan(id){
      const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
      axios.patch(`http://localhost:8000/loans/${id}/`,
        {
    "is_approved": true
  }, config).then(res=>{
          this.getLoans()
        }).catch(error=>{
          console.log(error)
        })
    },
  },
  created(){
    this.user =JSON.parse(localStorage.getItem('loggedUser'))
    
    this.moment = moment;
    // axios.get('http://localhost:8000/stats').then(res=>{
    //   this.stats = res.data
    // }).catch(err=>{
    //   console.log(err)
    // })
    this.getOrders()
  }
}
</script>