import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image as ImageType } from "../../image-slider/ImageSlider";
import "./inlineSwiper.css";

export interface InlineSwiperProps {
	images: ImageType[];
}

export default function InlineSwiper({ images } : InlineSwiperProps) {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			navigation={true}
			pagination={true}
			slidesPerView={1}
			className="inline-swiper"
		>
			{ images && images.map((image, index) => (
				<SwiperSlide key={index} className="inline-swiper-slide">
					<div>
						<Image src={image.src} alt={image.alt} fill={true} sizes="100%"/>
					</div>
				</SwiperSlide>
			)) }
		</Swiper>
	);
}