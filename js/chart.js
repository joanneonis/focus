
var ctx = $("#Chart");

var date =["Ma","Di","Wo","Vrij","Zat","Zo"];
var bloktijd =[.66,.68,.68,.66,.7,.68];

Chart.defaults.global.defaultFontFamily = "'Ubuntu', sans-serif";

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: date,
        datasets: [{
            data: bloktijd,
            label: "Bloktijd",
            backgroundColor: "#D8E9FF",
            borderColor: '#4991FF',
            borderWidth: 1.5,
            //lineTension: 3,

            // pointBorderColor: 'rgba(0,0,0,0)',
            // pointBackgroundColor: '#4991FF',
            // pointRadius: 3
        },
        // {
        //     data: diepstePunt,
        //     label: "diepstepunt",
        //     backgroundColor: "rgba(255,0,0,0.3)",
        // }
        ]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: '#f3f5f6',
            titleFontColor:'#686868',
            bodyFontColor: '#686868',
            xPadding: 10,
            yPadding: 10,
            cornerRadius: 20,
            displayColors: false,
            caretSize: 8
            
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
            scales: {
                yAxes: [{
                    //cijfers links y as
                    ticks: {
//                        beginAtZero:true,
                        
                    },
                    gridLines: {
                        zeroLineColor: 'rgba(0,0,0,0)',
                        drawBorder: false,
                        
                    }
                }],
                xAxes: [{
                    ticks:{
                        fontColor: '#4991FF'
                    },
                    gridLines: {
                        display: false ,
                    },
                }]
            }
        }
});

