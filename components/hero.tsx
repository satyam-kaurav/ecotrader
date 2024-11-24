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
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 sm:mb-16">
					<div className="w-48 sm:w-60">
						<Image
							src="dark-logo.svg"
							alt="Ecotrader.io"
							height="512"
							width="512"
						/>
					</div>
					<button className="w-full sm:w-auto px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-background transition-all">
						Connect Wallet
					</button>
				</div>

				{/* Main Content - Reordered for mobile */}
				<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
					{/* Left Side Content */}
					<div className="space-y-6">
						{/* Countdown Timer - Modified for mobile */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
							{[
								{ value: timeLeft.days, label: "DAYS" },
								{ value: timeLeft.hours, label: "HOURS" },
								{ value: timeLeft.minutes, label: "MINUTES" },
								{ value: timeLeft.seconds, label: "SECONDS" },
							].map(({ value, label }) => (
								<div
									key={label}
									className="bg-zinc-900 p-1 sm:py-8 rounded-lg text-center"
								>
									<div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">
										{value}
									</div>
									<div className="text-sm sm:text-md text-blue-400">
										{label}
									</div>
								</div>
							))}
						</div>

						{/* Waiting List Form - Modified for mobile */}
						<div className="mt-8">
							<h3 className="text-xl mb-4 mt-6 text-center sm:text-left">
								JOIN THE WAITING LIST
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
									Join Waiting List
								</button>
							</form>
						</div>
					</div>

					{/* Right Side Content - Modified for mobile */}
					<div className="space-y-3 w-full mb-8 lg:mb-0">
						<h1 className="text-4xl sm:text-7xl font-bold leading-tight text-center lg:text-right">
							PRIVATE SALE
							<br />
							STARTING SOON!
						</h1>
						<p className="text-base sm:text-lg text-center lg:text-right">
							The Renewable Energy Market is now available to
							small investors. You can take an active part in the
							Green Energy
						</p>
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
			</div>
		</div>
	);
};

export default PrivateSaleLanding;
