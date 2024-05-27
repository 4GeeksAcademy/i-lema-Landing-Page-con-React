import React from "react";

import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import CardGroup from "./CardGroup";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="d-flex flex-column align-items-center mt-5">
				<Jumbotron />
				<CardGroup/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
