"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PrivateSaleLanding = () => {
	const SALE_END_DATE = "2024-11-30T00:00:00";

	const calculateTimeLeft = () => {
		const targetDate = new Date(SALE_END_DATE);
		const now = new Date();
		const difference = targetDate.getTime() - now.getTime();

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [email, setEmail] = useState("");

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev.seconds > 0) {
					return { ...prev, seconds: prev.seconds - 1 };
				} else if (prev.minutes > 0) {
					return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
				} else if (prev.hours > 0) {
					return {
						...prev,
						hours: prev.hours - 1,
						minutes: 59,
						seconds: 59,
					};
				} else if (prev.days > 0) {
					return {
						...prev,
						days: prev.days - 1,
						hours: 23,
						minutes: 59,
						seconds: 59,
					};
				}
				return prev;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log("Email submitted:", email);
	};

	return (
		<div className="text-white p-4 md:p-6">
			<div className="max-w-7xl mx-auto">
				{/* Header - Modified for mobile */}
				<div className="flex flex-row justify-between items-center gap-4 mb-8 mt-8 sm:mt-auto sm:mb-16">
					<div className="w-48 sm:w-60">
						<Image
							src="dark-logo.svg"
							alt="Ecotrader.io"
							height="512"
							width="512"
							priority={true}
						/>
					</div>
					<button className="w-auto px-2 py-1 sm:px-4 sm:py-2 border border-white rounded-lg hover:bg-white hover:text-background transition-all text-xs sm:text-base">
						Connect Wallet
					</button>
				</div>

				{/* Main Content - Reordered for mobile */}
				<div className="flex flex-col-reverse lg:grid lg:grid-cols-[40%_60%] gap-4">
					{/* Left Side Content */}
					<div className="space-y-6">
						{/* Countdown Timer - Modified for mobile */}
						<div className="grid grid-cols-4 gap-3">
							{[
								{ value: timeLeft.days, label: "DAYS" },
								{ value: timeLeft.hours, label: "HOURS" },
								{ value: timeLeft.minutes, label: "MINUTES" },
								{ value: timeLeft.seconds, label: "SECONDS" },
							].map(({ value, label }) => (
								<div
									key={label}
									className="bg-zinc-900 p-4 sm:py-8 rounded-lg text-center"
								>
									<div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">
										{value}
									</div>
									<div className="text-[10px] sm:text-[14px] text-blue-400">
										{label}
									</div>
								</div>
							))}
						</div>

						{/* Waiting List Form - Modified for mobile */}
						<div className="mt-8">
							<h3 className="text-lg mb-4 mt-12 sm:mt-6 text-center sm:text-left">
								PRIVATE SALE LAUNCHING SOON!{" "}
								<span className="text-red-500">
									JOIN THE WAITING LIST
								</span>
							</h3>
							<form
								onSubmit={handleSubmit}
								className="flex flex-col sm:flex-row gap-4"
							>
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email"
									className="flex-grow px-4 py-2 bg-transparent border border-secondary rounded-lg focus:outline-none focus:border-primary"
									required
								/>
								<button
									type="submit"
									className="px-6 py-2 bg-primary text-background rounded-lg hover:bg-white hover:text-black transition-all"
								>
									Join Now
								</button>
							</form>
						</div>
					</div>

					{/* Right Side Content - Modified for mobile */}
					<div className="space-y-5 w-full mb-8 lg:mb-0">
						<h1 className="text-xl mt-8 sm:mt-6 sm:text-5xl font-bold tracking-tighter text-center lg:text-right">
							EcoTrader&apos;s Real World Assets
							<br />
							<p className="text-xl sm:mt-2 sm:text-5xl tracking-tighter normal-case">
								Your door to the{" "}
								<span className="italic">Energy Sector</span>
							</p>
						</h1>
						<p className="text-sm sm:text-lg text-center lg:text-right !sm:mt-8 max-w-xl lg:ml-auto">
							The Renewable Energy Market is now available to
							small investors. You can take an active part in the
							Green Energy
						</p>
						<div className="mx-auto w-[90%] max-h-96 my-16 rounded-xl">
							<Image
								src="/mountains.jpg"
								alt="Mountains graphic"
								height={384}
								width={1000}
								className="w-full max-h-96 object-cover rounded-xl sm:hidden"
							/>
						</div>
						<div className="hidden sm:flex justify-center lg:justify-end absolute right-0 top-0 -z-10">
							<Image
								src="section-1.svg"
								alt="Star graphic"
								width="400"
								height="400"
							/>
						</div>
					</div>
				</div>
				<div className="mx-auto w-[90%] max-h-96 my-16 rounded-xl">
					<Image
						src="/mountains.jpg"
						alt="Mountains graphic"
						height={384}
						width={1000}
						className="w-full max-h-96 object-cover rounded-xl hidden sm:block"
					/>
				</div>
			</div>
		</div>
	);
};

export default PrivateSaleLanding;
