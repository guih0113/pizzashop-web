import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { enableMSW } from './api/mocks'
import App from './app.tsx'

enableMSW().then(() => {
  // biome-ignore lint/style/noNonNullAssertion: <>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
})
