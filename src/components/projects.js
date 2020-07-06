import React from 'react';
import './projects.css';

import Avatar from '@material-ui/core/Avatar';
import Profile from '../jacky_profile.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import transplant from '../static/transplant.jpg';
import grocery from '../static/grocery.jpg';
import bank from '../static/bank.jpg';
import clique from '../static/clique.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

export default class Projects extends React.Component{
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
        <div>
        <div className ="project-header">
          <Avatar alt="Jacky Chen" src={Profile} classes ={{root:"jacky"}} />
          <div className="project-instructions">
          <h5>Here are some projects that I have completed throughout my journey.
             There will definitely be more to come in the future. Click "Learn More" to link to the project</h5>
          </div>
        </div>
        <div className ="project_cards">
        <CliqueIO/>
        <TransplantDriver/>
        <HashGrocery/>
        <BankLedger/>
      </div>
        </div>
        
      )
    }
    if(this.state.width>=1024){
      content =(
        <div>
           <div className = "scroll_projects">
        <div id ="universe"></div>
      <h1 className="test_projects">I've experimented with things along the way...</h1>
      <h2 className="test_projects">More to come in the future...STAY TUNED.</h2>
      <div className = "projects">
      <CliqueIO1024/>
      <TransplantDriver1024/>
      <HashGrocery1024/>
      <BankLedger1024/>
      </div>
      </div>
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
    maxWidth: 345,
    height:500,
    marginBottom: 20
  },
  media: {
    height: 180,
  },
});

function CliqueIO() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={clique}
          title="Clique IO"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CliqueIO
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A platform to promote entrepreneurship and collaboration amongst college students. 
          It provides an efficient and fast way to quickly get their idea out there. 
          Creates a way for them to quickly recruit their peers to make their idea come to life. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className = "skills_clique">
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="JavaScript"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />

      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Django"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="HTML"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="CSS"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Postgresql"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="python"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      
      </div>
      <CardActions classes ={{root:"clique"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/CLIQUE.IO">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function TransplantDriver() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={transplant}
          title="Organ Transplant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Transplant Driver
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A system to match organ donors with potential transplant recipients, through the utilization of the graph data structure. Matches donors and recipients based on blood type, organ type, and age. Allowd users to add or remove both donors and patients from their respective lists. Contains Sorting capabilities to distinguish donors and recipients.
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className ="skills_transplant">
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Java"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="JSON parser"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      </div>
      <CardActions classes ={{root:"organ"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/Transplant-Driver">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function HashGrocery() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={grocery}
          title="Grocery Store"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hashed Groceries
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A program to simulate the processing of sales and inventory by grocery stores. UtilizeS hash tables to store data about sales and orders parsed from a JSON text file. AllowS users to load and remove objects with ease. Alerts users of the compatibility of their sales based on the amount of items currently in their inventory.
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className ="skills_grocery">
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Java"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      </div>
      <CardActions classes ={{root:"grocery"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/HashGroceries">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function BankLedger() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bank}
          title="Bank Ledger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bank Ledger
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A simulation of a bank ledger.
          Allowed users to record and track the purchases and expenditures. Contains menu that allows users to choose from an wide array of functionality like filtering each purchase by date, backing up and reverting back to the previous ledger, and printing the overall financial information of an individual among other things.
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className ="skills_bank">
      <Chip
        size="small"
        icon={<FaceIcon />}
        label="Java"
        clickable
        color="primary"
        classes ={{root:"clique"}}
      />
      </div>
      <CardActions classes ={{root:"bank"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/bankLeger">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}



//1024

const useStyles1024 = makeStyles({
  root: {
    maxWidth: 345,
    height:500
  },
  media: {
    height: 180,
  },
});

function CliqueIO1024() {
  const classes = useStyles1024();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={clique}
          title="Clique IO"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CliqueIO
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A platform to promote entrepreneurship and collaboration amongst college students. 
          It provides an efficient and fast way to quickly get their idea out there. 
          Creates a way for them to quickly recruit their peers to make their idea come to life. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes ={{root:"clique"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/CLIQUE.IO">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function TransplantDriver1024() {
  const classes = useStyles1024();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={transplant}
          title="Organ Transplant"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Transplant Driver
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A system to match organ donors with potential transplant recipients, through the utilization of the graph data structure. Matches donors and recipients based on blood type, organ type, and age. Allowd users to add or remove both donors and patients from their respective lists. Contains Sorting capabilities to distinguish donors and recipients.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes ={{root:"organ"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/Transplant-Driver">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function HashGrocery1024() {
  const classes = useStyles1024();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={grocery}
          title="Grocery Store"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hashed Groceries
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A program to simulate the processing of sales and inventory by grocery stores. UtilizeS hash tables to store data about sales and orders parsed from a JSON text file. AllowS users to load and remove objects with ease. Alerts users of the compatibility of their sales based on the amount of items currently in their inventory.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes ={{root:"grocery"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/HashGroceries">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function BankLedger1024() {
  const classes = useStyles1024();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={bank}
          title="Bank Ledger"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bank Ledger
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A simulation of a bank ledger.
          Allowed users to record and track the purchases and expenditures. Contains menu that allows users to choose from an wide array of functionality like filtering each purchase by date, backing up and reverting back to the previous ledger, and printing the overall financial information of an individual among other things.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes ={{root:"bank"}}>
        <Button size="medium" color="primary" href ="https://github.com/hfbgk321/bankLeger">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}