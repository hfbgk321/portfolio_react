import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Profile from '../jacky_profile.jpg';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';

import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import AdbRoundedIcon from '@material-ui/icons/AdbRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom';
//1024
const useStyles1024 = makeStyles({
  root: {
    minWidth: 275,
    textAlign:'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard1() {
  const classes = useStyles1024();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} classes ={{root:'card_position'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Software Engineering
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <div className = "skills">
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Java"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Python"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Javascript"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="HTML"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="CSS"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Django"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="React.js"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="ExpressJS"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="NodeJS"
        clickable
        color="primary"
      />
      </div>
      
      <CardActions classes ={{root:"engineering"}}>
        <TransitionsModalSWE/>
      </CardActions>
    </Card>
  );
}

function SimpleCard2() {
  const classes = useStyles1024();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} classes ={{root:'card_position'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Team Development
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <div className ="skills" id = "development">
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Communication"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Collaboration"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Decision Making"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Leadership"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Inclusivity"
        clickable
        color="primary"
      />
       <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Agile Development"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Structure and Clarity"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Networking"
        clickable
        color="primary"
      />
      </div>
      
      <CardActions classes ={{root:'continue'}}>
        <Link to ='/contact_me'><Button size="small">I'd love to work with you. Contact Me</Button></Link>
      </CardActions>
    </Card>
  );
}
function SimpleCard3() {
  const classes = useStyles1024();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} classes ={{root:'card_position'}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Health and Wellness
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <div className="skills" id ="wellness">
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Mindfulness"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Fitness"
        clickable
        color="primary"
      />
       <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Personal Development"
        clickable
        color="primary"
      />
       
       <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Basketball"
        clickable
        color="primary"
      />
       <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Meditation"
        clickable
        color="primary"
      />
      <Chip
        size="medium"
        icon={<FaceIcon />}
        label="Cooking"
        clickable
        color="primary"
      />
      </div>
      
      <CardActions classes ={{root:'continue',root:'health'}}>
      <TransitionsModalHealth/>
      </CardActions>
    </Card>
  );
}
//1024

export default class Home extends React.Component{
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
        <div className ="intro-card">
          <Avatar alt="Jacky Chen" src={Profile} classes ={{root:"jacky"}} />
          <div className ="footer">
            <div className ="greeting">
            <h3>WELCOME !!!</h3>
            <h4 className ="site">TO MY SITE</h4>
            </div>
          <h5 className="copyright_text">Copyright © 2020 Jacky Chen</h5>
          </div>
          
          <SimpleCard/>
          <div className ="apology_for_essay">
            <div className="apology_content">
            <h3>Sorry for that essay...</h3>
            <div className ="apology_para">
            <p>Now that I got it out of the way, here are some of my experiences</p>
            </div>
            </div>
          </div>
          <div className ="timeline_body">
            <CustomizedTimeline/>
          </div>
          <div className ="skills_container">
            <h3 className="skills_intro">I've picked up some skills throughout my experiences and projects </h3>
          </div>

          <div className ="table_container">
          <SimpleTable/>
          <div className ="behavioral_container">
          <SimpleTable2/>
          </div>
         
          </div>
          
          
        </div>
      )
    }
    if(this.state.width>=1024){
      content =(
        <div>
        <div id ="universe"></div>
        <div className ="passion_heading_container">
        <h3 className ="test_passion">Ive split into 3 things that ...</h3>
        <div className="obession_position">
        <h3 className ="test_passion">Ive developed a <span className="obession">complete obssesion</span> for ...</h3>
        </div>
        </div>
        <div id = "passion_Cards_mobile">
        <SimpleCard1/>
        <SimpleCard2/>
        <SimpleCard3/>
        </div>
        
      </div>
      )
    }
    return(
      <div className ="home_container">
        {content}
      </div>
      
    )
  }
}



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:10,
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

