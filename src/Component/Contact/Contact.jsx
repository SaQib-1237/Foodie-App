import "./Contact.css";

const Contact = () => {
	return (
		<div className="Contact-Container">
			<h1 className="text-warning mb-5 text-decoration-underline">
				Contact Us
			</h1>
			<p className="fw-bold d-flex justify-content-flex-start mb-4">
				If you have any questions, feedback, or suggestions, feel free to reach
				out to us. We’d love to hear from you!
			</p>

			<div className="contactus">
				<span>
					<b>Email</b>
				</span>
				: Saqib@gmail.com
			</div>
			<div className="contactus">
				<span>
					<b>Phone</b>
				</span>
				: +923379591203
			</div>
			<div className="contactus">
				<span>
					<b>Address</b>
				</span>
				: ForestBazar (peshawar)
			</div>

			<p className="fw-bold d-flex justify-content-flex-start mt-4">
				Follow us on Social App
			</p>
		</div>
	);
};

export default Contact;
