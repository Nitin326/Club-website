import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route} from 'react-router-dom';
import Nav from './comp/Navbars';
import Home from './comp/Home';
import About from './comp/About';
import Project from './comp/Projects';
import Member from './comp/Members';
import Login from './comp/Login';
import Register from './comp/Register';
import Errorpage from './comp/Errorpage';

function App() {
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Project} />
        <Route exact path='/Members' component={Member} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={Errorpage}></Route>
      </Switch>
    </>
  );
}

export default App;
