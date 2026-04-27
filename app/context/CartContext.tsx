'use client';

import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
	product: Product;
}

interface CartContextType {
	items: CartItem[];
	cartOpen: boolean;
	setCartOpen: (open: boolean) => void;
	addToCart: (product: Product) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
	getTotalPrice: () => number;
	getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function loadCart(): CartItem[] {
	if (typeof window === 'undefined') 
		return [];
	
	try {
		const saved = localStorage.getItem('cart');
		return saved ? JSON.parse(saved) : [];
	} catch {
		return [];
	}
}

function saveCart(items: CartItem[]) {
	try {
		localStorage.setItem('cart', JSON.stringify(items));
	} catch (error) {
		console.error('Failed to save cart:', error);
	}
}


export function CartProvider({ children }: PropsWithChildren) {
	const [items, setItems] = useState<CartItem[]>([]);
	const [mounted, setMounted] = useState(false);
	const [cartOpen, setCartOpen] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setItems(loadCart());
		setMounted(true);
	}, []);

	useEffect(() => {
		if (mounted) 
			saveCart(items);
	}, [items, mounted]);

	const addToCart = (product: Product) => {
		const existingItem = items.find((item) => item.product.id === product.id);
		if(existingItem)
			return items;

		setItems((prevItems) => [...prevItems, { product: product }]);
		setCartOpen(true);
	};

	const removeFromCart = (id: string) => {
		setItems((prevItems) => prevItems.filter((item) => item.product.id !== id));
	};

	const clearCart = () => {
		setItems([]);
	};

	const getTotalPrice = () => {
		if (!mounted) 
			return 0;
		return items.reduce((total, item) => total + item.product.priceRub, 0);
	};

	const getCartCount = () => {
		if (!mounted)
			return 0;

		return items.length;
	};

	return (
		<CartContext.Provider
			value={{
				items,
				cartOpen,
				setCartOpen,
				addToCart,
				removeFromCart,
				clearCart,
				getTotalPrice,
				getCartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
}
