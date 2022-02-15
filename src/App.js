import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
	return (
		<div>
			<Header />
			<Welcome />
			<About />
		</div>
	);
};

export default App;
