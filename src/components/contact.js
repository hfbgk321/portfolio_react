import React from 'react';
import './contact.css'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Duck from '../static/duck.png';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state =({
      width:window.innerWidth,
      height:window.innerHeight
    })
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

  // componentWillUnmount(){
  //   window.removeEventListener('resize'.this.updateDimensions);
  // }

  render(){
    let content;
    if(this.state.width>=320){
      content =(
        <div className ="contact_container">
          <div className ="contact_header">
            <div className ="contact_content">
            <h3>I'm always open to talk</h3>
            <div className ="contact_para">
            <p>Feel Free To contact Me Anytime!</p>
            </div>
          
            </div>
          </div>
          <div className ="quote">
          <Typography classes ={{root:"quote"}} color="textSecondary" gutterBottom>
          "Opportunities don't happen, you create them" - Chris Grosser
        </Typography>
          </div>
          <div className="contact_info"> 
          <OutlinedCard/>
          <img className ="ducky_pic" src ={Duck} alt="Duck"/>
          
          </div>
          
        </div>
      )
    }
    if(this.state.width>=1024){
      content =(
        <div>
        <div id ="universe"></div>
        <div className ="test_contact">
          <h1 className ="stranger_text">Dont Be a Stranger! Lets Network!</h1>
          <OutlinedCard1024/>
        </div>
        <div className="duck">
          <img id ="ducky" onClick={this.duck} src={Duck} alt=""/>
          </div>
          <div id = "pond"></div>
      </div>
      )
    }
    return(
      <div>
        {content}
      </div>
      
    )
  }
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStylesButton = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function OutlinedCard() {
  const classes = useStyles();
  const classesButton = useStylesButton();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Typography classes ={{root: "connect_header"}}>Connect with me on :</Typography>
        <div id ="contact_buttons">
        <Button
        variant="contained"
        color="secondary"
        className={classesButton.button}
        endIcon={<LinkedInIcon />}
        href ="https://www.linkedin.com/in/jacky-chen-084a6b16b/"
      >
        Linkedin
      </Button> 
      <Button
        variant="contained"
        color="secondary"
        className={classesButton.button}
        endIcon={<EmailIcon />}
        href ="mailto:jacky.chen.6@stonybrook.edu"
      >
        Email
      </Button> 
      <Button
        variant="contained"
        color="secondary"
        className={classesButton.button}
        endIcon={<GitHubIcon />}
        href ="https://github.com/hfbgk321"
      >
        Github
      </Button> 
      <Button
        variant="contained"
        color="secondary"
        className={classesButton.button}
        endIcon={<PhoneIcon />}
      >
        Phone Number: On Request
      </Button> 
        </div>
        <Card classes ={{root:"ducky"}}>
          <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography>
        D{bull}e{bull}k{bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Noun
        </Typography>
        <Typography variant="body2" component="p">
          Most Vicious Of Predators
          <br />
          {'"Bird Of Prey"'}
        </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

//1024


const useStyles1024 = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStylesButton1024 = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function OutlinedCard1024() {
  const classes = useStyles1024();
  const classesButton = useStylesButton1024();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>

        <Typography className={classes.title} classes ={{root:"quote"}} color="textSecondary" gutterBottom>
          "Opportunities don't happen, you create them" - Chris Grosser
        </Typography>
        <Typography classes ={{root: "connect_header"}}>Connect with me on :</Typography>
        <div id ="contact_buttons">
        <Button
        variant="contained"
        color="secondary"
        className={classesButton.button}
        endIcon={<LinkedInIcon />}
        href ="https://www.linkedin.com/in/jacky-chen-084a6b16b/"
      >
        Linkedin
      </Button> 
      <Button
       variant="contained"
       color="secondary"
       className={classesButton.button}
       endIcon={<EmailIcon />}
       href ="mailto:jacky.chen.6@stonybrook.edu"
      >
        Email
      </Button> 
      <Button
         variant="contained"
         color="secondary"
         className={classesButton.button}
         endIcon={<GitHubIcon />}
         href ="https://github.com/hfbgk321"
      >
        Github
      </Button> 
      <Button
        variant="contained"
        color="secondary"
        className={classesButton.button}
        endIcon={<DeleteIcon />}
      >
        Phone Number: On Request
      </Button> 
        </div>
        <Card classes ={{root:"ducky"}}>
          <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography>
        D{bull}e{bull}k{bull}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Noun
        </Typography>
        <Typography variant="body2" component="p">
          Most Vicious Of Predators
          <br />
          {'"Bird Of Prey"'}
        </Typography>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
