import React from 'react'
import SocialLinks from '../components/SocialLinks';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
// SVG's
import ReactLogo from '../images/svg-icons/react.svg';
import html5 from '../images/svg-icons/html5.svg';
import css3 from '../images/svg-icons/css3.svg';
import javascript from '../images/svg-icons/javascript.svg';
import redux from '../images/svg-icons/redux.svg';
import pug from '../images/svg-icons/pug.png';


export default function about() {

    return (
             <div className='aboutPage' id='about'>
                <h1 className='aboutMeTitle'>About Me</h1>
                <hr />
                <Grid container spacing={2}>
                    <Grid item sm={4} xs={12}>
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564460812/profile-pic.jpg' alt='Profile-pic' className='profile-pic'/>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <div className='aboutInfo'>
                            <h3>Hi, my name is Stewart.</h3>
                            <p>I'm a full stack software developer who enjoys building meaningful and efficient apps with a focus on UX and UI. </p>
                            <p>Currently a senior at the <span className='school'>University of Mississippi</span> studying Chemical Engineering and Computer Science.</p>
                            <p>You can view some of my recent projects in my <a href='#projects' className='portfolioLink'>portfolio</a> below.</p>
                            <p>Want to work together or get in touch? Find me on social media or send me an <a href='#contact' className='emailLink'>email.</a></p>
                            <Paper className='homeSocialLinks'>
                                <SocialLinks />
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
                <br/><br/><br/>

            </div> 
    )
}
