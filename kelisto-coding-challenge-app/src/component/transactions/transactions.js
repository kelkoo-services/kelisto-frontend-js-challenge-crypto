import React from "react";
import transactionsStyles from './transactionsStyles';
import { Grid, Typography } from "@material-ui/core";

import CardCripto from "../cardCripto/cardCripto";

export default function transactions(props){
    const {data} = props;
    const  classes = transactionsStyles();
    return (
        <>
            <Grid className={classes.root} >
                {data ? (
                  <>
                    <Typography className={classes.title}>
                    Recent
                    </Typography>
                    <Grid className={classes.container}>
                        <Grid>
                            
                        </Grid>
                        <Grid className={classes.containerCripto}>
                            {data.map(cripto =>
                                <CardCripto
                                key={cripto.id}
                                name={cripto.name}
                                sku={cripto.sku}
                                stock={cripto.stock}
                                variant={cripto.variant}
                                />
                                )}
                        </Grid>
                    </Grid>
                  </>
                  ):( 
                    <Typography className={classes.noData}>
                    Nothing to show for it yet
                    </Typography>
                    )}
            </Grid>
        </>
    )
}