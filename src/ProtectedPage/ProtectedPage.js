import React from "react";

import { Navigate } from "react-router-dom";

export const RequiredAuth = ({ children, redirectTo })=>{
	const auth = localStorage.getItem('userData')

	return (
		auth ? children: <Navigate to={redirectTo}/>
	)
}