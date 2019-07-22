import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./component/todos-list.component";
import EditList from "./component/edit-list.component";
import CreateList from "./component/create-list.component"


class App extends Component {

  render() {
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand" target="_blank">
              <img src={logo} width="30" height="30" />
            </a>
            <Link to="/" className="navbar-brand">MERN todo</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo List</Link>
                </li>
              </ul> 
            </div>
          </nav>
          <br />
          <Route path='/' exact component={TodosList} />
          <Route path='/create/:id' component={EditList} />
          <Route path='/create' component={CreateList} />
        </div>
        
      </Router>
    );
  }
}


export default App;
