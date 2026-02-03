// export default function Message({ msg, onFeedback }) {
//     return (
//       <div className={`message ${msg.sender}`}>
//         <p>{msg.text}</p>
  
//         {msg.sender === "bot" && (
//           <div className="thumbs">
//             <button onClick={onFeedback}>👍</button>
//             <button onClick={onFeedback}>👎</button>
//           </div>
//         )}
//       </div>
//     );
//   }
  
export default function Message({ msg, onFeedback }) {
  return (
    <div>
      <p>{msg.text}</p>

      {msg.sender === "bot" && (
        <button onClick={onFeedback}>Feedback</button>
      )}
    </div>
  );
}
