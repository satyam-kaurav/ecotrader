import Image from "next/image";
import React from "react";

type SocialMediaLinks = {
	[key: string]: {
		url: string;
		icon: string;
	};
};

const socialMediaLinks: SocialMediaLinks = {
	discord: {
		url: "https://discord.com/invite/cvSFXP7H9q",
		icon: "/socials/discord.png",
	},
	linkedin: {
		url: "https://www.linkedin.com/company/ecotrader/?viewAsMember=true",
		icon: "/socials/linkedin.png",
	},
	instagram: {
		url: "https://www.instagram.com/ecotrader.io/",
		icon: "/socials/insta.png",
	},
	twitter: {
		url: "https://x.com/Ecotrader_io",
		icon: "/socials/x.png",
	},
	facebook: {
		url: "https://www.facebook.com/Ecotrader.io/",
		icon: "/socials/facebook.png",
	},
};

export default function Footer() {
	return (
		<footer className="bg-primary text-background text-center py-6 mt-12">
			{/* Top Section: Logo */}
			<div className="flex flex-col items-center mb-4">
				<Image
					src="/light-logo-removebg-preview.png" // Replace with your logo path
					alt="Ecotrader Logo"
					width={1000}
					height={1000}
					className="w-full max-w-md"
				/>
			</div>

			{/* Social Media Icons */}
			<div className="flex justify-center gap-4 mb-4">
				{Object.keys(socialMediaLinks).map((key) => (
					<a
						key={key}
						href={socialMediaLinks[key].url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={socialMediaLinks[key].icon}
							width={32}
							height={32}
							alt={`${key} icon`}
						/>
					</a>
				))}
			</div>

			{/* Bottom Section: Copyright */}
			<div className="text-sm border-t border-background pt-4">
				Copyright © 2024 Ecotrader • All Rights Reserved
			</div>
		</footer>
	);
}
