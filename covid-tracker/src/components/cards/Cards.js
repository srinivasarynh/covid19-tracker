import React from "react";
import styles from './cards.module.css';
import { Card, CardContent, Typography, Grid} from '@mui/material';
import CountUp from "react-countup";
import cx from 'classnames';


const Cards = ({data}) => {
    
    if(!data){
        return 'Loading...';
    }

    return (
        <div className="container">
            
             <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start={0}
                            end={data.totalConfirmed}
                            duration={10}
                            separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(data?.date).toDateString()}</Typography>
                        <Typography variant="body2">Number of confirmed cases of COVID-19</Typography> 
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={data.totalConfirmed - data.totalDeaths}
                            duration={10}
                            separator=',' />
                            </Typography>
                        <Typography color="textSecondary">{new Date(data?.date).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography> 
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={data.totalDeaths}
                            duration={10}
                            separator=',' />
                            </Typography>
                        <Typography color="textSecondary">{new Date(data?.date).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography> 
                    </CardContent>
                </Grid>
            </Grid> 
        </div>
    )
}

export default Cards;