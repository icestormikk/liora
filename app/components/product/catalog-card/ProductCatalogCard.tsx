import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/data/products";
import Image from "next/image";
import { useCallback } from "react";
import "./productCatalogCard.css";

export interface ProductCatalogCardProps {
	product: Product;
	onClick?: (product: Product) => void;
}

export default function ProductCatalogCard({ product, onClick } : ProductCatalogCardProps) {
	const { addToCart } = useCart();	

	const onOrderButtonClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		addToCart(product);
	}, [addToCart, product]);

	return (
		<div onClick={() => onClick?.(product)} className="product-catalog-card">
			<Image src={product.imagePath} alt={product.id + "_image"} width="0" height="0" sizes="100%" style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "4/5" }}/>
			<span className="product-catalog-card-label">{product.label}</span>
			<p className="product-catalog-card-price">{product.priceRub} ₽</p>
			<button onClick={onOrderButtonClick} className="product-catalog-card-order-btn">Заказать</button>
		</div>
	)
}