import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Channel from "./pages/Channel";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/logout" element={<Logout />} />

          <Route path="/" element={<Home />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
