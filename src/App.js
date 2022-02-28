import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import "./App.css";
import Test from "./components/Test/Test";
import HeaderDark from "./components/HeaderDark/HeaderDark";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path='road-signs/'
					element={
						<>
							<Header />
							<Welcome />
							<About />
						</>
					}
				/>
				<Route
					path='road-signs/test'
					element={
						<>
							<HeaderDark />
							<Test />
						</>
					}
				/>
			</Routes>
		</Router>
	);
};

export default App;
