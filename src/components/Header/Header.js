import React, { useState, useEffect } from "react";
import source from "./fav.png";
import "./Header.css";

const Header = () => {
	const [styles, setStyles] = useState({ backgroundColor: "transparent" });
	const [color, setColor] = useState({ color: "white" });

	window.onscroll = () => {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			setStyles({ backgroundColor: "white" });
			setColor({ color: "black" });
		} else {
			setStyles({ backgroundColor: "transparent" });
			setColor({ color: "white" });
		}
	}

	return (
		<header className='header' style={styles}>
			<div className='logo-and-title'>
				<img src={source} alt='roundabout sign' className='logo-img' />
				<h1 style={color}>Cyprus Road Signs Test</h1>
			</div>
			<span className='dummy'></span>
			<nav className='nav'>
				<a href='#' style={color}>
					Home
				</a>
				<a href='#' style={color}>
					About
				</a>
				<a href='#' style={color}>
					Test
				</a>
			</nav>
		</header>
	);
};

export default Header;
