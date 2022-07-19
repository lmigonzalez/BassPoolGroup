import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Card from "../../components/Card";

import { useStateContext } from "../../context/StateContext";

import "./Dashboard.css";

function Dashboard() {
	const navigate = useNavigate()
	const {
		isLogin,
		setIsLogin,
	} = useStateContext()
	const [file, setFile] = useState('');
	const [successfullySubmitted, setSuccessfullySubmitted] = useState(false)
	const [notSubmitted, setNotSubmitted] = useState(false)
	const [btnDisabled, setBtnDisabled] = useState(true)
	

	useEffect(() => {
			loginAuth()
	}, []);

	useEffect(() => {
		ifFileExist()
	}, [file]);


	const loginAuth= () =>{
		if(!isLogin){
			navigate('/admin')
			return
		}
	}

	const closeErrorMsg = () =>{
		setTimeout(() => {
			setSuccessfullySubmitted(false)
			setNotSubmitted(false)
		}, 5000)
	  }


	

//   const getMsg = () => {
	
// 	const token = JSON.parse(localStorage.getItem('userData'))
// 	const config = {
// 		headers: {
// 			Authorization: `Bearer ${token.token}`
// 		},
// 	  };
//     axios
//       .get("http://localhost:3000/api/getmessages", config)
//       .then((res) => {
// 		  setUserMsg(res.data)
// 		  setAuth(true)
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			// navigate('/')
// 		});
// 	};
	
	const handleChange = (e) =>{
		setFile(e.target.files[0]);
	}
	
	const ifFileExist = () =>{
		if(file && file.name){
			setBtnDisabled(false)	
			return
		}
		setBtnDisabled(true)
	}

  const handleSubmit = (e) => {
	e.preventDefault()
	const token = JSON.parse(localStorage.getItem('userData'))
	const config = {
		headers: {
		  "Content-Type": "multipart/form-data",
		   Authorization: `Bearer ${token.token}`
		},
	  };
	const formData = new FormData()
	formData.append('file', file)


    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/uploadim`, formData, config)
      .then((res) => {
		setSuccessfullySubmitted(true)
        setFile('')
      })
      .catch((err) => {
        setNotSubmitted(true)
		console.log(err)
      });

	  closeErrorMsg()
  };

  return (
    <section className="dashboard-container">
      <h1>Dashboard</h1>
	  {successfullySubmitted && <p className="success-msg"> Successfully Submitted!</p>}
	  {notSubmitted && <p className="error-msg"> We could submit your file!</p>}
	  <Form onSubmit={handleSubmit}>
		<Form.Group controlId="formFile" className="mb-3">
			<Form.Control type="file" onChange={handleChange}/>
		</Form.Group>
		<Button type="submit" className="mb-3 w-100" disabled={btnDisabled}>Submit</Button>
	  </Form>
      

      {/* <div className="cards-container">

			{
				userMsg.map((msg)=>{
					return(
						<Card key={msg._id} msg = {msg}/>
					)
				})
			}


        
      </div> */}
    </section>
  );
}

export default Dashboard;
