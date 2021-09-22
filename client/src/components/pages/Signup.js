import React from "react"
import { makeStyles} from '@material-ui/core/styles';
import { Box,Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";


const useStyles = makeStyles((theme) => ({
    signup:{
        width:'800px',
        margin: '0 auto',
        marginTop:'48px',
        [theme.breakpoints.down('xs')]:{
            width:'300px'
        }
    },
    formDisplay:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    formText:{
        textAlign: 'center',
    },
    formButton:{
        margin: '0 auto !important',
    }
}));

const Signup = () =>{
    const classes = useStyles();

    return(
        <Card  className={classes.signup}>
            <CardContent>
                <Typography className={classes.formText} variant={"h2"}>
                    Signup
                </Typography>
                <Box className={classes.formDisplay} component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidateautoComplete="off">
                    <TextField fullWidth required id="outlined-required" label="Email"  ></TextField>
                    <TextField fullWidth required id="outlined-name" label="Name" ></TextField>                        
                    <TextField  fullWidth   required id="outlined-password-input" type="password" label="Password" autoComplete="current-password" ></TextField>
                 </Box>
                    <CardActions >
                        <Button className={classes.formButton} variant="contained">Signup</Button>                    
                    </CardActions> 
            </CardContent>
        </Card>
    )
}


export default Signup;