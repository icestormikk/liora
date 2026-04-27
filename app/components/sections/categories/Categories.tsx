"use client"

import { getByCategory, groupByCategory, Product } from '@/app/data/products';
import { useModal } from '@/app/hooks/useModal';
import Link from "next/link";
import { useCallback, useState } from 'react';
import ImageSlider from "../../image-slider/ImageSlider";
import LioraModal from '../../modal/LioraModal';
import Section from "../Section";
import './categories.css';
import CategoryCard from "./category-card/CategoryCard";
import FullscreenSwiper from '../../swiper/fullscreen/FullscreenSwiper';
import ProductShortCard from '../../product/short-card/ProductShortCard';

export default function Categories() {
	const [selectedCategory, setSelectedCategory] = useState<Product["category"]>();
	const [selectedProduct, setSelectedProduct] = useState<Product>();
	const { isOpen, open, close } = useModal();

	const productsByCategory = groupByCategory();

	const onCategoryCardClick = useCallback((category: Product["category"]) => {
		setSelectedCategory(category);
		open();
	}, [open]);

	const onProductClick = useCallback((product: Product) => {
		setSelectedProduct(product);
		close();
	}, [close]);

	const onSwiperClose = useCallback(() => {
		setSelectedProduct(undefined);
	}, []);

	return (
		<>
			<Section>
				<div className="header">
					<div>
						<span>Коллекции</span>
						<h2>Наши изделия</h2>
					</div>
					<Link className="link-arrow" href="#catalogue">Смотреть всё</Link>
				</div>
				<div className="categories-container">
					{
						Object.entries(productsByCategory).map(([category, products], index) => (
							<CategoryCard key={category} onClick={() => onCategoryCardClick(category)}>
								<ImageSlider images={products.map((prod) => ({ src: prod.imagePath, alt: `${prod.id}-image` }))}/>
								<div className="category-overlay">
									<span>{String(index + 1).padStart(2, "0")}</span>
									<h1>{category}</h1>
									<button>Смотреть</button>
								</div>
							</CategoryCard>
						))
					}
				</div>
			</Section>
			{ selectedCategory && (
				<LioraModal isOpen={isOpen} onClose={close} title={selectedCategory}>
					<div className="grid grid-cols-3 gap-4">
						{ getByCategory(selectedCategory).map((product) => <ProductShortCard key={product.id} product={product} onClick={onProductClick}/>) }
					</div>
				</LioraModal>
			) }
			{ selectedProduct && <FullscreenSwiper images={[{ src: selectedProduct.imagePath, alt: "" }]} onClose={onSwiperClose}/> }
		</>
	)
}