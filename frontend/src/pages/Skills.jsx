import { motion } from "framer-motion";

function Skills() {
	const skills = [
		{
			category: "Frontend",
			items: [
				{ name: "HTML5", level: 95 },
				{ name: "CSS", level: 95 },
				{ name: "JavaScript", level: 90 },
				{ name: "React", level: 90 },
				{ name: "Tailwind", level: 85 },
				{ name: "UI/UX", level: 85 },
			],
		},
		{
			category: "Backend & Python",
			items: [
				{ name: "Python", level: 88 },
				{ name: "FastAPI", level: 85 },
			],
		},
		{
			category: "AI & ML",
			items: [
				{ name: "Langchain", level: 85 },
				{ name: "Langgraph", level: 82 },
				{ name: "RAG", level: 80 },
				{ name: "Prompt Engineering", level: 88 },
				{ name: "Agentic AI", level: 80 },
			],
		},
		{
			category: "Database",
			items: [
				{ name: "MongoDB", level: 85 },
				{ name: "MySQL", level: 82 },
			],
		},
		{
			category: "Data & Analytics",
			items: [
				{ name: "Excel", level: 85 },
				{ name: "Power BI", level: 80 },
			],
		},
	];

	const CircularProgress = ({ percentage, name }) => {
		const radius = 45;
		const circumference = 2 * Math.PI * radius;
		const offset = circumference - (percentage / 100) * circumference;

		return (
			<div className="flex flex-col items-center">
				<svg width="120" height="120" className="transform -rotate-90">
					<circle
						cx="60"
						cy="60"
						r={radius}
						fill="none"
						stroke="#e5e7eb"
						strokeWidth="8"
					/>
					<motion.circle
						cx="60"
						cy="60"
						r={radius}
						fill="none"
						stroke="#2563eb"
						strokeWidth="8"
						strokeDasharray={circumference}
						initial={{ strokeDashoffset: circumference }}
						whileInView={{ strokeDashoffset: offset }}
						transition={{ duration: 1.5, ease: "easeOut" }}
						strokeLinecap="round"
					/>
				</svg>
				<div className="text-center mt-2">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="text-2xl font-bold text-white"
					>
						{percentage}%
					</motion.p>
					<p className="text-sm text-gray-400 font-semibold">{name}</p>
				</div>
			</div>
		);
	};

	return (
		<section id="skills" className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
						SKI<span className="bg-blue-600 text-white px-4 py-2">LLS</span>
					</h2>
					<p className="text-gray-300 text-lg font-semibold">
						I AM REALLY GOOD AT THE FOLLOWING TECHNICAL SKILLS
					</p>
				</motion.div>

				{/* Skills Grid by Category */}
				<div className="space-y-16">
					{skills.map((skillGroup, groupIndex) => (
						<motion.div
							key={groupIndex}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
						>
							{/* Category Title */}
							<h3 className="text-2xl font-bold text-white mb-8 text-center">
								{skillGroup.category}
							</h3>

							{/* Skills Circles Grid */}
							{(() => {
								const centerGroups = ["Backend & Python", "Database", "Data & Analytics"];
								const isCenter = centerGroups.includes(skillGroup.category);
								return (
									<div className={isCenter ? "flex justify-center gap-8 flex-wrap" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 place-items-center"}>
										{skillGroup.items.map((skill, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												transition={{
													duration: 0.5,
													delay: groupIndex * 0.1 + index * 0.05,
												}}
												whileHover={{ scale: 1.05 }}
											>
												<CircularProgress percentage={skill.level} name={skill.name} />
											</motion.div>
										))}
									</div>
								);
							})()}
						</motion.div>
					))}
				</div>

				{/* Bottom decoration */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="mt-16 text-center"
				>
					<div className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 h-1 w-32 rounded-full" />
				</motion.div>
			</div>
		</section>
	);
}

export default Skills;
