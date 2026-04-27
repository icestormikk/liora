import "./ourValuesCard.css";
import { ReactNode } from "react";

export interface OurValuesCardProps {
	icon: string | ReactNode;
	label: string;
	description: string;
}

export default function OurValuesCard({ icon, label, description } : OurValuesCardProps) {
	return (
		<div className="our-values-card">
			{icon}
			<h3>{label}</h3>
			<p>{description}</p>
		</div>
	)
}