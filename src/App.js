import './App.css';
import Essay from "./components/essay";
import EssayChat from "./components/essay-chat";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Essay />}/>
          <Route path="/chat" element={<EssayChat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
