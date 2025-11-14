import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
