const mongoose = require("mongoose")
const connection =  mongoose.connect("mongodb+srv://rahulsingh:rahulsingh@cluster0.x4uxcfi.mongodb.net/mock?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected")
}).catch((e)=>{
    console.log(e)
})

module.exports = connection;
//103.158.137.179/32

