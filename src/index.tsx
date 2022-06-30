import React from "react"
import ReactDOM from "react-dom/client"
import "./index.less"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./store"
import { Provider } from "react-redux"
import "./plugins/i18n"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
