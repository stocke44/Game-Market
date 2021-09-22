import React from 'react';
import DrawerCompnent from './Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Box,AppBar, Toolbar,useMediaQuery,Button, useTheme } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    head:{
      [theme.breakpoints.down('xs')]: {
              paddingLeft: '0',
      },
    },      

}));



const NavBar =()=>{
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('xs'));

    return (
      <Box>
        <AppBar  position="static" color="default">
            <Toolbar className={classes.head} >
              {isMatch ? <DrawerCompnent/>:
               (<Box>
                <Link to="/" >Game Market</Link>
                <Button href="/signin" color="inherit">Login</Button>
                <Button href="/signup" color="inherit">Signup</Button>
                <Button href="/profile" color="inherit">Profile</Button>
                </Box>)}
            </Toolbar>              
        </AppBar>
          
      </Box>
    )
}

export default NavBar;



