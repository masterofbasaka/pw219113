const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Hola mundo pero con vue',
		frutas: ['manzana','uva','peras','fresas' ],
		frutas2: [
			{nombre:'manzana',cantidad: 11},
			{nombre:'uva',cantidad: 0},
			{nombre:'peras',cantidad: 80},
			{nombre:'fresas',cantidad: 110}
		],
		nuevaFruta: '',
		total: 0
	},
	methods:{
		agregarFruta(){
			//console.log("diste clic");
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta,
				cantidad: 0
			});
			this.nuevaFruta= '';
		}
		
		},
		computed:{
			sumarfrutas(){
				this.total= 0 ;
				for(frutas of this.frutas2){
					this.total = this.total+frutas.cantidad;
				}
				return this.total;
			}

	}
});