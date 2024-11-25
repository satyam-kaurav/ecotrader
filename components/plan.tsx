import Image from "next/image";
import React from "react";

const EnergyPlanSection = () => {
	const plans = [
		{
			icon: "☀️",
			title: "SOLAR FIELDS",
			description:
				"Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultricies faucibus neque velit risus ac id lorem.",
			phase: 1,
		},
		{
			icon: "H₂",
			title: "GREEN HYDROGEN",
			description:
				"Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultricies faucibus neque velit risus ac id lorem.",
			phase: 1,
		},
		{
			icon: "⚡",
			title: "ENERGY STORAGE",
			description:
				"Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultricies faucibus neque velit risus ac id lorem.",
			phase: 1,
		},
		{
			icon: "🌪️",
			title: "WIND TURBINES",
			description:
				"Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultricies faucibus neque velit risus ac id lorem.",
			phase: 2,
		},
		{
			icon: "♻️",
			title: "WASTE TO ENERGY",
			description:
				"Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultricies faucibus neque velit risus ac id lorem.",
			phase: 2,
		},
		{
			icon: "🔥",
			title: "BIO-GAS TURBINES",
			description:
				"Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultricies faucibus neque velit risus ac id lorem.",
			phase: 2,
		},
	];

	return (
		<section className="w-full py-12 relative">
			<div className="container mx-auto max-w-7xl px-4">
				<h2 className="text-4xl font-bold text-center mb-4">
					Our Plan
				</h2>
				<p className="text-center mb-12 max-w-3xl mx-auto opacity-60">
					Risus commodo id odio turpis pharetra elementum. Pulvinar
					porta porta feugiat scelerisque in elit. Morbi rhoncus,
					tellus, eros consequat magna semper orci a tincidunt.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{plans.map((plan, index) => (
						<div key={index} className="relative group">
							<div className="p-8 bg-background border border-zinc-800 rounded-2xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 text-center">
								<div className="text-4xl mb-6">{plan.icon}</div>
								<h3 className="text-xl font-bold mb-4">
									{plan.title}
								</h3>
								<p className="text-sm opacity-60">
									{plan.description}
								</p>
								{plan.phase === 1 && index === 2 && (
									<div className="absolute top-0 right-0 sm:translate-x-[50%] sm:-translate-y-[50%] bg-primary text-primary-foreground rounded-full w-24 h-24 flex items-center justify-center">
										<div className="font-extrabold text-base rotate-12 group-hover:rotate-0 transition-all">
											PHASE <br />{" "}
											<p className="text-5xl">I</p>
										</div>
									</div>
								)}
								{plan.phase === 2 && index == 3 && (
									<div className="absolute top-0 sm:-translate-x-[50%] sm:-translate-y-[50%] left-0 bg-primary text-primary-foreground rounded-full w-24 h-24 flex items-center justify-center">
										<div className="font-extrabold text-base -rotate-12 group-hover:rotate-0 transition-all">
											PHASE <br />{" "}
											<p className="text-5xl">II</p>
										</div>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
			<Image
				src="/section-2.svg"
				alt="Plan"
				width={0}
				height={0}
				className="absolute top-0 left-0 h-full w-auto -z-10"
			/>
		</section>
	);
};

export default EnergyPlanSection;
