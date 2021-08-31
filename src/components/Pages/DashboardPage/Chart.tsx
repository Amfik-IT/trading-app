import React, {FC} from "react";
import {DataChartType, OptionsChartType} from "../../../types/types";

type PropsType = {
    labels: string[]
    data: number[]
}

const Chart: FC<PropsType> = ({labels, data}) => {

    const LineChart: any = require("react-chartjs").Line;
    
    const dataChart: DataChartType = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: data
            },
        ]
    };
    
    const options: OptionsChartType = {
        scaleShowGridLines : true,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1.5,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        pointDot : true,
        pointDotRadius : 4,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        datasetStrokeWidth : 1,
        datasetFill : true,
        offsetGridLines : true
    };

    return (
        <>
            <LineChart data={dataChart} options={options} width="600" height="250"/>
        </>
    )
}

export default Chart;