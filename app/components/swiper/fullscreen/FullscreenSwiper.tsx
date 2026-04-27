import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Image as ImageType } from "../../image-slider/ImageSlider";
import './fullscreenSwiper.css';
import Image from "next/image";

export interface FullscreenSwiperProps {
	images: ImageType[];
	onClose?: () => void;
}

export default function FullscreenSwiper({ images, onClose } : FullscreenSwiperProps) {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose?.();
			}
		};

		document.addEventListener("keydown", handler);
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", handler);
			document.body.style.overflow = "";
		}
	}, [onClose]);

	return createPortal(
		<div className="fullscreen-swiper">
			<div className="header">
				<button onClick={onClose} className="close-button">
					<MdClose size="34px"/>
				</button>
			</div>
			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation={true}
				pagination={true}
				style={{ width: "100%", height: "100%" }}
			>
				{ images && images.map((image, index) => (
					<SwiperSlide key={index} className="slide">
						<div style={{ position: "relative", height: "80%", width: "100%" }}>
							<Image src={image.src} alt={image.alt} fill={true} style={{ objectFit: "contain", height: "100%" }}/>
						</div>
					</SwiperSlide>
				)) }
			</Swiper>
		</div>,
		document.body
	)
}