import Home from "./components/Home";
import Navbar from "./components/ui/Navbar";
import About from "./components/About";
import People from "./components/People";
import Events from "./components/Events";
import Footer from "./components/Footer";
function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Home />
			<About />
			<People />
			<Events />
			<Footer />
		</div>
	);
}

export default App;
