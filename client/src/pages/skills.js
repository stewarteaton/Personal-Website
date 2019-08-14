import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SkillsIcon from '../util/SkillsIcon'
// SVG's
import ReactLogo from '../images/svg-icons/react.svg';
import html5 from '../images/svg-icons/html5.svg';
import css3 from '../images/svg-icons/css3.svg';
import javascript from '../images/svg-icons/javascript.svg';
import redux from '../images/svg-icons/redux.svg';
import pug from '../images/svg-icons/pug.svg';
import nodejs from '../images/svg-icons/node.js.svg';
import mongodb from '../images/svg-icons/mongodb.svg';
import firebase from '../images/svg-icons/firebase.svg';
import java from '../images/svg-icons/java.svg';
import sass from '../images/svg-icons/sass.svg';
import python from '../images/svg-icons/python.svg';
import aws from '../images/svg-icons/aws.svg';
import php from '../images/svg-icons/php.svg';
import mysql from '../images/svg-icons/mysql.svg';
import postgresql from '../images/svg-icons/postgresql.svg';
import objectiveC from '../images/svg-icons/apple.svg';
import swift from '../images/svg-icons/swift.svg';
import heroku from '../images/svg-icons/heroku.svg';
import materialUI from '../images/svg-icons/material-ui.svg';
import postman from '../images/svg-icons/postman.svg';



export default function skills() {
    return (
        <div className='skillsPage' id='skills'>
                <h1 className='skillsTitle'>Technical Skills</h1>
                <hr />
                <p>I use Java for Algorithms & Data-Structures, Python for Data Science, and JavaScript for the web</p>
                <h4>Front-End</h4>
                <Paper className='skillsPaper'>
                    <Grid container spacing={0}>
                            <SkillsIcon icon={css3} name='CSS 3' />            
                            <SkillsIcon icon={html5} name='HTML 5' />
                            <SkillsIcon icon={javascript} name='JavaScript' />       
                            <SkillsIcon icon={ReactLogo} name='React.js' />
                            <SkillsIcon icon={redux} name='Redux' />
                            <SkillsIcon icon={pug} name='Pug' />
                            <SkillsIcon icon={sass} name='Sass' />
                            <SkillsIcon icon={materialUI} name='Material-UI' />

                    </Grid>
                </Paper>

                {/******* Back End Skills *****/}
                <h4 className='skillPaperLabel'>Back-End</h4>
                <Paper className='skillsPaper'>
                    <Grid container spacing={2}>
                            <SkillsIcon icon={nodejs} name='Node.js' />
                            <SkillsIcon icon={mongodb} name='MongoDB' />
                            <SkillsIcon icon={firebase} name='Firebase' />
                            <SkillsIcon icon={postman} name='Postman' />
                            <SkillsIcon icon={java} name='Java' />
                            <SkillsIcon icon={python} name='Python' />
                            <SkillsIcon icon={aws} name='AWS' />
                            <SkillsIcon icon={php} name='PHP' />
                            <SkillsIcon icon={heroku} name='Heroku' />
                            <SkillsIcon icon={mysql} name='MySQL' />
                            <SkillsIcon icon={postgresql} name='PostgreSQL' />
                    </Grid>
                </Paper>

                {/******* Mobile Skills      */}
                <h4 className='skillPaperLabel'>Mobile</h4>
                <Paper className='skillsPaper'>
                    <Grid container spacing={2}>
                            <SkillsIcon icon={swift} name='Swift'/>
                            <SkillsIcon icon={objectiveC} name='Objective-C' />
                            <SkillsIcon icon={ReactLogo} name='React Native' />
                    </Grid>
                </Paper>
        </div>
    )
}
