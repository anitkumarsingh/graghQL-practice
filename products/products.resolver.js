const { getAllProducts, getProductByPrice,getProductById } = require('./products.model');

module.exports = {
	Query: {
		products: () => {
			return getAllProducts();
		},
		productsByPrice: (_, args) => {
			return getProductByPrice(args.min, args.max);
		},
    productById:(_,args)=>{
      console.log(args.id)
         return getProductById(args.id)
    }
	}
};
