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
				
				<input v-model="name" class="rounded ml-1 block " type="text" name="" id="" placeholder="search products...">
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
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Action
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
									<p v-if="!editable" class="text-gray-900 whitespace-no-wrap">
										{{prod.price}}
									</p>
									<form v-if="editable">
										<input v-model="newPrice" placeholder="New price..." type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									</form>
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
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<button v-if="!editable" @click="edit(prod.id)" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
								<button v-if="editable" @click="commit(prod.id)" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Save</button>
								<button v-if="!editable" @click="deleteProd(prod.id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
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
		editable:false,
		newPrice:'',
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
	edit(id){
		this.editable = true
		console.log('edited', id)
	},
	deleteProd(id){
	axios.delete(`http://3.143.144.168/products/${id}/`).then(res=>{
				this.getProducts()
				}).catch(error=>{
				console.log(error)
				})
	},
	commit(id){
		axios.patch(`http://3.143.144.168/products/${id}/`,
				{
			"price": this.newPrice
		}).then(res=>{
				this.getProducts()
				this.editable = false
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