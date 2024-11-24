import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ecotrader",
	description: "Welcome to Ecotrader",
	icons: [
		{
			rel: "icon",
			type: "image/x-icon",
			url: "/ECOnew.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${SpaceGrotesk.className} antialiased`}>
				{children}
			</body>
		</html>
	);
}
