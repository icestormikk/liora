import { CartItem as CartItemType, useCart } from "@/app/context/CartContext";
import "./cartItem.css";
import Image from "next/image";

export interface CartItemProps {
	cartItem: CartItemType;
}

export default function CartItem({ cartItem } : CartItemProps) {
	const { product, quantity } = cartItem;
	const { removeFromCart } = useCart();

	return (
		<div key={product.id} className="cart-item">
			{product.imagePath && (
				<div className="item-image">
					<Image src={product.imagePath} alt={`${product.id}_image`} fill sizes="100%" style={{ objectFit: "cover" }}/>
				</div>
			)}
			<div className="item-info">
				<h3>{product.label}</h3>
				<div className="item-controls">
					<button className="delete-btn" onClick={() => removeFromCart(product.id)} aria-label="Delete item">
						Убрать
					</button>
				</div>
			</div>
		</div>
	)
}