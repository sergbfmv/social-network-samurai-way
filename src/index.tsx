import {AppStateType, store} from "./redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css';
import {Provider} from "react-redux";
import {Store} from "redux";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store as Store<AppStateType>}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



