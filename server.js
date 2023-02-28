const express = require('express');
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const PORT = process.env.PORT || 4000;

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'));

async function startApolloServer() {
	const app = express();

	const schema = makeExecutableSchema({
		typeDefs: typesArray,
		resolvers: resolverArray
	});
	const server = new ApolloServer({
		schema
	});
	await server.start();
	server.applyMiddleware({
		app,
		path: '/graphql'
	});
	app.listen(PORT, () => {
		console.log(`Server is running! on ${PORT}`);
	});
}

// const root = {
// 	products: require('./products/products.model'),
// 	orders: require('./orders/order.model')
// };

startApolloServer();