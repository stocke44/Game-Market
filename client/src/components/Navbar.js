import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,IconButton,Typography,Button,Link,MenuItem } from '@material-ui/core'
import  MenuIcon  from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "yellow",

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }));

const NavBar =()=>{
    const classes = useStyles();

    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Link href="/" >Game Market</Link>
                <Button href="/signin" color="inherit">Login</Button>
                <Button href="/signup" color="inherit">Signup</Button>
                <Button href="/profile" color="inherit">Profile</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;