// Textos ambos idiomas

// if (locale == "es") {

// }
// else {
//     var deuda = "Foreign Debt";
//     var linea = "Credit Lines";
//     var certificados = "Debt Certificates";
//     var subo = "Subordinated Debt";
// }


var chart = AmCharts.makeChart("index_pie", {
    "type": "pie",
    "titleField": "label",
    "valueField": "value",
    "titles": [],
    // "marginTop": 20,
    "marginBottom": 0,
    "fontSize": 15,
    "angle":40,
    "depth3D":19,
    "marginLeft": 0,
    "marginRight": 0,
    "radius": "38%",
    "labelRadiusField": "labelRadius",
    // "labelRadius":"-20",
    "innerRadius": "30%",
    "colors": [
        '#f39c39', '#76bf51', '#98d259', '#afb5ba',
        '#e0f4fd', '#179350'
    ],
    "balloonText": "[[title]]: [[value]]MWp - [[percents]]%",
    // "labelText": "[[percents]]%",
    "labelFunction": function (value) {
        return value.percents.toFixed(1) + '%'
    },
    "legend": {
        "equalWidths": false,
        "labelText": "[[title]]",
        "valueText": "",
        "align": "center",
        // "marginTop":-10
        // "useGraphSettings": true
    },
    "dataProvider": [
        {
            "value": 3000,
            "label": "Europa",
            "labelRadius": -40
        },
        {
            "value": 708,
            "label": "Chile",
            "labelRadius": -40
        },
        {
            "value": 400,
            "label": "Colombia",
            "labelRadius": -40
        },
        {
            "value": 150,
            "label": "Guatemala",
            "labelRadius": 25
        },
        {
            "value": 20,
            "label": "Panamá",
            "labelRadius": 50
        },
        {
            "value": 718,
            "label": "México",
            "labelRadius": -44
        }
    ]
});
