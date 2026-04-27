import Link from 'next/link';
import Logo from '../header/logo/Logo';
import './footer.css';

export default function Footer() {
	return (
		<footer>
			<Logo isShowSubheader={false}/>
			<p className="copy">© 2025 Liora Jewelry. Handcrafted with love.</p>
			<div className="footer-nav">
				<Link href="#catalog">Каталог</Link>
				<Link href="#contacts">Контакты</Link>
			</div>
		</footer>
	)
}