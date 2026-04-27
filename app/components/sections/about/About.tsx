import './about.css';
import Section from "../Section";
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
	return (
		<Section className="about">
			<div className="body">
				<div className="about-text">
					<div className="header">
						<div>
							<span>About</span>
							<h2>История Liora</h2>
						</div>
						<div></div>
					</div>
					<p>Liora — это украшения ручной работы из японского бисера Miyuki. Каждое изделие создаётся с вниманием к цвету, форме и тактильному ощущению.</p>
					<p>Мы верим, что украшение — это не аксессуар, а ощущение. Тепло металла, мягкость жемчуга, игра бисера в свете — всё это складывается в нечто личное и живое.</p>
					<Link href="#" className="link-arrow">Написать нам</Link>
				</div>
				<div className="about-images">
					<div className="image-wrapper w-3/4 h-[85%] top-0 left-0">
						<Image src="/liora/circle/ukrasheniya-sergi-iz-bisera.jpg" alt="" fill sizes="100%" style={{ objectFit: "cover" }} />
					</div>
					<div className="image-wrapper w-[48%] h-[55%] bottom-0 right-0">
						<Image src="/liora/treugolnik/ukrasheniya-sergi-iz-bisera.jpg" alt="" fill sizes="100%" style={{ objectFit: "cover" }} />
					</div>
				</div>
			</div>
		</Section>
	)
}