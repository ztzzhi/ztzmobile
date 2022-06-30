import React from "react"
import ReactDOM from "react-dom/client"
import "./index.less"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import store from "./store"
import { Provider } from "react-redux"
import "./plugins/i18n"
import ProviderLanguage from "@/components/ProviderLanguage"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderLanguage>
        <App />
      </ProviderLanguage>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
