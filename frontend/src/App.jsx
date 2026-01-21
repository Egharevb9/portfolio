import { useState } from "react";
import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import UserProfile from "./pages/UserProfile.jsx";

function App() {
	const [dark, setDark] = useState(false);

	return (
		<div className={dark ? "dark" : ""}>
			<main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
				<Navbar dark={dark} setDark={setDark} />
				<Hero />
				<About />
				<Skills />
				<UserProfile />
				<Projects />
				<Contact />
				<Footer />
				<ChatBot />
			</main>
		</div>
	);
}

export default App
