"use client"

import './header.css';
import Link from "next/link";
import Logo from './logo/Logo';
import { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { AiOutlineShopping } from 'react-icons/ai';
import { useCart } from '@/app/context/CartContext';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { cartOpen, setCartOpen, getCartCount } = useCart();
	const cartCount = getCartCount();

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<header id="header">
			<Logo/>
			<div id="nav-buttons">
				<Link href="/#catalog">Каталог</Link>
				<Link href="/#about">О нас</Link>
				<Link href="/#values">Ценности</Link>
				<Link href="/#shipping">Доставка</Link>
				<Link href="/#reviews">Отзывы</Link>
				<Link href="/#contacts">Контакты</Link>
			</div>
			
			<button className="cart-button" onClick={() => setCartOpen(!cartOpen)} aria-label="Open cart" >
				<AiOutlineShopping size="24px"/>
				{cartCount > 0 && (
					<span className="cart-badge">{cartCount}</span>
				)}
			</button>

			<button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
				<IoIosMenu size="30px"/>
			</button>
			{menuOpen && (
				<nav id="mobile-nav" onClick={handleLinkClick} className={menuOpen ? 'open' : ''}>
					<Link href="/#catalog" >Каталог</Link>
					<Link href="/#about">О нас</Link>
					<Link href="/#values">Ценности</Link>
					<Link href="/#shipping">Доставка</Link>
					<Link href="/#reviews">Отзывы</Link>
					<Link href="/#contacts">Контакты</Link>
				</nav>
			)}
		</header>
	)
}