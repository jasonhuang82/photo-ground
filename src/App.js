import React, { Component,Fragment } from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "~/styles/global.scss";
import Persons from '~/containers/Persons';
import PhotoList from '~/containers/PhotoList';


class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">

          
        </div>
      </Router>
    );
  }
}

export default App;

/*

<ul>
  <li>
    <Link to="/">HOME</Link>
  </li>
  <li>
    <Link to="/photo-list">photo-list</Link>
  </li>
</ul>
<Switch>
  <Route path="/" render={(props) => <Persons {...props}/>} />
  <Route path="/photo-list" render={(props) => <PhotoList {...props} />} />
</Switch>
*/