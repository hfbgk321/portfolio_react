import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';
ReactDOM.render(
  <Router basename ={process.env.PUBLIC_URL}>
    <App />
    <Route exact path ="/">
          <Home/>
        </Route>
      <Route exact path ="/home">
        <Home/>
      </Route>

      <Route exact path ="/projects">
        <Projects/>
      </Route>

      <Route exact path ="/contact">
        <Contact/>
      </Route>


      <Route exact path ="/my_passions">
        <Home/>
      </Route>

      <Route exact path ="/my_projects">
        <Projects/>
      </Route>

      <Route exact path ="/contact_me">
        <Contact/>
      </Route>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA