import React from "react";
import underConstructionStyles from './underConstructionStyles';
import { Grid } from "@material-ui/core";
import underConstruction from '../../assets/icons/underConstruction.png'

export default function UnderConstruction(){
    const  classes = underConstructionStyles();
    return (
        <>
            <Grid className={classes.root} >
                <img 
                    alt="under"
                    src={underConstruction}
                    className={classes.img}
                />
            </Grid>
        </>
    )
}