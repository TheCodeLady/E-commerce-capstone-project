import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Banner from "./components/banner";
import "./index.css";
import Products from "./components/Products";
import NavB from "./components/NavB";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Header />
		<NavB />
		<Banner />
		<Products />
	</React.StrictMode>
);
