import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { createStore } from "redux";

const middlewares = [composeWithDevTools()];

const store = createStore(rootReducer, ...middlewares);

export default store;
