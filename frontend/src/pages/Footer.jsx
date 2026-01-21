function Footer() {
	return (
		<footer className="bg-black text-white py-16">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
				{/* Logo + description */}
				<div className="flex flex-col gap-4">
					{/* Use portfolio logo if present, otherwise text fallback */}
					<div className="flex items-center gap-3">
						<img src="/src/assets/logo.png" alt="logo" className="w-12 h-12 object-contain" onError={(e)=>{e.target.style.display='none'}} />
						<h3 className="text-2xl font-bold text-blue-500">Esther Mfoniso</h3>
					</div>
					<p className="text-gray-400">Building AI-powered web experiences and voice-enabled products. Follow my work and get in touch for collaborations.</p>

					<div>
						<h4 className="text-lg font-semibold mb-2">Follow me</h4>
						<div className="flex gap-4">
							<a href="https://facebook.com/your-profile" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
							<a href="https://twitter.com/your-handle" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-white text-xl"><i className="fab fa-x"></i></a>
							<a href="https://instagram.com/your-profile" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
							<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-white text-xl"><i className="fab fa-linkedin-in"></i></a>
							<a href="https://wa.me/2348111818389" target="_blank" rel="noreferrer" className="text-green-500 hover:text-white text-xl"><i className="fab fa-whatsapp"></i></a>
						</div>
					</div>
				</div>

				{/* Information links (kept minimal) */}
				<div>
					<h4 className="text-lg font-semibold mb-4 text-blue-400">Information</h4>
					<ul className="space-y-3 text-gray-400">
						<li><a href="#about" className="hover:text-white">About</a></li>
						<li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
						<li><a href="#contact" className="hover:text-white">Contact</a></li>
						<li><a href="#" className="hover:text-white">Privacy Policy</a></li>
					</ul>
				</div>

				{/* Contacts */}
				<div>
					<h4 className="text-lg font-semibold mb-4 text-blue-400">Contacts</h4>
					<p className="text-gray-400 flex items-center gap-3"><i className="fas fa-map-marker-alt"></i>  Lagos, Nigeria</p>
					<p className="text-gray-400 flex items-center gap-3 mt-2"><i className="fas fa-phone"></i> +2348111818389</p>
					<p className="text-gray-400 flex items-center gap-3 mt-2"><i className="fas fa-envelope"></i> estherdominion2002@gmail.com</p>
				</div>
			</div>

			<div className="mt-12 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Esther · All rights reserved</div>
		</footer>
	);
}

export default Footer;