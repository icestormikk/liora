export type Review = {
	author: string,
	content: string
}

const Reviews: Review[] = [
	{
		author: "Анна М.",
		content: "Получила браслет — он превзошёл все ожидания. Невесомый, аккуратный, очень красивый."
	},
	{
		author: "Катя В.",
		content: "Заказывала серьги-лепестки в подарок подруге. Упаковка восхитительная, изделие — просто произведение искусства."
	},
	{
		author: "Маша Р.",
		content: "Третий заказ у Liora. Каждый раз удивляюсь, насколько всё сделано с душой."
	},
	{
		author: "Лиза П.",
		content: "Треугольные серьги получила быстро, смотрятся идеально. Буду заказывать ещё."
	}
]

export function getAllReviews() : Review[] {
	return Array.from(Reviews);
}