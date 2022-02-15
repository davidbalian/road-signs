import React from "react";
import "./About.css";

const About = () => {
	return (
		<div className='about'>
			<h2>What is this website?</h2>
			<p>
				This website is simply a way for people who plan on taking the Cypriot Driving Test
				to practice their knowledge of the road signs. It was built by me (David Balian),
				during my 1st year studying Computer Engineering at the Cyprus University of
				Technology.
			</p>
			<h2>About the test</h2>
			<p>
				This test includes all the road signs that are part of the official driving rules
				booklet which is sold at bookshops and kiosks around the island. Warning signs,
				order signs, and information signs are all in the test. The test is not limited by
				time as it's meant to be taken at your own pace in your own time. Your results will
				be displayed at the end of the test.
			</p>
			<h2>Good Luck!</h2>
			<button className='test-btn'>START TEST</button>
		</div>
	);
};

export default About;
