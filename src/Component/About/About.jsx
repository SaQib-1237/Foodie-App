import deliveryBoy from "../../assets/delivery-boy.png";
import "./About.css";
const About = () => {
	return (
		<div className="container ">
			<h1 className="text-warning mt-4 mb-4 text-decoration-underline">
				🍔 About Foodie
			</h1>
			<div className="row align-items-center">
				<div className="col-md-6 mt-5">
					<img className="img-fluid" src={deliveryBoy} alt="" />
				</div>
				<div className="col-md-6 mt-5">
					<p className="fw-bold">
						Welcome to Foodie! We bring you delicious and fresh meals made with
						love. Our mission is to serve tasty food that makes you happy. At
						Foodie, we care about quality, hygiene, and fast service. Whether
						you are craving desi food, fast food, or desserts, we’ve got it all
						for you!
					</p>
				</div>
			</div>

			<div className="row mt-5  gap-5 justify-content-center align-items-center">
				<div className="col-md-5  about-foodie">
					<ul className="fw-bold">
						<h1 className="text-warning">Values / Features</h1>
						<li>Fresh & healthy food</li>
						<li>Fast delivery</li>
						<li>Affordable prices</li>
						<li>Variety of cuisines</li>
					</ul>
				</div>
				<div className="col-md-5 m about-foodie ">
					<ul className="fw-bold">
						<h1 className="text-warning">Why Choose Foodie?</h1>
						<li>Easy to order</li>
						<li>Hygienic preparation</li>
						<li>Affordable prices</li>
						<li>Customer satisfaction</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
