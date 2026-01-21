import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
	const cards = [
		{
			title: "Real-World AI Voice Applications",
			desc: "Real-world deployments integrating AI voice into products.",
			img: "",
		},
		{
			title: "Transforming Ideas into Voice Solutions",
			desc: "Prototypes and production systems for voice UX.",
			img: "",
		},
		{
			title: "Innovations in Voice Technology",
			desc: "Research and R&D focused projects.",
			img: "",
		},
	];

	// modal state
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	function openModal(i) {
		setSelectedIndex(i);
		setModalOpen(true);
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<section id="portfolio" className="bg-black text-white py-20 px-6">
			<div className="max-w-7xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
				<p className="text-gray-400 mb-12">Monotonectally whiteboard proactive with leading business to niche markets rather than tested</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{cards.map((c, i) => (
						<motion.div
							key={i}
							whileHover={{ y: -8 }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: i * 0.08 }}
							className="relative bg-gradient-to-br from-black to-gray-900 p-6 rounded-2xl border border-blue-700/30 overflow-hidden"
						>
							<div className="rounded-xl overflow-hidden mb-6 border border-blue-700/20">
								{/* image placeholder - replace with real screenshots later */}
								<div className="w-full h-56 bg-gradient-to-tr from-blue-800 via-blue-700 to-black flex items-center justify-center">
									<span className="text-white/90 font-semibold">Image</span>
								</div>
							</div>

							<h3 className="text-xl font-bold mb-2 text-blue-200">{c.title}</h3>
							<p className="text-gray-400 mb-6">{c.desc}</p>

							<div className="absolute right-6 bottom-6">
								<motion.button
									whileHover={{ scale: 1.08, rotate: 8 }}
									whileTap={{ scale: 0.95 }}
									className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg"
									onClick={() => openModal(i)}
									aria-label={`Open ${c.title}`}
								>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Modal */}
			{modalOpen && (
				<div className="fixed inset-0 z-60 flex items-center justify-center p-6">
					<div className="absolute inset-0 bg-black/70" onClick={closeModal}></div>
					<motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.2 }} className="relative max-w-3xl w-full bg-gray-900 rounded-xl overflow-hidden border border-blue-700">
						<div className="p-6">
							<h3 className="text-2xl font-bold mb-4">{cards[selectedIndex].title}</h3>
							<div className="w-full h-64 bg-gradient-to-tr from-blue-800 via-blue-700 to-black rounded mb-4 flex items-center justify-center">
								<span className="text-white/90">Large Image Placeholder</span>
							</div>
							<p className="text-gray-300">{cards[selectedIndex].desc}</p>
						</div>
						<button onClick={closeModal} className="absolute top-4 right-4 text-white/80 bg-black/30 rounded-full p-2">✕</button>
					</motion.div>
				</div>
			)}
		</section>
	);
}
export default Projects;