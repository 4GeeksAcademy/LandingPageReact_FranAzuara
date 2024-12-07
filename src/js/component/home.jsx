import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import GalleryCard from "./GalleryCard.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
		<Navbar></Navbar>
		<Jumbotron></Jumbotron>
		<GalleryCard></GalleryCard>
		</div>
	)		
};

export default Home;
