const {getAllOrders} =require('./order.model');

module.exports ={
  Query:{
    orders:()=>getAllOrders()
  }
}