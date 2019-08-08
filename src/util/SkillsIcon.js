import React from 'react';
import Grid from '@material-ui/core/Grid';


export default ({icon, name }) => (
    <Grid item sm={2} xs={6} className='item'>
        <img src={icon} alt={name} className='skillsIcon'></img>
        <span class="caption">{name}</span>
    </Grid>   
);