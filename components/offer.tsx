import React from "react";

const WhatWeOfferSection = () => {
	const offerings = [
		{
			number: "1",
			title: "PROJECT DEVELOPMENT",
			description:
				"Ecotrader collaborates with stakeholders to identify and evaluate renewable energy projects, ensuring feasibility through detailed studies and expert analysis for impactful outcomes.",
		},
		{
			number: "2",
			title: "ENGINEERING, CONSTRUCTION",
			description:
				"Providing comprehensive EPC services, Ecotrader delivers quality-assured projects adhering to environmental guidelines, from design to construction, ensuring sustainability and efficiency.",
		},
		{
			number: "3",
			title: "OPERATIONS, MAINTENANCE",
			description:
				"Ecotrader ensures seamless project management by offering end-to-end operational solutions, maintaining infrastructure, and optimizing performance for long-term success.",
		},
		{
			number: "4",
			title: "POWER SALE & PPA'S",
			description:
				"Facilitating flexible power purchase agreements, Ecotrader supports short and long-term energy trading, adapting to market needs and advancing clean energy access.",
		},
	];

	return (
		<div className="bg-transparent my-4 p-4 md:p-8">
			<h1 className="text-white text-5xl md:text-9xl -mb-4 md:-mb-8 -z-10 font-bold text-center px-2">
				WHAT WE OFFER
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto mt-12 md:mt-0">
				{offerings.map((offering) => (
					<div
						key={offering.number}
						className={`rounded-xl p-4 md:p-8 transition-all duration-300 hover:bg-primary group border border-white/10 bg-background`}
					>
						<div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 md:gap-8 items-start">
							<span className="text-6xl md:text-9xl font-bold text-primary group-hover:text-background transition-all group-hover:rotate-12 h-full flex items-center justify-start md:justify-center mb-2 md:mb-0">
								{offering.number}.
							</span>
							<div className="space-y-2 md:space-y-4">
								<h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-background transition-all">
									{offering.title}
								</h2>
								<p className="text-sm leading-relaxed text-gray-300 group-hover:text-background transition-all">
									{offering.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhatWeOfferSection;
