import { legacy_createStore as createStore, applyMiddleware } from "redux"

// 异步支持 redux-thunk
import thunk from "redux-thunk"

import allReducers from "./reducers"

export default createStore(allReducers, applyMiddleware(thunk))
