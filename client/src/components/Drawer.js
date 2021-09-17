import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemText,Box, IconButton, makeStyles} from '@material-ui/core';
import  MenuIcon  from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme =>({
    menuIconContainer:{
        paddingLeft : '0',
    },
}));

const DrawerCompnent = ()=>{

    const [openDrawer, setOpenDrawer] = useState(false);

    const classes = useStyles();
    return (
        <Box>
            <Drawer className={classes.menuIconContainer} anchor='top' onClose={()=>{setOpenDrawer(false)}} open={openDrawer}>
                <List>
                    <ListItem divider button><Link to="/" onClick={()=>{setOpenDrawer(!openDrawer)}}>Game Market</Link></ListItem>
                    <ListItem divider button><Link to="/signin" onClick={()=>{setOpenDrawer(!openDrawer)}}>Login</Link></ListItem>
                    <ListItem  button><Link to="/signup" onClick={()=>{setOpenDrawer(!openDrawer)}}>Signup</Link></ListItem>
                    <ListItem  button><Link to="/profile" onClick={()=>{setOpenDrawer(!openDrawer)}}>Profile</Link></ListItem>
                </List>
            </Drawer>
            <IconButton >
                <MenuIcon onClick={()=>{setOpenDrawer(!openDrawer)}}></MenuIcon>
            </IconButton>
        </Box>
    )
}

export default DrawerCompnent;