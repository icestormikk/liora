import { HTMLAttributes, PropsWithChildren } from "react";

export default function CategoryCard({ children, ...rest }: HTMLAttributes<unknown>) {
	return (
		<div {...rest} className="bg-gray-200 aspect-3/4 relative">
			{children}
		</div>
	);
}