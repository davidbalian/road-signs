import React from "react";
import "./Welcome.css";
import source from "./hero-bg.jpg";

const Welcome = () => {
	return (
		<div className='welcome'>
			<h1 className='hero-text'>
				Learn Road Signs, Become a <span className='highlight'>Safer</span> Driver
			</h1>
			<img src={source} alt='stop sign' className='bg-img' />
		</div>
	);
};

export default Welcome;
