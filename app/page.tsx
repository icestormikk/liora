import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/sections/hero/Hero";
import dynamic from "next/dynamic";

const Categories = dynamic(() => import("./components/sections/categories/Categories"), {
	loading: () => <div>Загрузка...</div>
})
const Catalog = dynamic(() => import("./components/sections/catalog/Catalog"), {
	loading: () => <div>Загрузка...</div>
})
const Contacts = dynamic(() => import("./components/sections/contacts/Contacts"), {
	loading: () => <div>Загрузка...</div>
})
const Lookbook = dynamic(() => import("./components/sections/lookbook/Lookbook"), {
	loading: () => <div>Загрузка...</div>
})
const About = dynamic(() => import("./components/sections/about/About"), {
	loading: () => <div>Загрузка...</div>
})
const OurValues = dynamic(() => import("./components/sections/our-values/OurValues"), {
	loading: () => <div>Загрузка...</div>
})
const Reviews = dynamic(() => import("./components/sections/reviews/Reviews"), {
	loading: () => <div>Загрузка...</div>
})
const Shipping = dynamic(() => import("./components/sections/shipping/Shipping"), {
	loading: () => <div>Загрузка...</div>
})

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
