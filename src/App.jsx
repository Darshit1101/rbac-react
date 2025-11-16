import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const AdminDashboard = lazy(() => import('./pages/admin/dashboard'));
const UserDashboard = lazy(() => import('./pages/user/dashboard'));
const Nopage = lazy(() => import('./pages/nopage/nopage'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
