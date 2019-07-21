import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./component/todos-list.component";


class App extends Component {

  render() {
    return(
      <Router>
        <div className="container">
          <h2>MERN TODO</h2>
        </div>

        <Route path='/' exact component={TodosList} />
        
        
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
