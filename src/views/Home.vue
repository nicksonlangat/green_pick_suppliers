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
                      <div v-if="ord.order_status =='Pending Approval'" class="text-sm  font-medium text-yellow-900">
                        {{ord.order_status}}
                      </div>
                      <div v-if="ord.order_status =='Declined'" class="text-sm  font-medium text-red-900">
                        {{ord.order_status}}
                      </div>
                      <div v-if="ord.order_status =='Approved'" class="text-sm  font-medium text-green-900">
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
                <td class="px-6 py-4 ">
                  <div class="text-sm text-gray-900"> 
                    <ol>
                      <li v-for="prod of ord.products" :key="prod.qty">{{prod.qty}} {{prod.unit}} of {{prod.name}} </li>
                    </ol>
                  </div>
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
<!-- Modal toggle -->

<!-- <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
  Toggle modal
</button> -->
<!-- Main modal -->
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>

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
    // http://3.143.144.168/orders/
          return axios.get('http://localhost:8000/orders/', config).then(res=>{
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