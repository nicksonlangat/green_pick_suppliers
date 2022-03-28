<template>
<div>
    <Navigation />
    <br>
    <!-- component -->
<div class="bg-white p-8 rounded-md w-full">
	<div class=" flex items-center justify-between pb-6">
		<div>
			<h2 class="text-gray-600 font-semibold">All products</h2>
			
		</div>
		<div class="flex items-center justify-between">
			<div class="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd" />
				</svg>
				<input v-model="name" class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search products...">
          </div>
				<div class="lg:ml-40 ml-10 space-x-8">
					<button class="bg-gray-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">PDF Export products</button>
					<button class="bg-gray-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">CSV Export</button>
				</div>
			</div>
		</div>
		<div>
			<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table class="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Name
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									UOM
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Unit Price
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Category
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Preference
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Availability
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="prod of filteredProducts" :key="prod.id">
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										
											<div class="ml-3">
												<p class="text-gray-900 whitespace-no-wrap">
													{{prod.name}} 
												</p>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{{prod.unit_of_measurement}}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{prod.price}}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{prod.category}}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{{prod.preference}}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative" v-if="prod.is_available == true">Yes</span>
									</span>
								</td>
							</tr>	
						</tbody>
					</table>
					
				</div>
			</div>
		</div>
	</div>
    </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import axios from 'axios'
export default {
  components:{Navigation},
  data(){
    return{
        name:'',
      user:null,
      products:[],
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
    getProducts(){
        const config = {
        headers: { Authorization: `Token ${this.user.access_token}` }
    };
      return axios.get('http://3.143.144.168/products').then(res=>{
        this.products=res.data
        console.log(res.data)
      }).catch(error=>{
        console.log(error)
      })
    },
},
created(){
    this.user =JSON.parse(localStorage.getItem('loggedUser'))
     this.getProducts()
  }
}
</script>