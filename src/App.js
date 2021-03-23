import Home from "./components/Home";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";
import People from "./components/People";
import Pricing from "./components/Pricing";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Home />
			<About />
			<People />
			<Pricing />
			<Events />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
