// import Chat from "../components/Chat";

// export default function Home() {
//   return <Chat />;
// }

// import { useState } from "react";
// import data from "../data/replies.json";

// export default function Home() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");

//   const handleSubmit = () => {
//     const found = data.find(
//       (item) =>
//         item.question.toLowerCase().trim() ===
//         question.toLowerCase().trim()
//     );

//     if (found) {
//       setAnswer(found.answer);

//       const history =
//         JSON.parse(localStorage.getItem("conversations")) || [];

//       history.push({ text: found.answer });

//       localStorage.setItem("conversations", JSON.stringify(history));
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={question}
//         onChange={(e) => setQuestion(e.target.value)}
//         placeholder="Ask your question"
//       />

//       <button onClick={handleSubmit}>Ask</button>

//       {/* IMPORTANT: Cypress looks for text inside <p> */}
//       {answer && <p>{answer}</p>}
//     </div>
//   );
// }



import { useState } from "react";
import data from "../data/replies.json";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    const found = data.find(
      (item) =>
        item.question.toLowerCase().trim() ===
        question.toLowerCase().trim()
    );

    if (found) {
      setAnswer(found.answer);

      const history =
        JSON.parse(localStorage.getItem("conversations")) || [];

      history.push({ text: found.answer });

      localStorage.setItem("conversations", JSON.stringify(history));
    }
  };

  return (
    <>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleSubmit}>Ask</button>

      {answer && <p>{answer}</p>}
    </>
  );
}
