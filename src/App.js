import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component} from "react";
import BookList from "./Contents/BookList";
import AuthorList from "./Contents/AuthorList";
import NavBar from "./Components/NavBar";
import Home from "./Contents/Home";
import QuoteList from "./Contents/QuoteList";
import RegistryList from "./Contents/RegistryList";
import UserList from "./Contents/UserList";


class App extends Component{
  render() {
    return(
        <div>
            <NavBar/>
          <Router>
              <div className="App">
                  <Switch>
                      <Route exact path='/'><Home/></Route>
                      <Route exact path='/books'><BookList/></Route>
                      <Route exact path='/authors'><AuthorList/></Route>
                      <Route exact path='/users'><QuoteList/></Route>
                      <Route exact path='/quotes'><RegistryList/></Route>
                      <Route exact path='/registries'><UserList/></Route>
                  </Switch>
              </div>
          </Router>
        </div>
    )
  }
}

export default App;
