import React from "react";
import { Grid, Typography } from "@material-ui/core";
import topBarStyles from './topNavBarStyle';
import bell from '../../assets/icons/Icon-Bell.svg';

export default function TopNavBar(props){
    const  classes = topBarStyles();
    const {userData} = props;

    return (
        <>
            <Grid className={classes.root} >
            {userData ? userData.map((user, index) =>
                <Typography key= {index} className={classes.typographyName}>
                    Hi {user.name ? user.name : 'Anonimous'}
                </Typography>)
                :
                (<Typography key= {1} className={classes.typographyName}>
                    Hi Anonimous
                </Typography>)}
                <img 
                alt="bell"
                src={bell}
                className={classes.ico}
                />
            </Grid>
        </>
    )
}