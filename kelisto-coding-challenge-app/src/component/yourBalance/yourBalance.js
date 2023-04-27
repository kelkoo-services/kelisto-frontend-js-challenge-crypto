import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import yourBalanceStyles from './yourBalanceStyles';


export default function YourBalanceCard(props){
    const  classes = yourBalanceStyles( );
    const {data} = props;

    const [total, setTotal] = useState(0)

    function calculateTotal(dataBalance) {
        let totalAux = 0;

        dataBalance.forEach(element => {
            if (element.stock) totalAux = totalAux + element.stock;
        });
        setTotal(totalAux);
    }
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2
      })
      
      useEffect(()=>{
        if(data)
          calculateTotal(data);
    },[data]);

    return (
        <>
            <Grid className={classes.root} >
                <Typography className={classes.title}>
                   your balance
                </Typography>
                <Typography className={classes.mount}>
                    {formatterPeso.format(total)}
                </Typography>
            </Grid>
        </>
    )
}   