import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/dashboard';
import UserDashboard from './pages/user/dashboard';
import Nopage from './pages/nopage/nopage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
