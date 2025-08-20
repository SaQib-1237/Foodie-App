const HomeItem = ({ items }) => {
	return (
		<>
			{items.map((item) => {
				let { name, image, price, alt, id } = item;
				return (
					<div key={id} className="item-container">
						<img src={image} alt={alt} />
						<h3 className="fw-bold">{name}</h3>
						<h4>Price: {price}</h4>
						<button className="card-btn">Add to Cart</button>
					</div>
				);
			})}
		</>
	);
};

export default HomeItem;
