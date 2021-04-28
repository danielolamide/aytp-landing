import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Landing from "./views/Landing";
import Blog from "./views/Blog";

ReactDOM.render(
	<BrowserRouter>
  		<Switch>
			<Route path="/" exact component={Landing} />
			<Route path="/blog" exact component={Blog} />
			<Redirect from="*" to="/" />
  		</Switch>
	</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
