import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Course from '../Course/Course'
import Sidebar from '../Sidebar/sidebar'
import './courses.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    margin: '100px 100px 50px 200px',
  },
  image: {
    width: '100%',
    height: '300px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
    <Sidebar/>
      <div className="content">
        <h1>Welcome to the World of IT</h1>
      </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
        style={{margin: '10px 0', borderRadius: '10px', overflow:' hidden'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.secondaryHeading}>1. Introduction to IT : Hello Future!</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgba(105, 202, 240, 0.123)'}}>
          <Course/>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} 
        style={{margin: '10px 0', borderRadius: '10px', overflow:' hidden'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <Typography className={classes.secondaryHeading}>2. Dive into IOT</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgba(105, 202, 240, 0.123)'}}>
          <Course/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} 
        style={{margin: '10px 0', borderRadius: '10px', overflow:' hidden'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
        <Typography className={classes.secondaryHeading}>3. Fidgeting with programming : Python</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgba(105, 202, 240, 0.123)'}}>
          <Course/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} 
        style={{margin: '10px 0', borderRadius: '10px', overflow:' hidden'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
        <Typography className={classes.secondaryHeading}>4. Basis of Scratch</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: 'rgba(105, 202, 240, 0.123)'}}>
          <Course/>
        </AccordionDetails>
      </Accordion>
        <img className={classes.image} src={require('../../assets/3.png')} />
    </div>
  );
}
