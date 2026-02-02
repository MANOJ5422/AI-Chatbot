import { useState } from "react";
import replies from "../data/replies.json";
import Message from "./Message";
import FeedbackModal from "./FeedbackModal";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [feedbackFor, setFeedbackFor] = useState(null);

  const handleAsk = (e) => {
    e.preventDefault();

    const userMsg = { sender: "user", text: input };
    const key = input.toLowerCase().trim();
    const botText =
      replies[key] || "Sorry, Did not understand your query!";

    const botMsg = { sender: "bot", text: botText };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  const handleSave = () => {
    localStorage.setItem("conversations", JSON.stringify(messages));
  };

  return (
    <>
      {messages.map((msg, i) => (
        <Message key={i} msg={msg} onFeedback={() => setFeedbackFor(i)} />
      ))}

      <form onSubmit={handleAsk}>
        <input
          placeholder="Please tell me about your query!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
        <button type="button" onClick={handleSave}>Save</button>
      </form>

      {feedbackFor !== null && (
        <FeedbackModal onClose={() => setFeedbackFor(null)} />
      )}
    </>
  );
}
