import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import Card from "../../components/Card";

import "./Dashboard.css";

function Dashboard() {
	const [userMsg, setUserMsg] = useState([])
	const [file, setFile] = useState('');
	const [filename, setFilename] = useState('Choose File');

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
	
	const handleChange = (e) =>{
		console.log(e.target.files)
		setFile(e.target.files[0]);
    	setFilename(e.target.files[0].name);
	}

  const handleSubmit = (e) => {
	e.preventDefault()
	const config = {
		headers: {
		  "Content-Type": "multipart/form-data",
		},
	  };
	const formData = new FormData()
	formData.append('file', file)


    axios
      .post("http://localhost:3000/api/uploadimg", formData, config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="dashboard-container">
      <h1>Dashboard</h1>
	  <Form onSubmit={handleSubmit}>
		<Form.Group controlId="formFile" className="mb-3">
			<Form.Control type="file" onChange={handleChange}/>
		</Form.Group>
		<Button type="submit" className="mb-3 w-100">Submit</Button>
	  </Form>
      

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
