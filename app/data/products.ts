export type Product = {
	id: string,
	label: string,
	category: string,
	subcategory: string,
	imagePath: string,
	priceRub: number,
	description?: string,
	parts: string[]
}

const Products: Product[] = [
	{ id: 'cirlce-sergi-iz-bisera', label: "Круглые серьги из бисера", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Круглые серьги", imagePath: "/liora/circle/ukrasheniya-sergi-iz-bisera.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'cirlce-sergi-iz-bisera-2', label: "Круглые серьги из бисера 2", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Круглые серьги", imagePath: "/liora/circle/ukrasheniya-sergi-iz-bisera-2.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'cirlce-sergi-iz-bisera-3', label: "Круглые серьги из бисера 3", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Круглые серьги", imagePath: "/liora/circle/ukrasheniya-sergi-iz-bisera-3.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'lepestki-sergi-iz-bisera', label: "Лепестки серьги из бисера", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Лепестки", imagePath: "/liora/lepestki/ukrasheniya-sergi-lepestki-iz-bisera.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'lepestki-sergi-iz-bisera-2', label: "Лепестки серьги из бисера 2", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Лепестки", imagePath: "/liora/lepestki/ukrasheniya-sergi-lepestki-iz-bisera-2.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'lepestki-sergi-iz-bisera-3', label: "Лепестки серьги из бисера 3", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Лепестки", imagePath: "/liora/lepestki/ukrasheniya-sergi-lepestki-iz-bisera-3.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'lepestki-sergi-iz-bisera-i-zhemchuga', label: "Браслет из бисера с жемчужиной", description: "Описание продукта ( просто текст :) )", category: "Браслеты", subcategory: "Браслет из жемчуга", imagePath: "/liora/pearl/ukrasheniya-braslet-iz-bisera-i-zhemchuga.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'lepestki-sergi-iz-bisera-i-zhemchuga-2', label: "Браслет из бисера с жемчужиной 2", description: "Описание продукта ( просто текст :) )", category: "Браслеты", subcategory: "Браслет из жемчуга", imagePath: "/liora/pearl/ukrasheniya-braslet-iz-bisera-i-zhemchuga-2.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
	{ id: 'treugolnik-sergi-iz-bisera', label: "Треугольник серьги из бисера", description: "Описание продукта ( просто текст :) )", category: "Серьги", subcategory: "Треугольные серьги", imagePath: "/liora/treugolnik/ukrasheniya-sergi-iz-bisera.jpg", priceRub: 1000, parts: ["Застёжки и кольца — позолоченная латунь", "Основа серёг — медицинский сплав", "Бисер — Miyuki (Япония)"] },
];

export function getAllProducts() : Product[] {
	return Array.from(Products);
}

export function getByCategory(category: string, products: Product[] = Products) : Product[] {
	return products.filter((product) => product.category === category);
}

export function groupByCategory(products: Product[] = Products) : Record<Product["category"], Product[]> {
	return products.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);
}