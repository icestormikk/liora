import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { PiMapPinThin } from "react-icons/pi";
import Section from "../Section";
import ShippingCard, { ShippingCardProps } from "./shipping-card/ShippingCard";
import './shipping.css';

const ShippingCards: ShippingCardProps[] = [
	{
		icon: <CiDeliveryTruck size={32}/>,
		label: "По всей России",
		description: "Отправляем через СДЭК и Почту России. Среднее время — 1–2 дня по Москве, 3–7 дней по регионам."
	},
	{
		icon: <PiMapPinThin size={32}/>,
		label: "Самовывоз",
		description: "Возможен самовывоз в Москве. Адрес и время уточняйте при оформлении заказа — мы всегда на связи."
	},
	{
		icon: <IoIosStarOutline size={32}/>,
		label: "Подарочная упаковка",
		description: "Каждое изделие вкладывается в фирменную коробочку с открыткой «Ты прекрасна» — бесплатно для каждого заказа."
	}
]

export default function Shipping() {
	return (
		<Section className="shipping">
			<div className="header">
				<div>
					<span>Доставка</span>
					<h2>Получите заказ</h2>
				</div>
				<></>
			</div>
			<div className="body">
				{ ShippingCards.map((card, index) => <ShippingCard key={index} {...card} />) }
			</div>
			<div className="footer">
				<p>Точную стоимость доставки уточняйте при оформлении заказа. Доставка за рубеж — обсуждается индивидуально.</p>
			</div>
		</Section>
	)
}