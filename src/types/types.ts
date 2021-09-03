export type PayloadType = {
    count: number,
    fullCount: number,
    data: ItemType[]
}
export type ItemType = {
    asset: string
    income: number
    incomeType: string
    info: string
    symbol: string
    time: string
    tradeId: string
    tranId: number
    __v: number
    _id: string
}

export type DatasetsItemType = {
    label: string
    fillColor: string
    strokeColor: string
    pointColor: string
    pointStrokeColor: string
    pointHighlightFill: string
    pointHighlightStroke: string
    data: number[]
}

export type DataChartType = {
    labels: string[]
    datasets: DatasetsItemType[]
}

export type OptionsChartType = {
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : Boolean,

    //String - Colour of the grid lines
    scaleGridLineColor : String,

    //Number - Width of the grid lines
    scaleGridLineWidth : Number,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: Boolean,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: Boolean,

    //Boolean - Whether the line is curved between points
    bezierCurve : Boolean,

    //Number - Tension of the bezier curve between points
    bezierCurveTension : Number,

    //Boolean - Whether to show a dot for each point
    pointDot : Boolean,

    //Number - Radius of each point dot in pixels
    pointDotRadius : Number,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : Number,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : Number,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : Boolean,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : Number,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : Boolean,

    //Boolean - Whether to horizontally center the label and point dot inside the grid
    offsetGridLines : Boolean
}