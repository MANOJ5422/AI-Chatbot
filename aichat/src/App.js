// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import History from "./pages/History";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <h1>Customer Support AI</h1>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/history" element={<History />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>

      {/* ✅ Required Header */}
      <header>
        <h1>Customer Support AI</h1>

        {/* ✅ Required navigation links */}
        <nav>
          <Link to="/">New Query?</Link>
          <Link to="/history">Past Conversations</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
