import burger from "../../assets/burger.png";
import chicken from "../../assets/chicken-roll.png";
import friedChicken from "../../assets/fried-chicken.png";
import lasagna from "../../assets/lasagna.png";
import pizza from "../../assets/pizza.png";
import sandwich from "../../assets/sandwich.png";
import speghetti from "../../assets/spaghetti.png";
import springRoll from "../../assets/spring-roll.png";
import HomeItem from "./HomeItem/HomeItem";
import "./Home.css";

const Home = () => {
	const productList = [
		{
			id: "lsid",
			name: "Double Beef Burger",
			image: burger,
			alt: "Burger",
			price: 350,
		},
		{
			id: "aksld",
			name: "Chicken Roll",
			image: chicken,
			price: 900,
		},
		{
			id: "ekmk",
			name: "Pizza",
			image: pizza,
			alt: "Pizza",
			price: 950,
		},
		{
			id: "cmid",
			name: "Sub Sandwich",
			image: sandwich,
			alt: "Sandwich",
			price: 200,
		},
		{
			id: "cisa",
			name: "Fried Chicken",
			image: friedChicken,
			alt: "Chicken",
			price: 550,
		},
		{
			id: "pjdbs",
			name: "Speghetti",
			image: speghetti,
			alt: "Speghetti",
			price: 400,
		},
		{
			id: "alkeo",
			name: "Spring Roll",
			image: springRoll,
			alt: "Spring Roll",
			price: 400,
		},
		{
			id: "smkig",
			name: "Chicken Lasagne",
			image: lasagna,
			alt: "Chicken Lasagne",
			price: 750,
		},
	];

	return (
		<>
			<h3 className="text-warning mt-5 text-decoration-underline fw-bold">
				Our Menue
			</h3>
			<h1>The Most Papular</h1>

			<div className="card-container mt-4">
				<div className="container d-flex justify-content-evenly flex-wrap">
					<HomeItem items={productList} />
				</div>
			</div>
		</>
	);
};

export default Home;
