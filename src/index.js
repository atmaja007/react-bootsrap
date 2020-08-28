import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';
import About from './pages/About';

const RootApp = () =>(
  <BrowserRouter>
      <Switch>
         <Route exact path="/" component={App}/>
         <Route path="/home" component={Home}/>
         <Route path="/About" component={About}/>
      </Switch>
  </BrowserRouter>
)

// ReactDOM.render(<Hello username={"Mustajib"} />, document.getElementById('root'));
ReactDOM.render(<RootApp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
