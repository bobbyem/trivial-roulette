import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/globals.css";
import Start from "./pages/start";
import Players from "./pages/players";
import Game from "./pages/game";
import Question from "./pages/question";
import Answer from "./pages/answer";
import WinnerModal from "./components/WinnerModal";

function App() {
  return (
    <div className="page app">
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/players" element={<Players />} />
          <Route path="/game" element={<Game />} />
          <Route path="/question" element={<Question />} />
          <Route path="/answer" element={<Answer />} />
        </Routes>
      </Router>
      <WinnerModal />
    </div>
  );
}

export default App;
