import logo from "./logo.svg";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
