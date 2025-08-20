import "./Services.css";
const ServicesCard = () => {
	const card = [
		{
			id: 1,
			method: "Fast Delivery 🚚",
			description:
				"Enjoy your favorite meals hot and fresh, delivered right to your doorstep in no time",
		},
		{
			id: 2,
			method: "Dine-In & Takeaway 🍽️",
			description:
				"Relax and enjoy your meal in our cozy space or grab your food on the go with our quick takeaway service.",
		},
		{
			id: 3,
			method: "Online Ordering 📱",
			description:
				"Order your favorite dishes anytime, anywhere with just a few clicks on our website or app.",
		},
		{
			id: 4,
			method: "Fresh & Hygienic Food 🥗",
			description:
				"We prepare every meal with fresh ingredients and maintain top hygiene standards to ensure your health and taste.",
		},
		{
			id: 5,
			method: "Catering Services 🎉",
			description:
				"Make your events special with our catering service, offering delicious food for parties, gatherings, and celebrations.",
		},
		{
			id: 6,
			method: "Special Deals & Discounts 💰",
			description:
				"Get amazing combo deals and exclusive discounts so you can enjoy more at less price.",
		},
		{
			id: 7,
			method: "24/7 Customer Support ☎️",
			description:
				"Our support team is always ready to help you with your orders, queries, or feedback anytime.",
		},
	];

	return (
		<div className="row mt-5 justify-content-evenly gap-3 border">
			{card.map((cardItem) => {
				let { method, description, id } = cardItem;
				return (
					<div key={id} className="col-md-3 deliver-method ">
						<h3 className="method-name">{method}</h3>
						<p>{description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ServicesCard;
