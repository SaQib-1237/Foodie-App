const UserFormdata = ({ name, email, password }) => {
	return (
		<>
			<div className="contactus">
				<span>
					<b>User Name : </b>
				</span>
				{name}
			</div>
			<div className="contactus">
				<span>
					<b>User Email : </b>
				</span>
				{email}
			</div>
			<div className="contactus">
				<span>
					<b>Password : </b>
				</span>
				{password}
			</div>
		</>
	);
};

export default UserFormdata;
