var chart_1 = AmCharts.makeChart("mwp_year", {
    "type": "serial",
    "theme": "light",
    "titles": [{
        "text": 'MWp por año',
        "size": 16
    },{
        "text":'(Rotación de activos)',
        "size":12
    }
    ],
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridAlpha": 0
    },
    "numberFormatter": {
        "precision": 1
    },
    "trendLines": [],
    "graphs": [
        {
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "value",
            "labelText": "[[value]]",
            "fillColorsField": "color"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            "unitPosition": "left",
            "autoGridCount": false,
            "position": "left",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false,
            "maximum": 700
        }
    ],
    "balloon": {},
    "dataProvider": [
        {
            "year": "2022",
            "value":619,
            "color": "#fcb72f"
        },
        {
            "year": "2023",
            "value":674,
            "color": "#fdc222"
        },{
            "year":"2024",
            "value":564,
            "color": "#f7a737"
        },{
            "year":"2025",
            "value":598,
            "color": "#f2982e"
        }
    ],
    "export": {
        "enabled": true
    }
});