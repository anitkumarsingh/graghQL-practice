const products = [
	{
		id: 'redshoe',
		name: 'Red Shoe',
		description: 'Red shoe description here...',
		price: 34.54,
		reviews: []
	},
	{
		id: 'blueshoe',
		name: 'Blue Shoes',
		description: 'Blue shoe description here...',
		price: 54.54,
		reviews: []
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

const getProductById = (id) => {
	console.log(
		'asdas',
		id,
		products.filter((product) => {
			product.id == id.toLowerCase();
		})
	);
	return products.filter((product) => {
		product.id === id.toLowerCase();
	});
};
const addNewProduct = (id, description, price) => {
	const newProduct = {
		id,
		description,
		price,
		reviews: []
	};
	products.push(newProduct);
	return newProduct;
};

const addReviews = (id, rating, comments) => {
	const findProduct = products.find((p) => p.id === id);
	const review = {
		date: new Date(),
		rating,
		comments
	};
	console.log(findProduct,review)
	if (findProduct) {
		findProduct.reviews.push(review);
	}

	return review;
};
module.exports = {
	getAllProducts,
	getProductByPrice,
	getProductById,
	addNewProduct,
	addReviews
};
