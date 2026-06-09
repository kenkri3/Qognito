import ReactDOM from 'react-dom/client'

const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(
  <div style={{ padding: 50, fontSize: 30, color: 'black', background: 'white' }}>
    <h1>Qognito fungerer!</h1>
    <p>Hvis du ser denne teksten, fungerer React.</p>
  </div>,
)