function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} classes ={{root:"introduction"}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hi, Welcome to my portfolio website
        </Typography>
        <Typography variant="body2" component="p">
          My name is Jacky Chen. I am currently
          a sophmore at Stony Brook University, pursuing
          a bachelors of science in computer science. My interst in computer science
          started my junior year at Brooklyn Technical High School. I was lucky enough to have
          the opportunity to be enrolled in the Ap Computer Science course at my school. 
          It wasnt a month in when i realized that this was something I was extremely interested in.
          <br/>
          <br/>
          In the class, we had numerous projects that were assigned to us. One particular project involved creating something that allows a person to edit photos by altering the pixels and appling crazy styles to it. I was drawn in by the inovation and creativity that programing could bring out in a person. The ability to create something that could potentially be used by everyone really stuck with me. And the best thing? You dont need much to start; Just your drive to learning and your enthusiansm.
          <br/>
          <br/>
          After completing my first year at stony brook university, i knew this was the right path for me. My interests now span a wide range of fields within computer science, from data science and web development, to product management. While I am not sure which one is my favorite, as they all have their appeal, i know one thing's for sure. My drive for learning will never stop as there are limitless possibilities when it comes to this profession. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}




const useStylesExperience = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function CustomizedTimeline() {
  const classes = useStylesExperience();

  return (
    <Timeline align="left" >
      <TimelineItem classes ={{root:"sbu"}}>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"sbu"}}>
            <SchoolRoundedIcon />
          </TimelineDot>
          <TimelineConnector classes ={{root:"sbu"}}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes={{root:'education'}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              Stony Brook University
            </Typography>
            <Typography classes ={{root:"position"}}>Bachelors of Science in Computer Science August 2019 - Now (May 2023)</Typography>
            <div className ="rev_classes">
            <Typography>Relevant Course Work</Typography>
            <Typography>
              <ul>
                <li>Introduction to OOP: Java</li>
                <li>Introduction to Digital Intelligence</li>
                <li>Applied Mathematics and Statistics: Applied Calculus 2</li>
                <li>Data Structures and Algorithmns</li>
                <li>Foundations of Computer Science</li>
              </ul>
            </Typography>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem classes ={{root:"optum"}}>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"optum"}}>
            <LocalHospitalRoundedIcon />
          </TimelineDot>
          <TimelineConnector classes ={{root:"optum"}}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes ={{root:"optum_paper"}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              UnitedHealthGroup: Optum (June 2020 - Now)
            </Typography>
            <Typography classes ={{root:"position"}}>Software Engineering Intern</Typography>
            <Typography classes = {{root:"tasks"}}>
              <ul>
                <li>Lead a group of 8 interns to devize a product to 
                  combat the growing deaths of pregnant women in the United States.
                  Focused on the minority population.
                </li>
                <li className ="second_task">
                  Utilized both frontend and backend technologies like 
                  ReactJs, NodeJs, ExpressJS, and React Native to create 
                  both a web and app platform to provide minority populations
                  with easier access to health services.
                </li>
                <li>
                  Utilized internal apis and databases to render informational 
                  and confidential information on our platforms.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem classes ={{root:"db"}}>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"db"}}>
            <AdbRoundedIcon />
          </TimelineDot>
          <TimelineConnector classes ={{root:"db"}} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes ={{root:"db_paper"}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              DB Grant Associates INC.
            </Typography>
            <Typography classes ={{root:"position"}}>IT Intern - Mark Schnidman, Tech Lead (March 2018 - September 2018)</Typography>
            <Typography classes = {{root:"tasks"}}>
              <ul>
                <li>Led 6 other interns in finding bids on office equipment 
                  like computers, laptops, firewalls, monitors, and telephones
                  for the company.
                </li>
                <li className ="second_task">
                Reorganized the old cabling of the company, making sure 
                that the the hardware and software of the entire
                Brooklyn branch is up to date and running efficiently.
                </li>
                <li>
                Assisted the office with any technical difficulties 
                that come along, such as viruses and admin access to certain
                software in the building.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem classes ={{root:"fx"}}>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"fx"}}>
            <BuildRoundedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes ={{root:"fx_paper"}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              FxCollaborative
            </Typography>
            <Typography classes ={{root:"position"}}>Engineering Intern: ACE Mentorship (Spetember 2017 - March 2018)</Typography>
            <Typography classes = {{root:"tasks"}}>
              <ul>
                <li>Collaborated with professional engineers to develop
                   schematics and floor plans involving the construction of an
                  agricultural school in Yabucoa,Puerto Rico.
                </li>
                <li className ="second_task">
                Stood in front of a panel of professional judges, some whom were structural engineers, architects, and electrical
                engineers. Responded to questions regarding the strength and integrity of the building and whether or not it
                can hold in a disastrous area like Yabucoa.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}


const useStylesTable = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Java', <SimpleRating1/>),
  createData('JavaScript', <SimpleRating2/>),
  createData('Python', <SimpleRating3/>),
  createData('Django', <SimpleRating4/>),
  createData('NodeJS', <SimpleRating5/>),
  createData('ExpressJS', <SimpleRating6/>),
  createData('PostgreSQL', <SimpleRating7/>),
  createData('MongoDB', <SimpleRating8/>),
  createData('ReactJS', <SimpleRating9/>),
];

