import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import source from "./fav.png";
import "./Header.css";

const Header = () => {
	const [styles, setStyles] = useState({
		backgroundColor: "transparent",
		height: "6rem",
		boxShadow: "none"
	});
	const [color, setColor] = useState({ color: "white" });
	const [linkColor, setLinkColor] = useState({ color: "white" });
	const [menu, setMenu] = useState({ display: "none" });
	const [show, setShow] = useState(0);

	window.onscroll = () => {
		scrollFunction();
	};

	window.onresize = () => {
		if (window.innerWidth <= 876) {
			setLinkColor({ color: "black" });
		} else {
			setLinkColor({ color: "white" });
		}
	};

	// window.onload = () => {
	// 	if (window.innerWidth <= 876) {
	// 		setColor({ color: "black" });
	// 	}
	// };

	// useEffect(() => {
	// 	if (window.innerWidth <= 876) {
	// 		setMenu({ display: "block" });
	// 	} else {
	// 		setShow(0);
	// 		setMenu({ display: "none" });
	// 	}
	// }, [window.innerWidth]);

	useEffect(() => {
		show ? setMenu({ display: "block" }) : setMenu({ display: "none" });
	}, [show]);

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			setStyles({
				backgroundColor: "white",
				height: "4rem",
				boxShadow: "0 1px 2px 1px rgba(24, 24, 24, 0.308)"
			});
			setColor({ color: "black" });
			setLinkColor({ color: "black" });
		} else {
			setStyles({ backgroundColor: "transparent", height: "6rem", boxShadow: "none" });
			setColor({ color: "white" });
			setLinkColor({ color: "white" });
		}
	}

	return (
		<header className='header' style={styles}>
			<div className='logo-and-title'>
				<img src={source} alt='roundabout sign' className='logo-img' />
				<Link to='/' style={{ textDecoration: "none" }}>
					<h1 style={color}>Cyprus Road Signs Test</h1>
				</Link>
			</div>
			<span className='dummy'></span>
			<nav className='nav' style={{ display: show ? "block" : "none" }}>
				<Link to='/'>
					<a href='#' style={window.innerWidth >= 876 ? linkColor : { color: "black" }}>
						Home
					</a>
				</Link>

				<a href='#about' style={window.innerWidth >= 876 ? linkColor : { color: "black" }}>
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
				<div className='line' style={{ backgroundColor: show ? "black" : "white" }}></div>
				<div className='line' style={{ backgroundColor: show ? "black" : "white" }}></div>
				<div className='line' style={{ backgroundColor: show ? "black" : "white" }}></div>
			</div>
		</header>
	);
};

export default Header;
