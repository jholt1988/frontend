import { React, ReactDOM } from "react"; 
import { Provider } from "react-redux";
import {store} from "./store"
import App from './app';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)