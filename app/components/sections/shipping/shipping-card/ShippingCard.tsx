import './shippingCard.css';
import { ReactNode } from "react";

export interface ShippingCardProps {
	icon: string | ReactNode;
	label: string;
	description: string;
}

export default function ShippingCard({ icon, label, description } : ShippingCardProps) {
	return (
		<div className="shipping-card">
			<div className='shipping-card-icon'>
				{icon}
			</div>
			<h3>{label}</h3>
			<p>{description}</p>
		</div>
	)
}