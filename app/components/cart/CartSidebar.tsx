'use client';

import { useCart } from '@/app/context/CartContext';
import { AiOutlineClose } from 'react-icons/ai';
import './cartSidebar.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CartItem from './cart-item/CartItem';
import { PiTelegramLogo, PiWhatsappLogoLight } from 'react-icons/pi';
import Link from 'next/link';

export default function CartSidebar() {
	const { items, cartOpen, setCartOpen, getTotalPrice } = useCart();
	const [isContactsOpen, setIsContactsOpen] = useState(false);

	const onCheckoutButtonClick = useCallback(() => {
		setIsContactsOpen((prev) => !prev);
	}, []);

	const linkText = useMemo(() => {
		let text = "Здравствуйте, я бы хотела заказать следующие товары:\n\n";

		items.forEach((item, index) => {
			const { product } = item;
			text += `${index + 1}. ${product.label} (${product.priceRub} ₽)\n`;
		});

		text += `\nОбщая сумма заказа: ${getTotalPrice()}₽`;
		
		return text;
	}, [getTotalPrice, items]);

	useEffect(() => {
		if (cartOpen) {
			document.body.style.overflow = "hidden";
			
			return () => {
				document.body.style.overflow = "";
			};
		}
	}, [cartOpen]);

	return (
		<>
			{cartOpen && (
				<div className="cart-overlay" onClick={() => setCartOpen(false)} />
			)}
			<aside id="cart-sidebar" className={cartOpen ? 'open' : ''}>
				<div className="cart-header">
					<h3>Корзина</h3>
					<button
						className="close-btn"
						onClick={() => setCartOpen(false)}
						aria-label="Close cart"
					>
						<AiOutlineClose size="24px" />
					</button>
				</div>

				<div className="cart-content">
					{items.length === 0 ? (
						<div className="cart-empty">
							<p>Корзина пуста</p>
						</div>
					) : (
						<div className="cart-items">
							{items.map((item, index) => <CartItem key={index} cartItem={item}/>)}
						</div>
					)}
				</div>

				{items.length > 0 && (
					<div className="cart-footer">
						<div className="cart-total">
							<span>Итого:</span>
							<span className="total-price">{getTotalPrice().toFixed(2)} ₽</span>
						</div>
						<button onClick={onCheckoutButtonClick} className="checkout-btn">Написать нам</button>
						{ isContactsOpen && (
							<div className="checkout-contacts">
								<Link target="_blank" href={`https://t.me/liora_jewelry?text=${encodeURI(linkText)}`}>
									<PiTelegramLogo size="20px"/>
									<span>Telegram</span>
								</Link>
								<Link target="_blank" href={`https://wa.me/70000000000?text=${encodeURI(linkText)}`}>
									<PiWhatsappLogoLight size="20px"/>
									<span>WhatsApp</span>
								</Link>
							</div>
						) }
					</div>
				)}
			</aside>
		</>
	);
}
