const mongoose  = require("mongoose");
const {Schema} = mongoose;
main().then(()=>{
    console.log("connetion to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
//Database Relationship:--
//Approch2:one-to-many:----
const orderSchema  = new Schema({
    item:{
        type:String,
    },
  
    price:{
        type:Number,
    },
  
});
const customerSchema  = new Schema({
    name:{
        type:String,
    },
    order:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
});

// customerSchema.post("findOneAndDelete",async (data) =>{
//     if(data.Orders.length){
//         let res = await Order.deleteMany({_id: {$in:customer.orders} });
//         console.log(res);
        
//     }
// })
const Customer  = mongoose.model("Customer",customerSchema);
const Order  = mongoose.model("Order",orderSchema);

const addCustomer  = async()=>{
    let cust1  =new Customer({
        name:"vishal"
    })
     let order1  = await Order.findOne({item:"samosa"});
     let order2  = await Order.findOne({item:"halwa"});

     cust1.order.push(order1);
     cust1.order.push(order2);

     let result  = await cust1.save();
     console.log(result);
}

addCustomer();
// const addOrder  = async()=>{
//    let res  =  await Order.insertMany([
//     {item:"samosa",price:20},
//     {item:"halwa",price:50},
//     {item:"kazukatli",price:120}
// ])
// console.log(res);
// }
// addOrder();
//----------------------------------------------------------------------------------------------
//Handling Deletion:-

const addCust = async () =>{
    let newCust  = new Customer({
        name :"khopla Singh",
    });
      let newOrder = new Order({
        item : "Pizza",
        price : 500,
        });
        newCust.order.push(newOrder);
         await newOrder.save();
         await newCust.save();

         console.log("addedd new customer");
         
};

const delCust = async () =>{
    let data = await Customer.findByIdAndDelete("691f4b920f7971f243562568")
    console.log(data);
    
} 
delCust();
//addCust();