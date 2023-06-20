import React from "react";
import "./Header.css";
import { BsTelephone } from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
	return (
		<div className="header">
			<div className="head-bar">
				<div className="phone">
					<BsTelephone /> 01938673450
				</div>
				<div className="discount">
					<p>Get 50% off on Selected Items | Shop Now</p>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Header;
