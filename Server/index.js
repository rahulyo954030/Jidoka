const express = require("express")
const app = express()
const authRouter = require("./Routes/Auth")
const connection =require("./db/db")
const cors = require("cors")


app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors({
  origin:"*"
}))

app.use("/auth", authRouter)


app.get("/", async(req,res) => {
    res.send("users here")
})

const PORT = process.env.PORT || 8080

app.listen(PORT, async() => {
  await connection
    console.log('listening on http://localhost:8080')
})


// <-----------------------Websocket-------------------------------->

const http =  require("http")
const httpServer = http.createServer(app)
const socketio = require("socket.io")
// const { Socket } = require("dgram")

const server = new socketio.Server(httpServer,{
  cors:{

  }
})




let  timeChange
server.on("connection",(socket)=>{
  console.log("socket connected");
 if(timeChange) clearInterval(timeChange)
 setInterval(()=>{
  socket.emit("message",new Date())
 },1000)
})