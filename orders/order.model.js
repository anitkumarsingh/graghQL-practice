const orders = [
	{
		purchaseOn: '2021-05-29',
		subTotal: 67.56,
		items: [
			{
				products: {
					id: 'redshoe',
					name: 'Red shoe',
					price: 34.9,
					description: 'Old Red shoe...'
				},

				quantity: 3
			}
		]
	}
];

const getAllOrders = () => {
	return orders;
};

module.exports = {
	getAllOrders
};
