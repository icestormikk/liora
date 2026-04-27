import './reviewCard.css';
import { Review as ReviewType } from "@/app/data/reviews";

export interface ReviewCardProps {
	review: ReviewType
}

export default function ReviewCard({ review } : ReviewCardProps) {
	return (
		<div className="review-card">
			<blockquote>{review.content}</blockquote>
			<p>{review.author}</p>
		</div>
	)
}