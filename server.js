const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const app = express();

const PORT = process.env.PORT || 4000;

const schema =buildSchema(`
  type Query{
  products:[Product]
  orders:[Order]
  }

  type Product{
    id:ID!
    name:String!
    description:String
    price:Float!
    reviews:[Review]
  }
  type Review{
    date:String!
    rating:Int!
    comments:String
  }
  type Order{
    purchaseOn:String!
    items:[OrderItem]
  }
  type OrderItem{
    products:Product!
    quantity:Float!
  }
`)
const root ={
  products:[
    {
      id:'redshoe',
      name:'Red Shoe',
      description:'Red shoe description here...',
      price:34.54
    },
    {
      id:'blueshoe',
      name:'Blue Shoes',
      description:'Blue shoe description here...',
      price:54.54
    }
  ],
  orders:[
    {
      purchaseOn:'2021-05-29',
      quantity:2
    }
  ]
}
app.use('/graphql',graphqlHTTP({
  schema,
  rootValue:root,
  graphiql:true
}))
app.listen(PORT,()=>{
  console.log(`Server is running! on ${PORT}`)
})