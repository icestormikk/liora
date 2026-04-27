import "./contacts.css";
import Section from "../Section";
import ContactCard, { ContactCardProps } from "./contacts-card/ContactCard";
import { PiInstagramLogo, PiTelegramLogo, PiWhatsappLogoLight } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";

const contacts: ContactCardProps[] = [
	{
		icon: <PiTelegramLogo size="20px"/>,
		title: "Telegram",
		href: "https://t.me/liora_jewelry",
		linkLabel: "@liora_jewelry"
	},
	{
		icon: <PiInstagramLogo size="20px"/>,
		title: "Instagram",
		href: "https://instagram.com/liora.jewelry",
		linkLabel: "Instagram"
	},
	{
		icon: <PiWhatsappLogoLight size="20px"/>,
		title: "WhatsApp",
		href: "https://wa.me/70000000000",
		linkLabel: "Написать сообщение"
	},
	{
		icon: <MdOutlineEmail size="20px"/>,
		title: "Почта",
		href: "mailto:hello@liora.jewelry",
		linkLabel: "hello@liora.jewelry"
	}
]

export default function Contacts() {
	return (
		<Section className="contacts">
			<div className="header">
				<div>
					<span>Контакты</span>
					<h2>Напишите нам</h2>
				</div>
			</div>
			<div className="body">
				<p>Готовы ответить на любые вопросы и помочь с выбором или индивидуальным заказом.</p>
				<div className="contact-cards">
					{ contacts.map((contact, index) => <ContactCard key={index} {...contact}/>) }
				</div>
			</div>
		</Section>
	)
}