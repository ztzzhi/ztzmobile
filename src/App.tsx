import React from "react"
import { BrowserRouter, HashRouter } from "react-router-dom"
import AppRouter from "./router"
import "./App.less"
import "@/assets/css/reset.css"
import "@/assets/css/global.less"
import { CSSTransition, TransitionGroup } from "react-transition-group"

function App() {
  return (
    <div className="mainContainer">
      <HashRouter>
        <TransitionGroup>
          <CSSTransition classNames={"myfade"} appear={true} timeout={1000}>
            <AppRouter></AppRouter>
          </CSSTransition>
        </TransitionGroup>
      </HashRouter>
    </div>
  )
}

export default App
