import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';

// MUI stuff
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';


  const useStyles = makeStyles({

    appBar: {
        // backgroundColor:'#673ab7',
        // backgroundColor: 'white',
        backgroundColor: 'rgb(220,220,220)'
    },
    navButton: {
        color:'#673ab7',
        marginLeft: '20px',
        marginRight:'20px',
        fontFamily: 'Fira Code',
        fontWeight: '600',
        fontSize: '1em',
        '&:hover': {
            color: 'black',
            fontSize: '1.2em'
         },
    },
    logoIcon: {
        color: '#673ab7',
        fontFamily: 'Fira Code',
        fontWeight: '600',
        fontSize: '1.2em',
        '&:hover': {
            color: 'black',
         },
    },
    resumeButton: {
        color: 'black',
        border: 'solid 1px black',
        fontFamily: 'Fira Code',
        fontWeight: '600',
        fontSize: '.9em',
        '&:hover': {
            color: '#673ab7',
            fontSize: '1.1em'
         },
    }
  });


export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar className='nav-container'>
                    <div className='navLogo' style={{ flex: 1 }}>
                        <a href='#home'>
                            <IconButton aria-label='' className={classes.logoIcon} >
                                <ImportantDevicesIcon className={classes.logoIcon} />&nbsp;Stewart Eaton
                                {/* <Typography type='title' className={classes.logoText} >&nbsp;Stewart Eaton</Typography> */}
                            </IconButton>
                        </a>
                    </div>
                    <div>
                        <MenuDrawer />

                        <div className='navButtons'>
                            {/* <Link to='/'>
                                <Button className={classes.navButton} component={Link} to='/'>Home</Button>
                            </Link> */}
                            {/* <Link to='/About'>
                                <Button className={classes.navButton} component={Link} to='/About'>About</Button>
                            </Link> */}
                            <a href='#about'>
                            <Button className={classes.navButton}>About</Button>
                            </a>
                            {/* <Link to='/Projects'> */}
                            <a href='#skills'>
                                <Button className={classes.navButton}>Skills</Button>
                            </a>
                            <a href='#projects'>
                                <Button className={classes.navButton} >Projects</Button>

                                {/* <Button className={classes.navButton} component={Link} to='/Projects'>Projects</Button> */}
                            </a>
                            {/* </Link> */}
                            {/* <Link to='/Contact'> */}
                            <a href='#contact'>
                                <Button className={classes.navButton} >Contact</Button>

                                {/* <Button className={classes.navButton} component={Link} to='/Contact'>Contact</Button> */}
                            </a>
                            {/* </Link> */}
                            <a href='' target='_blank'>
                                <Button className={classes.resumeButton} >Resume</Button>
                            </a>
                        </div>
                     </div>
            </Toolbar>
        </AppBar>
    )
}

// export class Navbar extends Component {
//     render() {
//         const { classes } = props;

//         return (
//             <AppBar position='fixed'>
//                 <Toolbar className="nav-container">
//                     <Link to='/'>
//                         <Tooltip title='Home' placement='bottom'>
//                             <IconButton className={styles.menuButton} aria-label="menu" color='secondary'>
//                                 <MenuIcon className={styles.menuIcon} />
//                             </IconButton>
//                         </Tooltip>
//                     </Link>
//                 </Toolbar>
//             </AppBar>
//         )
//     }
// }

// export default withStyles((styles)(Navbar));
