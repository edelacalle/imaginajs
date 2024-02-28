var jData = {};

$(document).ready(function(){
	console.log("Cargamos los componentes");
	$.get( "https://api.manz.es/cox/MARKET.json", function( data ) {
		jData = data;
		console.log(jData);
	       // $("#cox_last").text(jData["last"]);
		//$("#cox_marketCap").attr("data-to",jData["marketCap"]);

		//alert("stop");
	});
});


function version(){
	alert("Cox V:1.0");
}
