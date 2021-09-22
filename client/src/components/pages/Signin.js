import React from "react"
import { makeStyles} from '@material-ui/core/styles';
import { Box,Button, Card, CardActions, CardContent, TextField, Typography } from "@mui/material";


const useStyles = makeStyles((theme) => ({
    signin:{
        width:'800px',
        margin: '0 auto',
        marginTop:'48px',
        [theme.breakpoints.down('xs')]:{
            width:'300px'
        }
    },
    formContent:{
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexWrap:'wrap',
    },
    formText:{
        textAlign: 'center',
    },
    formButton:{
        margin: '0 auto !important',
    }
}));

const Signin = () =>{
    const classes = useStyles();

    return(
        <Card  className={classes.signin}>
            <CardContent>
                <Typography className={classes.formText} variant={"h2"}>
                    Signin
                </Typography>
                <Box className={classes.formContent} component="form"sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} noValidateautoComplete="off">
                    <TextField required id="outlined-required" label="Email"></TextField>
                    <TextField required id="outlined-password-input" type="password" label="Password" autoComplete="current-password"></TextField>
                 </Box>
                    <CardActions >
                        <Button className={classes.formButton} variant="contained">Signin</Button>                    
                    </CardActions> 
            </CardContent>
        </Card>
    )
}

export default Signin;