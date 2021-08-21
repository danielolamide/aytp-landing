import Home from "./components/Home";
import Navbar from "./components/ui/Navbar";
import {About} from "./components/About";
import People from "./components/People";
import {Pricing} from "./components/Pricing";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import PublicationsSlider from "./components/Publications";


function App() {
	return (
		<div className="flex flex-col">
			<Navbar />
			<Home />
			<About />
			<People />
			<Pricing />
			{/* <EventsSlideShow/> */}
			<PublicationsSlider />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
