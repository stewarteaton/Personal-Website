import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LaunchIcon from '@material-ui/icons/Launch';




export default function projects() {

    return (
        <div className='projectsPage' id='projects'>
            <Fragment>
                <h1 className='projectsPageTitle'>Projects</h1>
                <h4 className='projectsPageTitle2'>Here are some projects I've recently developed</h4>
                <hr />
            </Fragment>
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <a href='https://tmdl-db.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564683887/Portfolio/TMDL-Pic.png' className='websitePic' alt='TMDL Website' />
                    </a>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'>TMDL Web App</h1>
                    <p>A website created for the Mississippi Department of Environmental Quality that provides simple management and access to their database of water qualty (a.k.a TMDL) reports</p>
                    <p className='techUsed'>Node.js &nbsp;Express &nbsp;MongoDB &nbsp;Pug</p>
                    <Link to='/Projects/tmdl-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link>
                    <br />
                    <Tooltip title='View Website'>
                        <a href='https://tmdl-db.herokuapp.com/'  target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='launch' className='launchIcon'>
                                <LaunchIcon style={{ fontSize: 35 }}/>
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Tooltip title='View Code'>
                        <a href='https://github.com/stewarteaton/TMDL-Tool' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='github' className='githubIcon'>
                                <i className="fab fa-github" ></i>
                            </IconButton>
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
            {/****** Social Web Demo *******/}
            <hr />
            <Grid container spacing={2}>

                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'>Social Media (demo)</h1>
                    <p>A twitter-like social media website clone that allows users to create a profile, and then like, comment, and share posts with notifications</p>
                    <p className='techUsed'>React &nbsp;Node.js &nbsp;Express &nbsp;Firebase </p>
                    <Link to='/Projects/social-web-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link>
                    <br />
                    <Tooltip title='View Website'>
                        <a href='https://socialweb-4fb98.firebaseapp.com/'  target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='launch' className='launchIcon'>
                                <LaunchIcon style={{ fontSize: 35 }}/>
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Tooltip title='View Code'>
                        <a href='https://github.com/stewarteaton/Social-Web' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='github' className='githubIcon'>
                                <i className="fab fa-github" ></i>
                            </IconButton>
                        </a>
                    </Tooltip>
                </Grid>
                <Grid item sm={8} xs={12}>
                    <a href='https://socialweb-4fb98.firebaseapp.com/' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564687287/Portfolio/social-web-pic.png' className='websitePic' alt='TMDL Website' />
                    </a>
                </Grid>
            </Grid>

            {/****** Travel Booker Demo ******/}
            <hr />
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    <a href='https://travel-booker.herokuapp.com/' target='_blank' rel="noopener noreferrer">
                        <img src='https://res.cloudinary.com/dmgp6exro/image/upload/v1564688322/Portfolio/travelBooker.png' className='websitePic' alt='Hotel Booking website' />
                    </a>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <h1 className='projectTitle'> Hotel Booking Website (demo)</h1>
                    <p>A full stack demo website allows users to query a database of hotels by price, quality, location, and book hotels. Admins can add, edit, or remove existing hotels. </p>
                    <p className='techUsed'>Node.js &nbsp;Express &nbsp;MongoDB &nbsp;Pug</p>                   
                    <Link to='/Projects/hotel-booking-website'>
                            <Button className='readMoreBtn' component={Link} to='/'>Read More</Button>
                    </Link>
                    <br />
                    <Tooltip title='View Website'>
                        <a href='https://travel-booker.herokuapp.com/'  target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='launch' className='launchIcon'>
                                <LaunchIcon style={{ fontSize: 35 }}/>
                            </IconButton>
                        </a>
                    </Tooltip>
                    <Tooltip title='View Code'>
                        <a href='https://github.com/stewarteaton/Travel-Booker-Website' target='_blank' rel="noopener noreferrer">
                            <IconButton aria-label='github' className='githubIcon'>
                                <i className="fab fa-github" ></i>
                            </IconButton>
                        </a>
                    </Tooltip>
                </Grid>
            </Grid>
            <hr />
        </div>
        
        
    )
}

