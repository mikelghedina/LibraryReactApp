
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, {Component} from "react";
import BookList from "./Components/BookList";
import AuthorList from "./Components/AuthorList";


class App extends Component{
  render() {
    return (
        <div>
          <Router>
              <div className="App">
                      <li>
                          <Link to="/books">Books</Link>
                      </li>
                      <li>
                          <Link to="/authors">Authors</Link>
                      </li>
                  <Switch>
                      <Route exact path='/books'><BookList/></Route>
                      <Route exact path='/authors'><AuthorList/></Route>
                  </Switch>
              </div>
          </Router>

        </div>

    )
  }
}

export default App;
