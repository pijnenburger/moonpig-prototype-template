import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LaunchpadShell } from './components/LaunchpadShell.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LaunchpadShell>
      <App />
    </LaunchpadShell>
  </StrictMode>,
)
