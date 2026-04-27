"use client"

import "./imageSlider.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export type Image = {
	src: string;
	alt: string;
}

export interface ImageSliderProps {
	timeout?: number;
	images: Image[]; 
}

export default function ImageSlider({ images, timeout = 5_000 }: ImageSliderProps) {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(true);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);

			setTimeout(() => {
				setCurrent((prev) => (prev + 1) % images.length);
				setFade(true);
			}, 500);
		}, timeout);

		return () => clearInterval(interval);
	}, [images.length, timeout]);

	return (
		<div className="image-slider">
			{images[current] && <Image src={images[current].src} alt={images[current].alt} width="0" height="0" sizes="100vw" style={{ opacity: fade ? 1 : 0 }} />}
		</div>
	)
}