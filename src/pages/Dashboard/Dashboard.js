import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Card from "../../components/Card";

import "./Dashboard.css";

function Dashboard() {
	const [userMsg, setUserMsg] = useState([])

	useEffect(() => {
		getMsg();
	}, []);
	

  const getMsg = () => {
    axios
      .get("http://localhost:3000/api/getmessages")
      .then((res) => {
		  setUserMsg(res.data)
		})
		.catch((err) => {
			console.log(err);
		});
	};
	
	console.log(userMsg[0]);
  const postImg = () => {
    axios
      .post("http://localhost:3000/api/uploadimg")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="dashboard-container">
      <h1>Dashboard</h1>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" />
      </Form.Group>

      <div className="cards-container">

			{
				userMsg.map((msg)=>{
					return(
						<Card key={msg._id} msg = {msg}/>
					)
				})
			}


        
      </div>
    </section>
  );
}

export default Dashboard;
