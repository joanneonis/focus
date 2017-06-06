
var ctx = $("#Chart");

var date =["Ma 12","Di 13","Wo 14","Vrij 15","Zat 16","Zo 17","Ma 18","Di 19"];
var bloktijd =[.66,.68,.68,.66,.7,.68,.60,.62];

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: date,
        datasets: [{
            data: bloktijd,
            label: "bloktijd",
            backgroundColor: "#D8E9FF",
            borderColor: '#4991FF',
            borderWidth: 1.5,

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
        fontColor: '#4991FF',
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
                    
                }]
            }
        }
});