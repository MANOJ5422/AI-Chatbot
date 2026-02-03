
// import { useState } from "react";
// import replies from "../data/replies.json";
// import Message from "./Message";
// import FeedbackModal from "./FeedbackModal";

// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [feedbackFor, setFeedbackFor] = useState(null);

//   const handleAsk = (e) => {
//     e.preventDefault();

//     const userMsg = { sender: "user", text: input };

//     const key = input.toLowerCase().trim();

//     const foundReply = replies.find(
//       (item) => item.question.toLowerCase().trim() === key
//     );

//     const botText = foundReply
//       ? foundReply.answer
//       : "Sorry, Did not understand your query!";

//     const botMsg = { sender: "bot", text: botText };

//     setMessages([...messages, userMsg, botMsg]);
//     setInput("");
//   };

//   const handleSave = () => {
//     localStorage.setItem("conversations", JSON.stringify(messages));
//   };

//   return (
//     <>
//       {/* New Query Button */}
//       <button onClick={() => setMessages([])}>
//         New Query?
//       </button>

//       {messages.map((msg, i) => (
//         <Message key={i} msg={msg} onFeedback={() => setFeedbackFor(i)} />
//       ))}

//       <form onSubmit={handleAsk}>
//         <input
//           placeholder="Please tell me about your query!"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />

//         <button type="submit">Ask</button>

//         <button type="button" onClick={handleSave}>
//           Save
//         </button>
//       </form>

//       {feedbackFor !== null && (
//         <FeedbackModal onClose={() => setFeedbackFor(null)} />
//       )}
//     </>
//   );
// }



import { useState } from "react";
import replies from "../data/replies.json";
import Message from "./Message";
import FeedbackModal from "./FeedbackModal";

export default function Chat() {

  // ✅ Default greeting (Required by test)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" }
  ]);

  const [input, setInput] = useState("");
  const [feedbackFor, setFeedbackFor] = useState(null);

  const handleAsk = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    // ✅ Case insensitive match
    const foundReply = replies.find(
      (item) =>
        item.question.toLowerCase().trim() ===
        input.toLowerCase().trim()
    );

    const botMsg = {
      sender: "bot",
      text: foundReply
        ? foundReply.answer
        : "Sorry, Did not understand your query!"
    };

    // ✅ Safe state update
    setMessages((prev) => [...prev, userMsg, botMsg]);

    setInput("");
  };

  const handleSave = () => {
    localStorage.setItem("conversations", JSON.stringify(messages));
  };

  return (
    <>
      {/* ✅ Required New Query button */}
      <button
        onClick={() =>
          setMessages([
            { sender: "bot", text: "Hello! How can I assist you today?" }
          ])
        }
      >
        New Query?
      </button>

      {messages.map((msg, i) => (
        <Message
          key={i}
          msg={msg}
          onFeedback={() => setFeedbackFor(i)}
        />
      ))}

      <form onSubmit={handleAsk}>
        <input
          placeholder="Please tell me about your query!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Ask</button>

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>

      {feedbackFor !== null && (
        <FeedbackModal onClose={() => setFeedbackFor(null)} />
      )}
    </>
  );
}
