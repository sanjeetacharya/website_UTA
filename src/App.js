import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Resources from './components/pages/Resources';
import Login from './components/pages/SignUp';
import Blog from './components/pages/Blog';
// import Login from './components/login';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Events' component={Events} />
          <Route path='/Resources' component={Resources} />
          <Route path='/Login' component={Login} />
          <Route path='/Blog' component={Blog}/>
          <Route path='/SignUp' component={Login}/>
          {/* <Route path='/login' component = {Login} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
