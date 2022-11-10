
import axios from "axios";
import React, { useEffect, useState } from "react";
import io from "socket.io-client"
import "../styles/Dashboard.css"

import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
    LineChart,
    Line
  } from "recharts";

 

const Dashboard = () => {
    const [data,setData] = useState("")

     const dummydata = [
    { name: "Mon", users: 4 },
    { name: "Tues", users: 3 },
    { name: "Wed", users: 2 },
    { name: "Thurs", users: 4 },
    { name: "Fri", users: 3 },
    { name: "Sat", users: 2 },
    { name: "Sun", users: 4 }
  ];

  // useEffect(()=>{
  //   const socket = io("http://localhost:8080")
  //   socket.on("message",(data)=>{
  //     setData(data)
  //   })
  // },[])

  return (
    <div className="graph">
        <div style={{width: '100vw', height: '100vh'}}>
    <BarChart width={730} height={250} data={dummydata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar label={true} dataKey="users" fill="#8884d8" />
    </BarChart>
  </div>
  <div>{data}</div>
    </div>
  )
}

export default Dashboard