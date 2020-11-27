import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component} from "react";
import BookList from "./Contents/Book/BookList";
import AuthorList from "./Contents/Author/AuthorList";
import NavBar from "./Components/NavBar";
import Home from "./Contents/Home";
import QuoteList from "./Contents/Quote/QuoteList";
import RegistryList from "./Contents/Registry/RegistryList";
import UserList from "./Contents/User/UserList";


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
                      <Route exact path='/quotes'><QuoteList/></Route>
                      <Route exact path='/registries'><RegistryList/></Route>
                      <Route exact path='/users'><UserList/></Route>
                  </Switch>
              </div>
          </Router>
        </div>
    )
  }
}

export default App;
