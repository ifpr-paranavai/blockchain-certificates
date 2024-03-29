import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TransactionProvider } from "./context/TranContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider value={{value: 'TESTE'}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>
)
