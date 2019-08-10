import React from 'react'
import SocialLinks from '../components/SocialLinks';
import Grid from '@material-ui/core/Grid';



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
                            <p>You can view some of my recent projects in my <a href='#projects'>portfolio</a> below.</p>
                            <p>Want to work together or get in touch? Find me on social media or send me an <a href='mailto:stewarteaton05@gmail.com'>email.</a></p>
                            <SocialLinks />
                        </div>
                    </Grid>
                </Grid>
                <br/><br/><br/>

            </div> 
    )
}