function SimpleTable() {
  const classes = useStylesTable();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Technical Skills</TableCell>
            <TableCell align="center">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SimpleRating1() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating2() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating3() {
  const [value, setValue] = React.useState(3);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating4() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating5() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating6() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating7() {
  const [value, setValue] = React.useState(3);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating8() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating9() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}


const useStylesTable2 = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData2(name, calories) {
  return { name, calories};
}

const rows2 = [
  createData('Networking', <SimpleRating_behavior_1/>),
  createData('Communication', <SimpleRating_behavior_2/>),
  createData('Agile Development', <SimpleRating_behavior_3/>),
  createData('Leadership', <SimpleRating_behavior_4/>),
  createData('Work Ethic', <SimpleRating_behavior_5/>),
  createData('Adaptability', <SimpleRating_behavior_6/>),
  createData('Dependability', <SimpleRating_behavior_7/>),
  createData('Self-Reliance', <SimpleRating_behavior_8/>),
  createData('Eagerness To Learn', <SimpleRating_behavior_9/>),
];

function SimpleTable2() {
  const classes = useStylesTable2();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Behavioral Skills</TableCell>
            <TableCell align="center">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row2) => (
            <TableRow key={row2.name}>
              <TableCell component="th" scope="row">
                {row2.name}
              </TableCell>
              <TableCell align="center">{row2.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


function SimpleRating_behavior_1() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_2() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_3() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_4() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_5() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_6() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_7() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_8() {
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}
function SimpleRating_behavior_9() {
  const [value, setValue] = React.useState(5);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}





//1024



const useStyles2_1024 = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border:'none'
  },
}));

function TransitionsModalHealth() {
  const classes = useStyles2_1024();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type = "button" onClick ={handleOpen} size="small">Learn More about my wellness journey</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Health and Wellness Page</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function TransitionsModalSWE() {
  const classes = useStyles2_1024();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type = "button" onClick ={handleOpen} size="small">Learn More About my experiences</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className ={classes.paper} id ="experience">
          <CustomizedTimeline_1024/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


const useStyles3_1024 = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    width:'20rem'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function CustomizedTimeline_1024() {
  const classes = useStyles3_1024();

  return (
    <Timeline align="left" classes ={{root:"timeline_1024_container"}}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            August 2019 - Now (May 2023)
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"sbu"}}>
            <SchoolRoundedIcon />
          </TimelineDot>
          <TimelineConnector classes ={{root:"sbu"}}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes={{root:'education'}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              Stony Brook University
            </Typography>
            <Typography classes ={{root:"position"}}>Bachelors of Science in Computer Science</Typography>
            <div className ="rev_classes">
            <Typography>Relevant Course Work</Typography>
            <Typography>
              <ul>
                <li>Introduction to OOP: Java</li>
                <li>Introduction to Digital Intelligence</li>
                <li>Applied Mathematics and Statistics: Applied Calculus 2</li>
                <li>Data Structures and Algorithmns</li>
                <li>Foundations of Computer Science</li>
              </ul>
            </Typography>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            June 2020 - Now
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"optum"}}>
            <LocalHospitalRoundedIcon />
          </TimelineDot>
          <TimelineConnector classes ={{root:"optum"}}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes ={{root:"optum_paper"}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              UnitedHealthGroup: Optum 
            </Typography>
            <Typography classes ={{root:"position"}}>Software Engineering Intern</Typography>
            <Typography classes = {{root:"tasks"}}>
              <ul>
                <li>Lead a group of 8 interns to devize a product to 
                  combat the growing deaths of pregnant women in the United States.
                  Focused on the minority population.
                </li>
                <li className ="second_task">
                  Utilized both frontend and backend technologies like 
                  ReactJs, NodeJs, ExpressJS, and React Native to create 
                  both a web and app platform to provide minority populations
                  with easier access to health services.
                </li>
                <li>
                  Utilized internal apis and databases to render informational 
                  and confidential information on our platforms.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            March 2018 - September 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"db"}}>
            <AdbRoundedIcon />
          </TimelineDot>
          <TimelineConnector classes ={{root:"db"}} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes ={{root:"db_paper"}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              DB Grant Associates INC.
            </Typography>
            <Typography classes ={{root:"position"}}>IT Intern - Mark Schnidman, Tech Lead</Typography>
            <Typography classes = {{root:"tasks"}}>
              <ul>
                <li>Led 6 other interns in finding bids on office equipment 
                  like computers, laptops, firewalls, monitors, and telephones
                  for the company.
                </li>
                <li className ="second_task">
                Reorganized the old cabling of the company, making sure 
                that the the hardware and software of the entire
                Brooklyn branch is up to date and running efficiently.
                </li>
                <li>
                Assisted the office with any technical difficulties 
                that come along, such as viruses and admin access to certain
                software in the building.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            Spetember 2017 - March 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot classes ={{root:"fx"}}>
            <BuildRoundedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper} classes ={{root:"fx_paper"}}>
            <Typography variant="h6" component="h1" classes = {{root:"heading"}}>
              FxCollaborative
            </Typography>
            <Typography classes ={{root:"position"}}>Engineering Intern: ACE Mentorship</Typography>
            <Typography classes = {{root:"tasks"}}>
              <ul>
                <li>Collaborated with professional engineers to develop
                   schematics and floor plans involving the construction of an
                  agricultural school in Yabucoa,Puerto Rico.
                </li>
                <li className ="second_task">
                Stood in front of a panel of professional judges, some whom were structural engineers, architects, and electrical
                engineers. Responded to questions regarding the strength and integrity of the building and whether or not it
                can hold in a disastrous area like Yabucoa.
                </li>
              </ul>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}