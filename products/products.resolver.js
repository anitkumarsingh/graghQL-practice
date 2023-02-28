const {
	getAllProducts,
	getProductByPrice,
	getProductById,
	addNewProduct,
	addReviews
} = require('./products.model');

module.exports = {
	Query: {
		products: () => {
			return getAllProducts();
		},
		productsByPrice: (_, args) => {
			return getProductByPrice(args.min, args.max);
		},
		productById: (_, args) => {
			console.log(args.id);
			return getProductById(args.id);
		}
	},
	Mutation: {
		addProduct: (_, args) => {
			const { id, description, price } = args;
			return addNewProduct(id, description, price);
		},
		addProductReview:(_,args)=>{
			const { id, rating, comments } = args;
			return addReviews(id, rating, comments);
		}
	}
};
