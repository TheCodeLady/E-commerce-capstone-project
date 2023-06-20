import React from "react";
import { BsFillCartPlusFill, BsCart4, BsPerson } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavB.css"

const NavB = () => {
	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container fluid>
					<BsFillCartPlusFill />
					<Navbar.Brand href="#">Shopcart</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<NavDropdown title="Categories" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Headphones</NavDropdown.Item>
								<NavDropdown.Item href="#action4">Accessories</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">Phones</NavDropdown.Item>
							</NavDropdown>

							<Nav.Link href="#action1">Deals</Nav.Link>

							<Nav.Link href="#action2">What's new</Nav.Link>

							<Nav.Link href="action3">Delivery</Nav.Link>
						</Nav>

						<Form className="d-flex">
							<div className="position-relative">
								<Form.Control
									type="search"
									placeholder="Search Product"
									className="me-2"
									aria-label="Search"
								/>
								<AiOutlineSearch className="position-absolute top-50 end-0 translate-middle" />
							</div>
						</Form>
						<BsPerson />
						<Nav>
							<Nav.Link href="#action4">Account</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#action5"></Nav.Link>
						</Nav>
						<BsCart4 />
						<Nav>
							<Nav.Link href="#action6">Cart</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavB;
