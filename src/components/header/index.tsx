import React from 'react';
// import { Link } from 'react-router/match';
import './style.css';

const Header = () => (
	<header className="header">
		<a href="/" className="logo">
			<img src="../../assets/preact-logo-inverse.svg" alt="BillSplitter Logo" height="32" width="32" />
			<h1>BillSplitter</h1>
		</a>
		<nav>
			{/* <Link activeClassName={style.active} href="/">
				Home
			</Link> */}
		</nav>
	</header>
);

export default Header;
