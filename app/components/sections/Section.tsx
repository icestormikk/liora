import './section.css';
import { PropsWithChildren } from "react";

export interface SectionProps {
	id?: string;
	className?: string;
}

export default function Section({ children, id, className }: PropsWithChildren<SectionProps>) {
	return (
		<section id={id} className={["section", className].join(" ")}>
			<div>
				{children}
			</div>
		</section>
	)
}