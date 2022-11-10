const PRODUCT = require("../models/Feed")
const {Router} = require("express")

const userRouter =Router()

userRouter.post("/product", (req,res)=>{
    const product = new PRODUCT(req.body)
    product.save((err,success)=>{
        try{
        return res.status(201).send({message: "Product Added", product : success["_doc"]})
        }
        catch(err){
            return res.status(500).send({message: "Error Occurred"})
        }   
    })
})

userRouter.get("/product", async(req,res)=>{
    const query = req.query
    const product = await  PRODUCT.find(query)
    res.send(product)
})

userRouter.delete("/product/:productID", async (req, res) => {
    const productID = req.params.productID
    const product = await PRODUCT.deleteOne({_id: productID})
                    .then(result => {
                        return res.status(201).send({message: "Deleted Successfully"})
                    })
                    .catch(err => {
                        return res.status(401).send({message: "Something went wrong"})
                    })
})


module.exports = userRouter;