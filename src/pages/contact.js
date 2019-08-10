import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssTextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/styles';

import axios from 'axios';
import { green } from '@material-ui/core/colors';
import { whileStatement } from '@babel/types';

const styles = {
    textInput:{
        floatingLabelFocusStyle: {color: "white"},
    },
    notchedOutline: {
        borderWidth: "2px",
        borderColor: "white !important",
        color: 'white',
    },



}

class contact extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            subject: '',
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = async(event) => {
        const userData = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        event.preventDefault();
            await axios.post('http://localhost:3001/send', {
            userData
          })
          .then(function (response) {
            console.log('worked');
            console.log(response.statusText);
            alert('Thank you! Your message has been sent.');
          })
          .catch(function (error) {
            console.log('did not work');
            console.log(error);
        });


    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render(){
        const { classes } = this.props;

        return(
        <div id='contact' className='contact'>
            <div className='imgCover'>
    
            <Fragment>
                <h1>Contact Me</h1>
                <hr />

            <form onSubmit={this.handleSubmit} >
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <TextField required id="name" name="name" label="Name" className={classes.textInput} margin="normal" variant='outlined' value={this.state.name} onChange={this.handleChange}  InputLabelProps={{style: { color: 'white' }}} InputProps={{ classes:{ notchedOutline: classes.notchedOutline }, style: {color: 'white', fontSize: '1.3em'}  }} fullWidth />
                        
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField required id="email" name="email" label="Email" className={classes.textInput} margin="normal" variant='outlined' value={this.state.email} onChange={this.handleChange}  InputLabelProps={{style: { color: 'white' }}} InputProps={{ classes:{ notchedOutline: classes.notchedOutline }, style: {color: 'white', fontSize: '1.3em'}  }} fullWidth />
                    </Grid>
                </Grid>
                        <TextField required multiline={true} rows={7} rowsMax={10} id="message" name="message" label="Message" className={classes.textInput} margin="normal" variant='outlined' value={this.state.message} onChange={this.handleChange}  InputLabelProps={{style: { color: 'white'}}} InputProps={{ classes:{ notchedOutline: classes.notchedOutline}, style: {color: 'white', fontSize: '1.3em'}  }} fullWidth />
                
                <Button type="submit" variant="contained" color="primary" className='submitBtn'>Submit</Button>

            </form> 
        </Fragment>
        </div>
        </div>
        )
    }
};

export default (withStyles(styles)(contact));

