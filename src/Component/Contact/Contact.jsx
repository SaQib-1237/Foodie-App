import { useState } from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserFormdata from "./UserFormData/UserFormdata";
import { ImWhatsapp } from "react-icons/im";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

const Contact = () => {
	const [userName, setUserName] = useState("");
	const [useremail, setUseremail] = useState("");
	const [password, setPassword] = useState("");
	const [userdata, setUserdata] = useState(null);

	const handleUser = (e) => {
		setUserName(e.target.value);
	};

	const handleUserEmail = (e) => {
		setUseremail(e.target.value);
	};
	const handleUserPassword = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = { name: userName, email: useremail, password: password };

		setUserdata(user);

		setPassword("");
		setUserName("");
		setUseremail("");
	};

	return (
		<div className="Contact-Container">
			<h1 className="text-warning mb-5 text-decoration-underline">
				Contact Us
			</h1>

			<p className="fw-bold d-flex justify-content-flex-start mb-4">
				If you have any questions, feedback, or suggestions, feel free to reach
				out to us. We’d love to hear from you!
			</p>

			<form onSubmit={handleSubmit}>
				<div className="form-floating mb-3">
					<input
						required
						onChange={handleUser}
						value={userName}
						type="text"
						className="form-control"
						id="floatingname"
						placeholder="fullname"
					/>
					<label htmlFor="floatingname">Full name</label>
				</div>

				<div className="form-floating mb-3">
					<input
						required
						onChange={handleUserEmail}
						value={useremail}
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
					/>

					<label htmlFor="floatingInput">Email address</label>
				</div>

				<div className="form-floating">
					<input
						required
						onChange={handleUserPassword}
						value={password}
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
					/>

					<label htmlFor="floatingPassword">Password</label>
				</div>

				<button className="btn btn-warning w-50 mt-3">Login</button>
			</form>

			{userdata && (
				<UserFormdata
					name={userdata.name}
					email={userdata.email}
					password={userdata.password}
				/>
			)}

			<p className="fw-bold d-flex justify-content-flex-start mt-4">
				Follow us on Social App
				<span className="ms-3 d-flex gap-3 fs-4">
					<ImWhatsapp /> <SiFacebook /> <GrInstagram /> <GrLinkedin />{" "}
					<SiYoutubekids />
				</span>
			</p>
		</div>
	);
};

export default Contact;
