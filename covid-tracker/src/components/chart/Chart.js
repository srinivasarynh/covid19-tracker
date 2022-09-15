import React from "react";
import styles from './chart.module.css';
import { Chart as ChartJS, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, } from 'chart.js'
import {Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )


const Charts = ({data}) => {

    const lineChart = (
        data?.length ?
        <Line
        data={{
            labels: data?.map(({date}) => new Date(date).toDateString()),
            datasets: [{
                data: data?.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },
            {
                data: data?.map(({recovered}) => recovered),
                label: 'Recovered',
                borderColor: 'green',
                fill: true,
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
            },
            {
                data: data?.map(({deaths}) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                fill: true,
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
            }, 

        ]   
        }}
        /> : null
    )

    return (
        <div className={styles.container}>
            {
               lineChart 
            }
        </div>
    )
}

export default Charts;