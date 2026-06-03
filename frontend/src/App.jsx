import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
