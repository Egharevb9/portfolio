import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [feedbackMessage, setFeedbackMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const apiBase = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
		const formatted = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;

		try {
			const res = await fetch(`${apiBase}/feedback`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: formatted }),
			});

			if (!res.ok) {
				let errText = "";
				try { const err = await res.text(); errText = err; } catch (_) {}
				throw new Error(`Server responded with ${res.status} ${errText}`);
			}

			setFeedbackMessage("✅ Message sent successfully! I'll get back to you soon.");
			setSubmitted(true);

			// Reset form
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (err) {
			console.error("Feedback send failed:", err);
			setFeedbackMessage("❌ Failed to send message. Please try again later.");
			setSubmitted(true);
		}

		// Clear success/error message after 5 seconds
		setTimeout(() => {
			setSubmitted(false);
			setFeedbackMessage("");
		}, 5000);
	};

	const contactMethods = [
		{
			isSVG: true,
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true" fill="currentColor"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"/></svg>',
			title: "My Address",
			content: "Lagos, Nigeria",
		},

			{
				isSVG: true,
				icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>',
				title: "Email Address",
				content: "estherdominion2002@gmail.com",
				href: "https://mail.google.com/mail/?view=cm&fs=1&to=estherdominion2002@gmail.com",
				hideContent: true,
			},
			{
				isSVG: true,
				icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>',
				title: "WhatsApp Me",
				content: "+2348111818389",
				href: "https://wa.me/2348111818389",
				hideContent: true,
			},
	];

	const socialMedia = [
		{
			name: "Facebook",
			icon: "fab fa-facebook-square",
			url: "https://facebook.com/your-profile",
			color: "hover:text-blue-600",
		},
		{
			name: "Twitter",
			icon: "fab fa-x-twitter",
			isSVG: true,
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg>',
			url: "https://twitter.com/your-handle",
			color: "hover:text-gray-400",
		},
		{
			name: "Instagram",
			icon: "fab fa-instagram",
			isSVG: true,
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>',
			url: "https://instagram.com/your-profile",
			color: "hover:text-pink-600",
		},
		{
			name: "LinkedIn",
			icon: "fa fa-linkedin",
			isSVG: true,
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>',
			url: "https://linkedin.com/in/your-profile",
			color: "hover:text-blue-500",
		},
		{
			name: "WhatsApp",
			icon: "fab fa-whatsapp",
			isSVG: true,
			svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>',
			url: "https://wa.me/+2348111818389",
			color: "hover:text-green-500",
		},
		
	];

	return (
		<section id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="relative h-80 md:h-96 bg-gradient-to-r from-gray-900 to-black flex items-center justify-center overflow-hidden"
			>
				<div className="absolute inset-0 opacity-30 bg-cover bg-center" />
				<div className="absolute inset-0 bg-black/50" />
				<motion.div
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="relative z-10 text-center"
				>
					<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8">CONTACT</h1>
					<motion.a
						whileHover={{ scale: 1.05 }}
						href="#hero"
						className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all"
					>
					</motion.a>
				</motion.div>
			</motion.div>

			{/* Contact Methods */}
			<div className="max-w-6xl mx-auto px-6 py-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20">
					{contactMethods.map((method, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="text-center px-4"
						>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
							>
								{method.href ? (
									<a
										href={method.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={method.title}
										className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10"
									>
										{method.isSVG ? (
											<div
												className="w-8 h-8 md:w-10 md:h-10"
												dangerouslySetInnerHTML={{ __html: method.icon }}
											/>
										) : (
											<span className="text-2xl md:text-3xl">{method.icon}</span>
										)}
									</a>
								) : method.isSVG ? (
									<div
										className="w-8 h-8 md:w-10 md:h-10"
										dangerouslySetInnerHTML={{ __html: method.icon }}
									/>
								) : (
									<span className="text-2xl md:text-3xl">{method.icon}</span>
								)}
							</motion.div>
							<h3 className="text-lg md:text-xl font-bold mb-2">{method.title}</h3>
							<p className="text-gray-400 text-sm md:text-base">
								{method.hideContent ? (
									// visually hidden but available to screen readers
									<span className="sr-only">{method.content}</span>
								) : method.href ? (
									<a href={method.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
										{method.content}
									</a>
								) : (
									method.content
								)}
							</p>
						</motion.div>
					))}
				</div>

				{/* Social Media Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-20 pb-12 border-b border-gray-700"
				>
					<h3 className="text-2xl font-bold mb-8">Connect With Me On Social Media</h3>
					<div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
						{socialMedia.map((social, index) => (
							<motion.a
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.95 }}
								className={`w-12 h-12 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold transition-all ${social.color}`}
								title={social.name}
							>
								{social.isSVG ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 640"
										fill="currentColor"
										className="w-6 h-6 md:w-8 md:h-8"
										dangerouslySetInnerHTML={{ __html: social.svg }}
									/>
								) : (
									<i className={social.icon}></i>
								)}
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Contact Form Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-gray-900/50 rounded-2xl p-6 md:p-12 border border-gray-800"
				>
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
							Contact <span className="bg-blue-600 px-3 py-1 sm:px-4 sm:py-2">Form</span>
						</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Have a question or want to work together? I'd love to hear from you! Fill out the form below and I'll get back to you as soon as possible.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Feedback Message */}
						{submitted && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								className="bg-green-600/20 border border-green-600 text-green-300 px-6 py-4 rounded-lg text-center font-semibold"
							>
								{feedbackMessage}
							</motion.div>
						)}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Name */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
							>
								<label className="block text-sm font-semibold mb-2">Name</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your Name"
										className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
									required
								/>
							</motion.div>

							{/* Email */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<label className="block text-sm font-semibold mb-2">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="your@email.com"
									className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
									required
								/>
							</motion.div>
						</div>

						{/* Subject */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							<label className="block text-sm font-semibold mb-2">Subject</label>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								placeholder="What's this about?"
								className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition"
								required
							/>
						</motion.div>

						{/* Message */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<label className="block text-sm font-semibold mb-2">Message</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Your message here..."
								rows="6"
								className="w-full px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition resize-none"
								required
							/>
						</motion.div>

						{/* Submit Button */}
						<motion.button
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							whileHover={{ scale: 1.05 }}
							type="submit"
							className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg transition-all duration-300 cursor-pointer"
						>
							Send Message
						</motion.button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}

export default Contact;
