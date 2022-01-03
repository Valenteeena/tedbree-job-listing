import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
