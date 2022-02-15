import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					exact
					path='/'
					element={
						<>
							<Welcome />
							<About />
						</>
					}
				/>
				<Route path='/test' element={<h1>Welcome to the test ya bastard</h1>} />
			</Routes>
		</Router>
	);
};

export default App;
