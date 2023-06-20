import React from "react";
import IndividualProduct from "./individualProduct";
import "./Products.css";

const Products = () => {
	return (
		<div className="products">
			<IndividualProduct />
			<IndividualProduct />
			<IndividualProduct />
			<IndividualProduct />
		</div>
	);
};

export default Products;
