import { Product } from "@/app/data/products";
import Image from "next/image";
import "./productShortCard.css";

export interface ProductShortCard {
	product: Product;
	onClick?: (product: Product) => void;
}

export default function ProductShortCard({ product, onClick } : ProductShortCard) {
	return (
		<div onClick={() => onClick?.(product)} className="group product-short-card">
			<Image src={product.imagePath} alt={`${product.label}-image`} width="0" height="0" sizes="100vw" className="group-hover:scale-[1.02] group-hover:opacity-[0.88] product-short-card-image"/>
			<span className="product-short-card-label">{product.label}</span>
		</div>
	)
}