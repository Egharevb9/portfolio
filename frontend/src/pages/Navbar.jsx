import { useState } from "react";

function Navbar({ dark, setDark }) {
	const [active, setActive] = useState("home");

	const linkClass = (key) =>
		`text-white hover:text-blue-500 transition ${active === key ? "border-b-2 border-blue-600 pb-1" : ""}`;

	return (
		<nav className="sticky top-0 z-50 w-full flex items-center px-8 py-4 bg-black shadow-lg relative">
			{/* logo left, absolutely positioned so links can be centered */}
			<div className="absolute left-8 flex items-center gap-2">
				<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
					<span className="text-white font-bold text-lg">E</span>
				</div>
				<h1 className="text-xl font-bold text-white">
					<span className="text-blue-500">Esther</span> Mfoniso
				</h1>
			</div>

			{/* centered navigation links */}
			<div className="mx-auto pl-20 md:pl-32 flex gap-12 items-center">
				<a href="#hero" onClick={() => setActive("home")} className={linkClass("home")} aria-current={active === "home" ? "page" : undefined}>
					Home
				</a>
				<a href="#about" onClick={() => setActive("about")} className={linkClass("about")} aria-current={active === "about" ? "page" : undefined}>
					About Me
				</a>
				<a href="#experience" onClick={() => setActive("experience")} className={linkClass("experience")} aria-current={active === "experience" ? "page" : undefined}>
					Experience
				</a>
				<a href="#portfolio" onClick={() => setActive("portfolio")} className={linkClass("portfolio")} aria-current={active === "portfolio" ? "page" : undefined}>
					Portfolio
				</a>
				<a href="#contact" onClick={() => setActive("contact")} className={linkClass("contact")} aria-current={active === "contact" ? "page" : undefined}>
					Contact
				</a>
			</div>
		</nav>
	);
}

export default Navbar;