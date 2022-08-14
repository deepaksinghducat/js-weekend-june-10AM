import React from "react";

const initialState = {
	fullName: "asfdsafdsaf",
	age: 10,
	addAge: () => { }
}

const DummyContext = React.createContext(initialState)

export const DummyContextProvider = (props) => {
	return (
		<DummyContext.Provider value={initialState}>
			{props.children}
		</DummyContext.Provider>
	)
}

export default DummyContext;