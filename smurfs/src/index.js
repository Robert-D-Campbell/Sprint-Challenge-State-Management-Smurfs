import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "reac-redux";
import thunk from "redux-thunk";

import "./index.css";

import { rootReducer } from "./reducers/rootReducer";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
