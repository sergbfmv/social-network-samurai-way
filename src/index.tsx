import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import './index.css';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)