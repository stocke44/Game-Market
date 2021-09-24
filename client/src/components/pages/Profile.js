import React from "react"
import { autocompleteClasses, Box,Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
const Profile= () =>{
    return(
        <Box className="profile">
            <Box  className="profile-info">
                <Box className="profile-image">
                    <img src="/images/profile.jpg"></img>
                </Box>
                <Box className="profile-bio">
                    <Typography variant="body1">Jose Barajas</Typography>
                    <Box className="profile-data">
                        <Typography variant="body1">15 posts</Typography>
                        <Typography variant="body1">20 followers</Typography>
                        <Typography variant="body1">10 following</Typography>                        
                    </Box>

                </Box>
            </Box>
            <Box className="gallery" >
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card>
                    <CardMedia component="img" height="200" image='/images/profile.jpg' alt='card-content'/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Jose Selfie
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Cheking out my first game market post will show off my collection and any items for sale!!
                        </Typography>
                        <CardActions>
                            <Button>Like</Button>
                            <Button>Comment</Button>
                            <Button>Share</Button>
                            <Button>Add to Cart</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
            <Typography variant="h1"> This is the Profile page</Typography>            
        </Box>

    )
}

export default Profile;