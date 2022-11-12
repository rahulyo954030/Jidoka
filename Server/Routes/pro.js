const  {Router} = require("express")
const PRODUCT = require("../models/product")
 const productRouter = Router()
 const jwt = require("jsonwebtoken")

//  post product
productRouter.post("/", (req,res)=>{
    const user = new PRODUCT(req.body)
    user.save((err,success)=>{
        try{
        return res.status(201).send({message: "Added successfully", user : success["_doc"]})
        }
        catch(err){
            return res.status(500).send({message: "Error Occurred"})
        }   
    })
})

productRouter.get("/",async(req,res)=>{
    const pro = await PRODUCT.find()
    try{
        res.status(200).send(pro)
    }
    catch(e){
        res.status(404).send({message: "Not Found", Error:e})
    }
})

 module.exports = productRouter