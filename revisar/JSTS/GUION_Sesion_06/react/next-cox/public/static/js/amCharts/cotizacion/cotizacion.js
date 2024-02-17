if(locale=="es"){
    AmCharts.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    AmCharts.shortMonthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    AmCharts.dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    AmCharts.shortDayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
}
var loaded = 0;
var chartData = [];
var ipcData = [];
var ticker_symbol = "COXA";
/*
function cargarInfo() {
    $.ajax({
        // url: 'https://hkpy.irstrat.com/intradia/prices/2837?start=2014-12-10',
	url: 'https://api.manz.es/cox/coxa.php',
	//url: '/data/2837.json',
        dataType: 'jsonp',
        success: function (json) {
            precios = json.prices;
            // ipc = json.ipc;
            // intradia = json.intradia;

            loaded += 1;
            if (loaded == 2) {
                // Datatabla(intradia);
                fillData(precios, ipc, ticker_symbol);
            }
        }
    });

    $.ajax({
        //CARGANDO LOS DATOS DE FRMEX
        // url: 'https://hkpy.irstrat.com/intradia/prices/11?start=2020-01-01',
	//url: 'https://api.manz.es/cox/IPC.json',
	url: '/data/11.json',
	//url: 'https://api.manz.es/cox/IPC.php',
        async: false,
        dataType: 'jsonp',
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        success: function (json) {
            ipc = json.prices;
            loaded += 1;
            if (loaded == 2) {
                // Datatabla(intradia);
                fillData(precios, ipc, ticker_symbol);
            }
            //            console.dir(json.sites);
        }

    });


}

*/

function cargarInfo(){
  $.ajax({
	url: 'https://api.manz.es/cox/coxa.php',
        dataType: 'jsonp',
        success: function (json) {
         precios = json.prices;
         loaded += 1;
         if (loaded == 2) {
          fillData(precios, ipc, ticker_symbol);
         }
        }
  });

  $.ajax({
	//url: '/data/11.json',
	url: 'https://api.manz.es/cox/ipc.php',
        dataType: 'jsonp',
        success: function (json) {
   	 ipc = json.prices;
         loaded += 1;
         if (loaded == 2) {
          fillData(precios, ipc, ticker_symbol);
         }
        }
  });



}
jQuery(document).ready(function ($) {
    cargarInfo();
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function fillData(precios, ipc, ticker_symbol) {

    var lvva = 0;
    var lvvo = 0;
    precios_fill = $.map(precios, function (n, i) {
        if (n.pr !== null) {
            lvva = n.value;
            lvvo = n.volume
        }
        if (n.volume === null) {
            lvvo = 0
        }
        return [{"date": n.date, "value": lvva, "volume": lvvo}];
    }).reverse();

    ipc_fill = $.map(ipc, function (n, i) {
        if (n.value !== null) {
            lvva = n.value;
            lvvo = n.volume
        }
        if (n.volume === null) {
            lvvo = 0
        }
        return [{"date": n.date, "value": lvva, "volume": lvvo}];
    }).reverse();


    var chart = AmCharts.makeChart("stock_accion", {
        "type": "stock",
        "dataDateFormat": "YYYY-MM-DD",
        "language": locale,
        "pathToImages": location.protocol + '//' + location.host + "/static/js/amCharts/images/",
        "dataSetSelector": {
            "position": "top",
            "comboBoxSelectText": locale=="es"?"Seleccionar...":"Select...",
            "compareText": locale=="es"?"Comparar con:":"Compare to:",
            "selectText": locale=="es"?"Seleccionar:":"Select:",
        },
        "valueAxesSettings": {
            "position": "right",
        },
        "dataSets": [{
            "color": "#42a042",
            "fieldMappings": [{
                "fromField": "value",
                "toField": "value"
            }, {
                "fromField": "volume",
                "toField": "volume"
            }],
            "title": ticker_symbol,
            "dataProvider": precios_fill,
            "categoryField": "date"
        }, {
            "color": "#000000",
            "fieldMappings":
                [{
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                }],
            "title": "IPC",
            "dataProvider": ipc_fill,
            "categoryField": "date"
        }],
        "panels":
            [{
                "showCategoryAxis": true,
                // "title": "Value",
                // "percentHeight": 70,

                "stockGraphs": [{
                    "id": "g1",
                    "valueField": "value",
                    // "type": "smoothedLine",
                    "lineThickness": 1,
                    // "bullet": "round"
                    "comparable": true,
                    "compareField": "value",
                }],
                "stockLegend": {
                    "valueTextRegular": " ",
                    "markerType": "square"
                }
            },
                // {
                //     "title": "Volume",
                //     "percentHeight": 30,
                //     "stockGraphs": [{
                //         "valueField": "volume",
                //         "type": "column",
                //         "cornerRadiusTop": 2,
                //         "fillAlphas": 1
                //     }
                //     ],
                //
                //     "stockLegend": {
                //         "valueTextRegular": " ",
                //         "markerType": "none"
                //     }
                // }
            ],
        "chartScrollbarSettings":
            {

                "graph": "g1",
                // "usePeriod": "10mm",
                // "position": "bottom",
            },
        "chartCursorSettings":
            {
                "valueBalloonsEnabled":
                    true,
                // "categoryBalloonDateFormats": [{period: "DD", format: "MMM DD, YYYY"}]
                "categoryBalloonDateFormats":
                    [{period: "YYYY", format: "YYYY"}, {
                        period: "MM",
                        format: "MMM, YYYY"
                    }, {period: "WW", format: "MMM DD, YYYY"}, {period: "DD", format: "MMM DD, YYYY"}, {
                        period: "hh",
                        format: "JJ:NN"
                    }, {period: "mm", format: "JJ:NN"}, {period: "ss", format: "JJ:NN:SS"}, {
                        period: "fff",
                        format: "JJ:NN:SS"
                    }]
            },
        // "periodSelector":
        //     {
        //         "fromText": "Desde:",
        //         "toText": "Hasta:",
        //         "periodsText": "Periodo:",
        //         "position":
        //             "top",
        //         "dateFormat":
        //             "YYYY-MM-DD",
        //         // "inputFieldWidth": 150,
        //         "periods":
        //             [{
        //                 "period": "MM",
        //                 "count": 1,
        //                 "label": "1 mes"
        //             }, {
        //                 "period": "MM",
        //                 "count": 3,
        //                 "selected": true,
        //                 "label": "3 meses"
        //             }, {
        //                 "period": "MM",
        //                 "count": 6,
        //                 "label": "6 meses"
        //             }, {
        //                 "period": "YYYY",
        //                 "count": 1,
        //                 "label": "1 año"
        //             }, {
        //                 "period": "MAX",
        //                 "label": "Todo",
        //             }]
        //     }
        // ,
        "panelsSettings":
            {
                "usePrefixes":
                    true
            }
        ,
    });
}

