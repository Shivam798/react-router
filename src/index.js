import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
// import Home from "./components/Home"

ReactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    ,
    document.getElementById("root")
);

//run ker
