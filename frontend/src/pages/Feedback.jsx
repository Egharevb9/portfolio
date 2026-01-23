import { useState } from "react";

function Feedback() {
	const [message, setMessage] = useState("");

	async function submit(e) {
		e.preventDefault();
		await fetch("http://localhost:8000/feedback", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message }),
		});
		setMessage("");
		alert("Feedback sent!");
	}

	return (
		<section id="feedback" className="max-w-xl mx-auto px-6 py-20">
			<h3 className="text-2xl font-semibold">Send Feedback</h3>
			<form onSubmit={submit} className="flex flex-col gap-4 mt-6">
				<textarea
					className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
					rows="4"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Your message"
				/>
				<button className="btn">Send</button>
			</form>
		</section>
	);
}
export default Feedback;