<template>
    <div>
    
    <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {{ data.order_number }}
                </h3>
                <button @click="$emit('close')"  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
                
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                   Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                   Unit Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="prod of data.products" :key="prod.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <img :src = "prod.product_image" class="rounded" alt="">
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {{prod.name}}
                </th>
                <td class="px-6 py-4">
                   {{prod.qty}}
                </td>
                <td class="px-6 py-4">
                    {{prod.price}}
                </td>
                <td class="px-6 py-4">
                     {{prod.price * prod.qty}}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Totals
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    -
                </th>
                <td class="px-6 py-4">
                  -
                </td>
                <td class="px-6 py-4">
                   -
                </td>
                <td class="px-6 py-4">
                     {{data.totals}}
                </td>
            </tr>
        </tbody>
    </table>
    <strong>Delivery Address: {{data.delivery_address}}</strong>
    <br>
    <strong>Payment: {{data.payment_method}}</strong>
</div>

            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button @click="markDelivered(data.id)" type="button" class="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center ">Mark Delivered</button>
               <button @click="$emit('close')" type="button" class="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center ">Close</button>
            </div>
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

    methods:{
        markDelivered(id){
      axios.patch(`https://api.greenpick.store/orders/${id}/`,
        {
        "is_fulfilled": true
  }).then(res=>{
    this.$emit('close')
        }).catch(error=>{
          console.log(error)
        })
        },
        markRejected(id){
      axios.patch(`https://api.greenpick.store/orders/${id}/`,
        {
        "order_status": "Declined"
  }).then(res=>{
    this.$emit('close')
        }).catch(error=>{
          console.log(error)
        })
        }
        
    }
  };
</script>