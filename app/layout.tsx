import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import { CartProvider } from "./context/CartContext";
import CartSidebar from "./components/cart/CartSidebar";

const geistSans = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
	variable: "--cormorant-garamond",
	subsets: ["latin"]
})

const greatVibes = Great_Vibes({
	variable: "--great-vibes",
	subsets: ["latin"],
	weight: "400"
})

export const metadata: Metadata = {
  title: "Liora — Handcrafted Bead Jewelry",
  description: "Liora — украшения ручной работы из японского бисера. Серьги и браслеты с душой.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${cormorantGaramond.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}