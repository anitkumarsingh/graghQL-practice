const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const app = express();

const PORT = process.env.PORT || 4000;

const schema =buildSchema(`
  type Query{
    name:String,
    description:String
    price:Float
  }
`)
const root ={
  name:'Red Shoes',
  description:'Some description here...',
  price:34.43
}
app.use('/graphql',graphqlHTTP({
  schema,
  rootValue:root,
  graphiql:true
}))
app.listen(PORT,()=>{
  console.log(`Server is running! on ${PORT}`)
})