import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
	const [displayText, setDisplayText] = useState("");
	const [displaySubtext, setDisplaySubtext] = useState("");
	const [showCursor, setShowCursor] = useState(true);
	
	const fullText = "Hi, I’m Esther, an AI-driven software developer passionate about building intelligent, scalable, and impactful digital solutions using modern web and AI technologies.";
	const subtextLines = [
		"Based in Lagos, Nigeria.",
	];

	useEffect(() => {
		let charIndex = 0;
		const typingInterval = setInterval(() => {
			if (charIndex <= fullText.length) {
				setDisplayText(fullText.substring(0, charIndex));
				charIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 60);

		return () => clearInterval(typingInterval);
	}, []);

	useEffect(() => {
		if (displayText === fullText) {
			const delay = setTimeout(() => {
				let charIndex = 0;
				const subtextInterval = setInterval(() => {
					if (charIndex <= subtextLines[0].length) {
						setDisplaySubtext(subtextLines[0].substring(0, charIndex));
						charIndex++;
					} else {
						clearInterval(subtextInterval);
					}
				}, 50);
				return () => clearInterval(subtextInterval);
			}, 300);
			return () => clearTimeout(delay);
		}
	}, [displayText, fullText, subtextLines]);

	useEffect(() => {
		const cursorInterval = setInterval(() => {
			setShowCursor(prev => !prev);
		}, 600);
		return () => clearInterval(cursorInterval);
	}, []);

	return (
		<section id="hero" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 py-20 h-full">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
					{/* Left: Typing Content */}
					<div className="flex-1 flex flex-col justify-center">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-2l md:text-2l font-bold text-white mb-8 tracking-wider">
								{displayText}
							</h1>

							{displayText === fullText && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}
								>
								</motion.div>
							)}

							{displayText === fullText && (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.3 }}
									className="text-lg text-gray-300 mb-12"
								>
									{displaySubtext}
								</motion.p>
							)}

							<div className="flex gap-4 mt-8">
								<a
									href="/CV_Esther_Mfoniso.pdf"
									download
									className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Download CV
								</a>
								<a
									href="/Resume_Esther_Mfoniso.pdf"
									download
									className="border-2 border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
								>
									Download Resume
								</a>
							</div>
						</motion.div>
					</div>

					{/* Right: Image */}
					<div className="flex-1 relative">
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative h-[400px] md:h-[500px]"
						>
							<div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-400 rounded-2xl" />
							<img
								src="/IMG-20231231-WA0015.jpg"
								alt="Hero"
								className="absolute inset-0 w-full h-full object-cover rounded-2xl"
							/>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;