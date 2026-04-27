"use client"

import { getAllProducts, groupByCategory, Product } from "@/app/data/products";
import { useModal } from "@/app/hooks/useModal";
import { useCallback, useMemo, useState } from "react";
import LioraModal from "../../modal/LioraModal";
import InlineSwiper from "../../swiper/inline/InlineSwiper";
import Section from "../Section";
import './catalog.css';
import ProductsTabber, { ProductsTabberProps } from "./ProductsTabber";
import ProductCatalogCard from "../../product/catalog-card/ProductCatalogCard";

export default function Catalog() {
	const { isOpen, open, close } = useModal();
	
	const [selectedProduct, setSelectedProduct] = useState<Product|null>();
	const onProductClick = useCallback((product: Product) => {
		setSelectedProduct(product);
		open();
	}, [open]);
	const productTabs: ProductsTabberProps["tabs"] = useMemo(() => {
		const allProducts = getAllProducts();
		const tabs: ProductsTabberProps["tabs"] = [];

		const toTab = (id: string, label: string, products: Product[]) => {
			return {
				id: id,
				label: label,
				content: (
					<div className="product-cards">
						{ products.map((prod) => <ProductCatalogCard key={prod.id} product={prod} onClick={onProductClick}/>) }
					</div>
				)
			}
		}

		tabs.push(toTab("all", "Все", allProducts));

		const categories = Object.entries(groupByCategory(allProducts)).map(([category, products]) => toTab(category, category, products))
		tabs.push(...categories);

		return tabs;
	}, [onProductClick]);

	return (
		<Section>
			<div className="header">
				<div>
					<span>Каталог</span>
					<h2>Все изделия</h2>
				</div>
				<div></div>
			</div>
			<ProductsTabber tabs={productTabs}/>
			{ selectedProduct && (
				<LioraModal className="product-catalog-card-modal" isOpen={isOpen} onClose={() => close()}>
					<div className="grid grid-cols-2 h-full">
						<InlineSwiper images={[{ src: selectedProduct.imagePath, alt: `${selectedProduct.label}_image`}]}/>
						<div className="flex flex-col gap-4 justify-center items-start p-[clamp(24px,4vw,48px)]">
							<div className="product-main-info">
								<p className="product-collection-name">{selectedProduct.category}</p>
								<h2 className="product-name">{selectedProduct.label}</h2>
								<p className="product-price">{selectedProduct.priceRub} ₽</p>
							</div>
							<div className="product-additional-info">
								{ selectedProduct.description && (
									<div className="product-additional-info-section">
										<h4>Описание</h4>
										<p>{selectedProduct.description}</p>
									</div>
								) }
								{ selectedProduct.parts && (
									<div className="product-additional-info-section">
										<h4>Фурнитура</h4>
										<ul>
											{ selectedProduct.parts.map((part, index) => <li key={index}>{part}</li>) }
										</ul>
									</div>
								) }
							</div>
							<button>Заказать</button>
						</div>
					</div>
				</LioraModal>
			) }
		</Section>
	)
}