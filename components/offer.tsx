import React from "react";

const WhatWeOfferSection = () => {
	const offerings = [
		{
			number: "1",
			title: "PROJECT DEVELOPMENT",
			description:
				"Our team of experts works closely with stakeholders to identify and assess potential renewable energy projects, providing comprehensive feasibility studies and due diligence services to ensure successful outcomes.",
		},
		{
			number: "2",
			title: "ENGINEERING, CONSTRUCTION",
			description:
				"Our end-to-end EPC solutions ensure that each project is designed, procured, and constructed to the highest standards of quality and efficiency, while adhering to environmental regulations and guidelines.",
		},
		{
			number: "3",
			title: "OPERATIONS, MAINTENANCE",
			description:
				"We offer a complete and comprehensive solution to our partners and investors, managing all aspects of development & construction and maintaining the project once it's up and running.",
		},
		{
			number: "4",
			title: "POWER SALE & PPA'S",
			description:
				"Our trade center offers an array of options for short, medium, and long-term power purchases, our team works to adjust the allocation of quotas considering updated market status.",
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
