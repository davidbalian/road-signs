import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import source from "./fav.png";
import "../Header/Header.css";

const Header = () => {
	const [headerStyles] = useState({
		backgroundColor: "white",
		borderBottom: "1px solid rgb(219, 219, 219)",
		height: "6rem",
		boxShadow: "none"
	});

	const [logoColor] = useState({ color: "black" });

	const [linkColor] = useState({ color: "black" });

	const [burgerColor] = useState({ backgroundColor: "black" });

	const [show, setShow] = useState(0);

	window.onresize = () => {
		if (window.innerWidth > 876) {
			setShow(1);
		} else {
			setShow(0);
		}
	};

	useEffect(() => {
		window.innerWidth <= 876 ? setShow(0) : setShow(1);
	}, []);

	// useEffect(() => {
	// 	if (window.innerWidth <= 876) {
	// 		setMenu({ display: "block" });
	// 	} else {
	// 		setShow(0);
	// 		setMenu({ display: "none" });
	// 	}
	// }, [window.innerWidth]);

	return (
		<header className='header' style={headerStyles}>
			<div className='logo-and-title'>
				<img src={source} alt='roundabout sign' className='logo-img' />
				<Link to='/' style={{ textDecoration: "none" }}>
					<h1 style={logoColor}>Cyprus Road Signs Test</h1>
				</Link>
			</div>
			<span className='dummy'></span>
			<nav className='nav' style={{ display: show ? "flex" : "none" }}>
				<Link to='/'>
					<a href='#' style={linkColor}>
						Home
					</a>
				</Link>

				<a href='#about' style={linkColor}>
					About
				</a>

				<Link to='/test'>
					<button className='test-btn-hdr'>START TEST</button>
				</Link>
			</nav>
			<div
				className='burger'
				onClick={() => {
					setShow(!show);
				}}
			>
				<div className='line' style={burgerColor}></div>
				<div className='line' style={burgerColor}></div>
				<div className='line' style={burgerColor}></div>
			</div>
		</header>
	);
};

export default Header;
