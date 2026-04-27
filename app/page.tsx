import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/sections/about/About";
import Catalog from "./components/sections/catalog/Catalog";
import Categories from "./components/sections/categories/Categories";
import Contacts from "./components/sections/contacts/Contacts";
import Lookbook from "./components/sections/lookbook/Lookbook";
import OurValues from "./components/sections/our-values/OurValues";
import Reviews from "./components/sections/reviews/Reviews";
import Shipping from "./components/sections/shipping/Shipping";

export default function Home() {
  	return (
		<>
			<Header/>
			<Hero/>
			<Categories/>
			<Catalog/>
			<Lookbook/>
			<About/>
			<OurValues/>
			<Shipping/>
			<Reviews/>
			<Contacts/>
			<Footer/>
		</>
	);
}
