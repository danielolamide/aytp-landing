import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import People from "./components/People";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import EventsSlideShow from './components/Eventsslider';


function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Home />
			<About />
			<People />
			<Pricing />
			<EventsSlideShow/>
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
