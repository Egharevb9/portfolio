import { useState } from "react";

function ChatBot() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const chatUrl = import.meta.env.VITE_CHAT_URL;

	async function ask() {
		const res = await fetch(chatUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ question: input }),
		});
		const data = await res.json();
		setMessages([...messages, { q: input, a: data.answer }]);
		setInput("");
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