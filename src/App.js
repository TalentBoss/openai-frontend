import './App.css';
import Essay from "./components/essay";
import EssayChat from "./components/essay-chat";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Charts from "./components/charts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Essay />}/>
          <Route path="/chat" element={<EssayChat />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
