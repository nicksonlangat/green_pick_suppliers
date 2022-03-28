<template>
<div>
    <Navigation />
    <br>
    
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">ADD NEW LOAN</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Fill the form below.</p>
        
        <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Loan value</label>
                    <input type="text" v-model="loan.loan_value" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Amount">
       </div>
            </div>
<br>
            <div class="items-center -mx-2 md:flex">
                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Loan interest rate</label>
                    <input type="text" v-model="loan.loan_interest_rate" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="% rate">
         </div>

                

                <div class="relative w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Loan currency</label>
                    <input type="text" v-model="loan.currency" class="block appearance-none w-full bg-white-200 border border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="KES">
          </div>
            </div>
            <div class="flex justify-center mt-6">
                <button @click="addLoan" class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Loan Amount</button>
            </div>
        </div>
    </section>
</div>

</template>
<script>
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'
export default {
  components:{Navigation},
  data(){
    return{
        user:null,
        assigned_to:null,
        users:[],
        loan:{
            currency:'',
            loan_value:'',
            loan_interest_rate:'',
        }

    }
  },
  methods:{
      addLoan(){
             const data ={
            loan_value:this.loan.loan_value,
            loan_interest_rate:this.loan.loan_interest_rate,
            loan_currency:this.loan.currency,
          }
          const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
          axios.post('http://localhost:8000/loan/amount/', data, config).then(res=>{
            //   console.log(res)
              this.$router.push({ name: "Home"})
          }).catch(error=>{
              console.log(error)
          })
      }
  },
  created(){
      this.user =JSON.parse(localStorage.getItem('loggedUser'))
  }
}
</script>