import Link from "next/link";
import "./contactCard.css";
import { ReactNode } from "react";

export interface ContactCardProps {
	icon: ReactNode,
	title: string,
	href: string,
	linkLabel: string
}

export default function ContactCard({ icon, title, href, linkLabel } : ContactCardProps) {
	return (
		<Link className="contact-card" href={href} target="_blank">
			{icon}
			<div className="contact-card-info">
				<p>{title}</p>
				<span>{linkLabel}</span>
			</div>
		</Link>
	)
}