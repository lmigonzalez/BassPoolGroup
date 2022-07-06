import React, {createContext, useContext, useState} from "react";


const Context = createContext();


export const StateContext = ({children})=>{

	const [isLogin, setIsLogin] = useState(false)

	return(
		<Context.Provider
		value={{
			isLogin,
			setIsLogin,
		}}
		>
			{children}
		</Context.Provider>
	)
}

export const useStateContext = () => useContext(Context)