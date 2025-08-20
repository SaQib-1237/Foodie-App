const Header = ({ setPage }) => {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid px-5">
				<a className="navbar-brand" href="#">
					<h1 className="text-warning">Foodie.</h1>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto fd-flex gap-3 fw-bold">
						<a
							onClick={() => setPage("home")}
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Home
						</a>
						<a onClick={() => setPage("about")} className="nav-link" href="#">
							About
						</a>
						<a
							onClick={() => setPage("services")}
							className="nav-link"
							href="#"
						>
							Services
						</a>
						<a className="nav-link" href="#" onClick={() => setPage("contact")}>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
