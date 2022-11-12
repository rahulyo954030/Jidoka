import axios from "axios";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../styles/Dashboard.css";

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
  Line,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState("");

  const dummydata = [
    { name: "Mon", users: 4 },
    { name: "Tues", users: 3 },
    { name: "Wed", users: 2 },
    { name: "Thurs", users: 4 },
    { name: "Fri", users: 3 },
    { name: "Sat", users: 2 },
    { name: "Sun", users: 4 },
  ];

  useEffect(() => {
    setInterval(() => {
      const socket = io("https://jidoka-assignment.herokuapp.com");
      socket.on("message", (data) => {
        setData(data);
      });
    }, 1000);
  }, []);

  return (
    <div className="graph">
      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="blue" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          type="monotone"
          dataKey="x"
          stroke="yellow"
          yAxisId={0}
          color={"yellow"}
          background={"red"}
        />
      </BarChart>
    </div>
  );
};

export default Dashboard;
