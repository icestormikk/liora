import './logo.css';
import Link from "next/link";

export interface LogoProps {
	isShowSubheader?: boolean
}

export default function Logo({ isShowSubheader = true } : LogoProps) {
	return (
		<Link href="#" className="logo">
			<span className="header">Liora</span>
			{ isShowSubheader && <span className="subheader">Jewelry</span> }
		</Link>
	)
}