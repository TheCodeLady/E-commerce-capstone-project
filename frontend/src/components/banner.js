import React from "react";
import "./banner.css";
import img from "./headphone3.png";

const Banner = () => {
	return (
		<div className="banner">
			<div className="h-text">
				<h1>Grab Upto 50% Off On Selected Headphone</h1>
				<button className="bttn">Buy Now</button>
			</div>
			<div className="image">
				<img src={img} alt="" />
			</div>
		</div>
	);
};

export default Banner;
