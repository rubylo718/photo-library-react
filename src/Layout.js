import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">首頁</Link>
					</li>
					<li>
						<Link to="/about">關於</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
