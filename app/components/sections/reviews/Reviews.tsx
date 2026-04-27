import './reviews.css';
import Section from "../Section";
import ReviewsSwiper from './reviews-swiper/ReviewsSwiper';
import { getAllReviews } from '@/app/data/reviews';

export default function Reviews() {
	return (
		<Section className="reviews">
			<div className="header">
				<div>
					<span>Отзывы</span>
					<h2>Что говорят клиенты</h2>
				</div>
			</div>
			<div className="body">
				<ReviewsSwiper reviews={getAllReviews()}/>
			</div>
		</Section>
	)
}