import { motion } from "framer-motion";

function About() {
	return (
		<section id="about" className="bg-gradient-to-b from-black via-gray-900 to-black py-20 text-white">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
				<h2 className="text-4xl md:text-5xl font-bold text-white">
						ABOUT <span className="bg-blue-600 text-white px-4 py-2">ME</span>
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* Objective */}
						<div className="mb-12">
							<div className="flex items-start gap-4">
								<div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">OBJECTIVE</h3>
									<p className="text-gray-300 leading-relaxed">
										A motivated software developer transitioning into AI development, seeking to contribute to an innovative organization that values competitive excellence, continuous improvement, and community impact. Passionate about designing and delivering intelligent, user-centric digital solutions with elegant design, reliable infrastructure, and scalable backend systems using modern AI technologies and APIs.
									</p>
								</div>
							</div>
						</div>

						{/* What I Do */}
						<div className="mb-12">
							<div className="flex items-start gap-4">
								<div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
										<path d="M4 4a2 2 0 012-2h4.586a2 2 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 014 9.414V4z" />
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">WHAT I DO?</h3>
									<p className="text-gray-300 leading-relaxed">
										I work as a full-stack developer specializing in AI integration, with expertise in React, FastAPI, and modern web technologies. I design and build intelligent, user-centric applications that combine elegant design with robust, scalable backend systems to solve real-world problems effectively..
									</p>
								</div>
							</div>
						</div>

						{/* Signature & Button */}
						<div className="flex items-center gap-8">
							<div className="text-4xl font-script text-gray-400"></div>
							<motion.a
								whileHover={{ scale: 1.05 }}
								href="/Resume_Esther_Mfoniso.pdf"
								download
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
							>
								Download Resume <span>↓</span>
							</motion.a>
						</div>
					</motion.div>

					{/* Right: Profile Card */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col items-center"
					>
						<div className="bg-gray-800 rounded-lg overflow-hidden mb-6 w-full max-w-sm">
							<img
								src="/IMG-20231231-WA0015.jpg"
								alt="Profile"
								className="w-full h-80 object-cover"
							/>
						</div>
						<h3 className="text-2xl font-bold text-white mb-4">ESTHER EGHAREVBA</h3>
						<div className="text-gray-300 text-center space-y-2">
							<p><strong className="text-white">Address:</strong> Lagos, Nigeria</p>
							<p><strong className="text-white">Phone:</strong> +234 8111818389</p>
							<p><strong className="text-white">Email:</strong> estherdominion2002@gmail.com</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default About;