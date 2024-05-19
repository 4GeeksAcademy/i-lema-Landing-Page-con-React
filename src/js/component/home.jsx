import React from "react";

import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="d-flex flex-column align-items-center mt-5">
				<Jumbotron />
				<div className="container-fluid">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
						<Card 
						title = 'Card title 1'
						text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus.'
						/>
						<Card 
						title = 'Card title 2'
						text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'
						/>
						<Card 
						title = 'Card title 3'
						text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus.'
						/>
						<Card 
						title = 'Card title 4'
						text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.'
						/>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
