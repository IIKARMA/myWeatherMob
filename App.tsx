 
import React from "react";

import Home from "./src/features/Home";
 
import  {store}   from './src/store/store'
import { Provider } from 'react-redux'


function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;
