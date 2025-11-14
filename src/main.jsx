import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './context/Auth';

createRoot(document.getElementById('root')).render(
  <>
    <Auth>
      <App />
    </Auth>
  </>,
)
