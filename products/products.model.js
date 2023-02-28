const products = [
	{
		id: 'redshoe',
		name: 'Red Shoe',
		description: 'Red shoe description here...',
		price: 34.54
	},
	{
		id: 'blueshoe',
		name: 'Blue Shoes',
		description: 'Blue shoe description here...',
		price: 54.54
	}
];

const getAllProducts = () => {
	return products;
};

const getProductByPrice = (min, max) => {
	return products.filter((product) => {
		return product.price >= min && product.price <= max;
	});
};

getProductById =(id) =>{
  console.log('asdas',id,products.filter(product=>{product.id == id.toLowerCase()}))
  return products.filter(product=>{product.id === id.toLowerCase()})
}
module.exports = {
	getAllProducts,
  getProductByPrice,
  getProductById
};
