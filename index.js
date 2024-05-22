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

// update data on the database
app.put('/api/products/:id', async (req, res)=>{

    try{
      const{id} = req.params;
  
     const product = await Product.findByIdAndUpdate(id, req.body)
    if(!product){
      
      res.status(404).json({message:"product not find, did you forget your glasses"})
    }
      const updatedProduct = await Product.findById(id)
      res.status(200).json(updatedProduct)
  
    } catch (error) {
         res.status(500).json({message: error.message})
    }
  
  }) 
  // delete data fron the datebase
app.delete('/api/products/:id', async (req, res)=>{
    try{
      const{id} = req.params;
  
    const product = await Product.findByIdAndDelete(id)
    if(!product){
      
     return res.status(404).json({message:"product not found!"})
    }
    res.status(200).json({message: "Product deleted sucessful"})
  
    } catch (error) {
         res.status(500).json({message: error.message})
    }
  }) 
  // Get product by id 
app.get('/api/products/:id', async (req, res)=>{

    try{
      const{id} = req.params;
  
     const product = await Product.findById(id)
      res.status(200).json(product)
  
    } catch (error) {
         res.status(500).json({message: error.message})
    }
  
  }) 


mongoose.connect("mongodb+srv://aiyedogbonabimbola3:abimbola@cluster0.k6znrx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

    console.log("connection sucessuful")
   

})
.catch(()=>{
    console.log("connection failed")
})



            
