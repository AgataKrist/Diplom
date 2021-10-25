import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./core/store";
import { PublicService } from "./services/PublicService";

PublicService.setCredentials({
	URL: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api",
});
PublicService.prefix = "";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
