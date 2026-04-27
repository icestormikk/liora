import Image from "next/image";
import Section from "../Section";
import './lookbook.css';

export default function Lookbook() {
	return (
		<Section className="lookbook">
			<div className="container">
				<div className="header">
					<div>
						<span>Lookbook</span>
					</div>
					<></>
				</div>
				<div className="body">
					<div className="image-wrapper">
						<Image src="/circle/ukrasheniya-sergi-iz-bisera-2.jpg" alt="" fill sizes="100%" style={{ objectFit: "cover" }}/>
					</div>
					<div className="image-wrapper">
						<Image src="/lepestki/ukrasheniya-sergi-lepestki-iz-bisera-2.jpg" alt="" fill sizes="100%" style={{ objectFit: "cover" }}/>
					</div>
					<div className="image-wrapper">
						<Image src="/pearl/ukrasheniya-braslet-iz-bisera-i-zhemchuga-2.jpg" alt="" fill sizes="100%" style={{ objectFit: "cover" }}/>
					</div>
				</div>
				<div className="quote">
					<blockquote>&quot;Каждое изделие создаётся вручную — с вниманием к цвету, форме и тактильному ощущению&quot;</blockquote>
				</div>
			</div>
		</Section>
	)
}