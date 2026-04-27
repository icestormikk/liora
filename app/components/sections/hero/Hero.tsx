import Image from "next/image";
import Link from "next/link";

export default async function Hero() {
	return (
		<section id="hero" className="relative h-[min(100vh,900px)] overflow-hidden">
			<div className="relative w-full h-full">
				<Image src="/liora/lepestki/ukrasheniya-sergi-lepestki-iz-bisera-3.jpg" alt="sergi-lepestki-iz-bisera" fill sizes="100%" loading="eager" className="object-cover w-full h-full object-[center_30%]"/>
			</div>
			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,#1e1a168c_0%,#1e1a1626_50%,#0000_100%)] flex justify-start items-end">
				<div className="px-[clamp(40px,6vw,80px)] py-[clamp(20px,4vw,60px)] max-w-25 text-white">
					<p className="font-(family-name:--font-inter) font-normal uppercase text-white/75! text-[13px] tracking-[0.12em] mb-10 whitespace-nowrap">Handcrafted bead jewelry</p>
					<h1 className="font-(family-name:--font-cormorant-garamond) text-[clamp(52px,7vw,96px)] font-light tracking-[-0.01em] leading-[1.05] mb-5">Quiet<br/>Sparkle</h1>
					<div className="flex flex-row gap-4 ">
						<Link href="#catalog" className="border-solid border-white border hover:bg-white hover:text-(--text-muted) transition-(--transition-base)">
							<button>В каталог</button>
						</Link>
						<Link href="#about">
							<button className="text-white/80">Наши изделия</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}