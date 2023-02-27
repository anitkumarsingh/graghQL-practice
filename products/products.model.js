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

module.exports = {
	getAllProducts
};
