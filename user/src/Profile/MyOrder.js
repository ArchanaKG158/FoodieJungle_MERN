import React, { useState, useEffect } from "react";
import "./MyOrder.css";
import axios from "axios";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(false);
  console.log(orders);
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    axios
      .get("http://localhost:7000/api/usercart/getorders", {
        headers: { "auth-token": user },
      })
      .then((response) => {
        console.log(response.data);
        // setOrders(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  return (
    <div className="yourorders">
      <h1 className="mainhead1">Your Orders</h1>

      <table>
        <thead>
          <tr>
            <th>OrderID</th>
            <th>Status</th>
            <th>Total</th>
            <th>Invoice</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>

        <tbody>
          {orders.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button className="mainbutton1">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
