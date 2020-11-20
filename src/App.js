import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component} from "react";
import BookList from "./Components/BookList";
import AuthorList from "./Components/AuthorList";
import NavBar from "./Components/NavBar";


class App extends Component{
  render() {
    return (
        <div>
            <NavBar/>
          <Router>
              <div className="App">
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
