// import { useState } from "react";

// export default function History() {
//   const data = JSON.parse(localStorage.getItem("conversations")) || [];
// const [filter, setFilter] = useState("all");
//   return (
//     <>
//       <h2>Conversation History</h2>

//       <select onChange={(e) => setFilter(e.target.value)}>
//         <option value="all">All Ratings</option>
//         <option value="5">5 Star</option>
//         <option value="1">1 Star</option>
//       </select>

//       {data.map((msg, i) => (
//         <p key={i}>{msg.text}</p>
//       ))}
//     </>
//   );
// }


import { useState } from "react";

export default function History() {
  const data = JSON.parse(localStorage.getItem("conversations")) || [];
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? data
      : data.filter((msg) => String(msg.rating) === filter);

  return (
    <>
      <h2>Conversation History</h2>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Ratings</option>
        <option value="5">5 Star</option>
        <option value="1">1 Star</option>
      </select>

      {filteredData.map((msg, i) => (
        <p key={i}>{msg.text}</p>
      ))}
    </>
  );
}
