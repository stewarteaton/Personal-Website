import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import LaunchIcon from '@material-ui/icons/Launch';

export default function about() {

    return (
        <div className='aboutPage'>
             <Typography variant='h2' className='aboutPageTitle' align='center'> About Me </Typography>
             <hr />
             <Grid container spacing={6}>
                 <Grid item sm={6} xs={12}>
                 <h2><u>Education</u></h2>
                    <Paper className='educationCard'>
                      <div className='imgWrapper'>
                        <img className='schoolPic' src='https://res.cloudinary.com/dmgp6exro/image/upload/v1565035162/Portfolio/ole-miss.jpg' alt='School'></img>
                            <h2 className='schoolTitle'>University of Mississippi</h2>
                      </div>
                        <h4>Oxford, MS</h4>
                        <ul>
                            <li><h4>B.S. in Chemical Engineering</h4></li>
                            <li><h4>Minor in Computer Science</h4></li>
                        </ul>
                    </Paper>
                 </Grid>
                 <Grid item sm={6} xs={12}>
                    
                 </Grid>
             </Grid>
        </div>
    )
}
