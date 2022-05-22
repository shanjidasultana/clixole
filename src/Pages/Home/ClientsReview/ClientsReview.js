import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Card, CardContent, Grid, Rating } from '@mui/material';

const ClientsReview = (props) => {
    const [ratings,setRatings] =useState([]);
    useEffect(()=>{
        fetch('https://aqueous-scrubland-99452.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setRatings(data))
    },[])
    return (

            <>
                <h3 class='font-bold text-indigo-900'>Client’s Testimonials <span class='w-1.5 bg-gray-800'></span></h3>
                <h1 class='font-bold text-5xl'>We are very happy for client’s reviews.</h1>
    
                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} style={{marginTop:25,mx:'auto',alignItems:'center',justifyContent:'center' }}>
            {
                ratings.map(item =><Grid 
                    key={item._id}
                items xs={12} sm={6} md={4}>
                        <Card sx={{width:330,mb:8,mx:'auto',boxShadow:0,}}>
                            <CardContent>
                            <Avatar  sx={{p:3,mx:"auto",my:5}} aria-label="recipe">
                                <img src={item.photoURL} alt="" />
                            </Avatar>
                                <Typography gutterBottom variant="h5" component="div">
                                {item.reviewers}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                {item.description}
                                </Typography>
                                <Rating name="read-only" value={item.rating} readOnly />
                            
                            </CardContent>
                        </Card>
                    </Grid>
              
            )}
              </Grid>
            </>
 
    );
};

export default ClientsReview;