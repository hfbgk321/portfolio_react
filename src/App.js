import React from 'react';
import './App.css';


import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import WorkIcon from '@material-ui/icons/Work';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects';


import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import pic from './jacky_profile.jpg';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state =({width:window.innerWidth,height:window.innerHeight})
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions(){
    this.setState({
      width:window.innerWidth,
      height:window.innerHeight,
    })
  }

  componentDidMount(){
    window.addEventListener('resize',this.updateDimensions)
  }

  componentWillUnmount(){
    window.removeEventListener('resize'.this.updateDimensions);
  }
  render(){
    let content;
    if(this.state.width>=320){
      content =(
        <div>
          <SimpleBottomNavigation/>
        </div>
      )
    }
    if(this.state.width>=1024){
      content =(
        <div>
          <div className="sidenav">
           <div className="intro_bar">
             <Link to ="/"><Avatar alt="Jacky Chen" variant = "rounded" src={pic} classes ={{rounded:"sizing"}} /></Link>
             <h1 className ="name">JACKY CHEN</h1>
             <div className ="content_box">
             <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
             </div>
           </div>
          <div className ="nav_tabs">
            <Link to ="/my_passions"><Button color="primary" fullWidth={true} size ="large">My Passions</Button></Link>
            <Link to ="/my_projects"><Button color="primary" fullWidth={true} size ="large">Projects</Button></Link>
            <Link to = "/contact_me"><Button color="primary" fullWidth={true} size ="large">Contact Me</Button></Link>
          </div>
          <div>
            <footer>
              <div>
              <IconButton color="secondary" aria-label="add to shopping cart"> <a href ="mailto:jacky.chen.6@stonybrook.edu"><EmailIcon/></a></IconButton>
              <IconButton color="secondary" aria-label="add to shopping cart"><a href ="https://www.linkedin.com/in/jacky-chen-084a6b16b/"><LinkedInIcon/></a></IconButton>
              <IconButton color="secondary" aria-label="add to shopping cart"><a href ="https://github.com/hfbgk321"><GitHubIcon/></a></IconButton>
                
                
              </div>
              <div className ="copyright">
              Copyright © 2020 Jacky Chen
              </div>
            </footer>
          </div>
         </div>
        </div>
      )
    }
    return(
      <Router>
      <div>
        {content}
      </div>

      <Switch>
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
      </Switch>


      </Router>
      
    )
  }
}



const useStyles = makeStyles({
  root: {
    width: 350,
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      classes = {{root:"main_nav"}}
    >
      <BottomNavigationAction label="Experience" icon={<Link to ="/home"><WorkIcon /></Link>} />
      <BottomNavigationAction label="Projects" icon={<Link to ="/projects"><AccountTreeIcon /></Link>} />
      <BottomNavigationAction label="Contact" icon={<Link to ="/contact"><PermContactCalendarIcon /></Link>} />
      <BottomNavigationAction label="Top" icon={<a href ="#"><ArrowUpwardIcon /></a>} />
    </BottomNavigation>
  );
}
