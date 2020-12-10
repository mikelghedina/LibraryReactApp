import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, {Component} from "react";
import BookList from "./Components/Book/BookList";
import AuthorList from "./Components/Author/AuthorList";
import NavBar from "./Utils/NavBar";
import Home from "./Components/Home";
import QuoteList from "./Components/Quote/QuoteList";
import RegistryList from "./Components/Registry/RegistryList";
import UserList from "./Components/User/UserList";

//Routing all the components with the navBar.
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
