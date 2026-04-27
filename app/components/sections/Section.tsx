import './section.css';
import { PropsWithChildren } from "react";

export interface SectionProps {
	className?: string;
}

export default function Section({ children, className }: PropsWithChildren<SectionProps>) {
	return (
		<section className={["section", className].join(" ")}>
			<div>
				{children}
			</div>
		</section>
	)
}