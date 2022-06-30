import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"
import "./App.less"
import "@/assets/css/reset.css"
import "@/assets/css/global.less"
function App() {
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
