const express = require('express');
const path = require('path');
const {loadFilesSync} = require('@graphql-tools/load-files')
const { graphqlHTTP } = require('express-graphql');
const  { makeExecutableSchema} =require('@graphql-tools/schema');
const app = express();

const PORT = process.env.PORT || 4000;

const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const schema = makeExecutableSchema({
  typeDefs:typesArray
})

const root = {
	products:require('./products/products.model'),
  orders:require('./orders/order.model')
};
app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true
	})
);
app.listen(PORT, () => {
	console.log(`Server is running! on ${PORT}`);
});
