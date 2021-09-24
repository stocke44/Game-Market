import React from "react"
import { Typography, Box } from "@material-ui/core";

const Profile= () =>{
    return(
        <Box className="profile">
            <Box className="profile-info">
                <Box className="profile-image">
                    <img src="/images/profile.jpg"></img>
                </Box>
                <Box className="profile-bio">
                    <Typography variant="body1">Jose Barajas</Typography>
                </Box>
            </Box>
            <Box>

            </Box>
            <Typography variant="h1"> This is the Profile page</Typography>            
        </Box>

    )
}

export default Profile;