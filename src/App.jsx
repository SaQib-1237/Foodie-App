import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import { useState } from "react";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Services from "./Component/Services/Services";
import "./App.css";

function App() {
	const [page, setPage] = useState("home");

	return (
		<>
			<Header setPage={setPage}></Header>

			<div className="container">
				{page === "home" && <Home />}
				{page === "about" && <About />}
				{page === "contact" && <Contact />}
				{page === "services" && <Services />}
			</div>

			<Footer></Footer>
		</>
	);
}

export default App;
