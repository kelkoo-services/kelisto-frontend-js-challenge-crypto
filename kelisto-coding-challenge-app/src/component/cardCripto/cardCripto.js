import React from "react";
import { Grid, Typography } from "@material-ui/core";
import cardCriptoStyles from "./cardCriptoStyles";


export default function cardCripto(props){
    const  classes = cardCriptoStyles();

    const {
        name,
        sku,
        stock,
        variant
    } = props
    
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2
      })
    return (
        <>
            <Grid className={classes.root} >
                <Grid className={classes.container}>
                    <Grid className={classes.containerData}>
                        <Grid className={classes.iconCripto}/>
                        <Grid>
                            <Typography className={classes.title}>
                            {name}
                            </Typography>
                            <Typography className={classes.abbreviation}>
                            {sku}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className={classes.containerValue}>
                        <Typography className={classes.stock}>
                            {formatterPeso.format(stock)}
                        </Typography>
                        <Typography className={variant > 0 ? (classes.negativeText):(classes.text)}>
                        {variant > 0 ? `+${variant}` : variant}%
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}   