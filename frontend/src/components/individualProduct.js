import React from "react";
import "./individualProduct.css";
import img from "./hp2.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const IndividualProduct = () => {
	return (
		<div className="Iprod">
			<img src={img} alt="" />
			<AiOutlineHeart className="position-absolute top-100 end-5" />
			<div className="content">
				<h4>Wireless earbuds IPX8 $89.00</h4>
				<p>Organic cotten, fairtrade certified</p>
				<p>rating</p>
				<button>Add to Cart</button>
			</div>
		</div>
	);
};

export default IndividualProduct;
