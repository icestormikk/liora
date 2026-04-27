"use client"

import { Review } from "@/app/data/reviews";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../review-card/ReviewCard";
import "./reviewsSwiper.css";

export interface ReviewsSwiperProps {
	reviews: Review[]
}

export default function ReviewsSwiper({ reviews } : ReviewsSwiperProps) {
	return (
		<Swiper
			className="reviews-swiper"
			modules={[Pagination, Autoplay]}
			pagination={true}
			slidesPerView={1}
			autoplay={{
				delay: 5_000,
			}}
			loop={true}
		>
			{ reviews && reviews.map((review, index) => (
				<SwiperSlide className="reviews-swiper-slide" key={index}>
					<ReviewCard review={review}/>
				</SwiperSlide>
			)) }
		</Swiper>
	)
}