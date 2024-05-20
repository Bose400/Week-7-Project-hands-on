const express = require("express")
const mongoose = require('mongoose');
const Product = require("./models/product.js")
const app = express()
app.use(express.json())

     app.get('/', (req, res)=>{
      res.send("welome to backend")

})
app.post('/api/product', async (req, res)=>{
    try{


        const product = await Product.create(req.body)
        res.status(200).json(product)

    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
   
}) 
app.get('/api/product', async (req, res)=>{
    
    const products = await Product.find({}); // initialize the products
  res.status(200).json(products); // get all products if status is 200
}) 


app.listen(3000,  (req, res)=>{
    console.log("server is running at PORT 3000")

})


mongoose.connect("mongodb+srv://aiyedogbonabimbola3:abimbola@cluster0.k6znrx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

    console.log("connection sucessuful")
   

})
.catch(()=>{
    console.log("connection failed")
})



            
