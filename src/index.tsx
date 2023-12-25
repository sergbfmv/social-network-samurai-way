import {AppStateType, store} from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css';
import {Provider} from "react-redux";
import {Store} from "redux";


ReactDOM.render(
    // <HashRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
        <Provider store={store as Store<AppStateType>}>
            <App/>
        </Provider>
    </BrowserRouter>,
    // </HashRouter>,
    document.getElementById('root')
);



