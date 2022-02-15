import React from "react";
import "./Welcome.css";
import source from "./hero-bg.jpg";

const Welcome = () => {
	return (
		<div className='welcome'>
			<img src={source} alt='image of stop sign' className='bg-img' />
		</div>
	);
};

export default Welcome;
