import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

// MUI stuff
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


// const useStyles = makeStyles({
//     myName:{
//         marginTop: '5%',
//         color: '#673ab7'
//     }
//   });

export default function page() {
    // const classes = useStyles();

    return (
        <Fragment>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Fragment>
    );
}


