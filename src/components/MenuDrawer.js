import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
// MUI
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
// icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ProjectsIcon from '@material-ui/icons/LaptopMac';
import ContactIcon from '@material-ui/icons/ContactMail';
import ResumeIcon from '@material-ui/icons/InsertDriveFile';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    menuIcon: {
        color: '#673ab7',
        fontSize: '1.5em'
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

      const fullList = side => (
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          {/* <List>
            {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          <List>{[
          <Fragment>
            <Link to='/'>
              <ListItem button key='Home'>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
            </Link>
            <Link to='/About'>
              <ListItem button key='About'>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary='About' />
              </ListItem>
            </Link>
            <Link to='/Projects'>
              <ListItem button key='Projects'>
                <ListItemIcon><ProjectsIcon /></ListItemIcon>
                <ListItemText primary='Projects' />
              </ListItem>
            </Link>
            <Link to='/Contact'>
              <ListItem button key='Contact'>
                <ListItemIcon><ContactIcon /></ListItemIcon>
                <ListItemText primary='Contact' />
              </ListItem>
            </Link>
            <a href='' target='_blank'>
              <ListItem button key='Contact'>
                <ListItemIcon><ResumeIcon /></ListItemIcon>
                <ListItemText primary='Resume' />
              </ListItem>
            </a>
          </Fragment>

          ]}
          </List>
        </div>
      );

    return (
    <div>
        <div className='menuButton'>
            <Tooltip title='Menu' placement='bottom'>
                <IconButton aria-label="menu" onClick={toggleDrawer('top', true)}>
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>
            </Tooltip>
        </div>
      {/* <Button onClick={toggleDrawer('top', true)}>Open Top</Button> */}
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
    </div>
  );
    
}
