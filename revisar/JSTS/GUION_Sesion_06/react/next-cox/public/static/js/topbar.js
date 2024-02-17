$(function () {
/*
    $.ajax({
      //  url: 'https://hkpy.irstrat.com/intradia/2837',
	// url: 'https://api.manz.es/cox/COXA.json',
	url: 'https://api.manz.es/cox/resume',

	//url: '/data/RESUME.json',
        async: false,
        dataType: 'jsonp',
        contentType: "application/json",
        success: function (json) {
            var coxa = {
                precio: json.intradia.price,
                change: json.intradia.change,
                percent: json.intradia.percent,
            };
            pintar(coxa);
        }
    });
*/

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function pintar(coxa) {
        $('#precio').html('');
        // $('#precio').html("$" + coxa.precio);
        var moneda = " MEX$ "
        if(locale == "es"){
            moneda = ' MXN '
        }
        if (parseFloat(coxa.change) >= 0) {
            $('#precio').append('<i class="fa fa-arrow-up tc-green"></i> ' + coxa.precio + moneda + '<span class="tc-green">(' + coxa.percent + '%)</span>')
        } else {
            $('#precio').append('<i class="fa fa-arrow-down tc-red"></i> ' + coxa.precio + moneda + '<span class="tc-red">(' + coxa.percent + '%)</span>')
        }

        // if (coxa.change.toString()[0] == '-') {
        //     $('#change').attr('style', 'color: #ff3c3c');
        // } else {
        //     $('#change').attr('style', 'color: #090');
        // }
        //
        // if (coxa.percent.toString()[0] == '-') {
        //     $('#percent').attr('style', 'color: #ff3c3c');
        // } else {
        //     $('#percent').attr('style', 'color: #090');
        // }
    }
});
