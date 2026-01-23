import { useState } from "react";

function ChatBot() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);
	// prefer explicit VITE_CHAT_URL, fallback to VITE_API_URL + '/chat'
	const chatUrl = import.meta.env.VITE_CHAT_URL || (import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/chat` : "/chat");

	async function ask() {
		if (!input || loading) return;
		setLoading(true);
		try {
			const res = await fetch(chatUrl, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ question: input }),
			});

			if (!res.ok) {
				const text = await res.text().catch(() => "");
				throw new Error(`Server responded with ${res.status} ${text}`);
			}

			const data = await res.json();
			setMessages((prev) => [...prev, { q: input, a: data?.answer ?? "(no answer)" }]);
			setInput("");
		} catch (err) {
			console.error("Chat request failed:", err);
			setMessages((prev) => [...prev, { q: input, a: `Error: ${err.message}` }]);
		} finally {
			setLoading(false);
		}
	}


return (
<div className="fixed bottom-6 right-6">
{open && (
<div className="w-80 h-96 bg-white dark:bg-gray-900 rounded-2xl shadow p-4 flex flex-col">
<div className="flex-1 overflow-y-auto">
{messages.map((m, i) => (
<div key={i} className="mb-2">
<p className="font-semibold">You:</p>
<p>{m.q}</p>
<p className="font-semibold mt-1">AI:</p>
<p>{m.a}</p>
</div>
))}
</div>
<input
className="p-2 rounded bg-gray-100 dark:bg-gray-800"
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="Ask about me..."
/>
<button onClick={ask} className="btn mt-2">Ask</button>
</div>
)}
<button
onClick={() => setOpen(!open)}
className="rounded-full w-14 h-14 bg-blue-600 text-white"
>
🤖
</button>
</div>
);
}
export default ChatBot;