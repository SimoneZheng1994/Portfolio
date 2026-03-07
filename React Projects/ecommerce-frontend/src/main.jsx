import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// This enables client-side routing, allowing navigation between pages without full page refresh
import { BrowserRouter } from 'react-router-dom'

// Find the HTML element with id="root" in the index.html file and create a React root there
// Then render your application inside that root
createRoot(document.getElementById('root')).render(
  // StrictMode wraps the app to enable development checks (doesn't affect production build)
  <StrictMode>
    {/* BrowserRouter wraps the app to provide routing functionality */}
    {/* It uses the HTML5 history API to keep UI in sync with the URL */}
    <BrowserRouter>
      {/* The main App component - this is where your actual application code starts */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)