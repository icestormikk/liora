import './ourValues.css';
import Section from "../Section";
import OurValuesCard, { OurValuesCardProps } from './our-values-card/OurValuesCard';
import { FaHandHoldingHeart, FaLeaf } from 'react-icons/fa';
import { IoIosColorPalette } from 'react-icons/io';

const Cards: OurValuesCardProps[] = [
	{
		icon: <FaHandHoldingHeart size="32px"/>,
		label: 'Ручная работа',
		description: 'Каждое изделие создаётся вручную из японского бисера Miyuki с вниманием к каждой детали.'
	},
	{
		icon: <IoIosColorPalette size="32px"/>,
		label: 'Живые цвета',
		description: 'Каждая коллекция — новая палитра. Хотите свой цвет? Мы создадим изделие именно под вас.'
	},
	{
		icon: <FaLeaf size="32px"/>,
		label: 'Осознанный дизайн',
		description: 'Минимальные коллекции, каждая из которых продумана до деталей — форма, цвет, ощущение.'
	}
]

export default function OurValues() {
	return (
		<Section id="values" className="our-values">
			<div className="header">
				<div>
					<span>Ценности</span>
					<h2>Наш подход</h2>
				</div>
				<div></div>
			</div>
			<div className="body">
				{ Cards.map((card, index) => <OurValuesCard key={index} {...card}/>) }
			</div>
		</Section>
	)
}