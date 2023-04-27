import React from "react";
import { Grid } from "@material-ui/core";
import viewAllButtonStyles from "./viewAllButtonStyles";

export default function viewAll(){
    const  classes = viewAllButtonStyles();
    return (
        <>
            <Grid className={classes.root}>
                Show all transactions
            </Grid>
        </>
    )
}