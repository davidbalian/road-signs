import React, { useState } from "react";
import { Link } from "react-router-dom";
import source from "./fav.png";
import "../Header/Header.css";

const HeaderDark = () => {
	const [styles] = useState({
		backgroundColor: "white",
		height: "6rem",
		boxShadow: "0 1px 2px 1px rgba(24, 24, 24, 0.308)"
	});

	const [color] = useState({ color: "black" });

	return (
		<header className='header' style={styles}>
			<div className='logo-and-title'>
				<img src={source} alt='roundabout sign' className='logo-img' />
				<Link to='/' style={{ textDecoration: "none" }}>
					<h1 style={color}>Cyprus Road Signs Test</h1>
				</Link>
			</div>
			<span className='dummy'></span>
			<nav className='nav'>
				<Link to='/'>
					<a href='#' style={color}>
						Home
					</a>
				</Link>

				<a href='#about' style={color}>
					About
				</a>

				<Link to='/test'>
					<button className='test-btn-hdr'>START TEST</button>
				</Link>
			</nav>
		</header>
	);
};

export default HeaderDark;
