import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ padding: 50, fontSize: 30, color: 'black' }}>
      <h1>Qognito fungerer!</h1>
      <p>Hvis du ser denne teksten, fungerer React.</p>
    </div>
  </StrictMode>,
)
