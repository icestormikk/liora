import { Swiper, SwiperSlide } from "swiper/react";
import { Image as ImageType } from "../../image-slider/ImageSlider";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

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
			style={{ width: "100%", height: "100%" }}
		>
			{ images && images.map((image, index) => (
				<SwiperSlide key={index}>
					<div style={{ position: "relative", height: "100%" }}>
						<Image src={image.src} alt={image.alt} fill={true} sizes="100%" style={{ objectFit: "cover", height: "100%" }}/>
					</div>
				</SwiperSlide>
			)) }
		</Swiper>
	);
}