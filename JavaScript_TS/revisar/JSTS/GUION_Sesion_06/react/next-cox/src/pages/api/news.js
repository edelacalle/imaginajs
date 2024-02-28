// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
    runtime: 'edge',
  }
  
  export default async function handler(req) {
    //var res = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/COXA.MX?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance")
    //var jRes= await res.json();
    //if(jRes && jRes["chart"] && jRes["chart"]["result"] && jRes["chart"]["result"][0]["meta"] && jRes["chart"]["result"][0]["meta"]["regularMarketPrice"] ){
    //  var sRes = jRes["chart"]["result"][0]["meta"]["regularMarketPrice"]
    //}else{
    //  var sRes = "";
    //}
    //return new Response(sRes);
    var jRet = {
      "title":"Cox en los Medios",
      "link":"https://coxenergy.sharepoint.com/:u:/s/pubdoc/EXK7aj6_Bi1Ln6Qp3E7kTMcBqQKh05ERgYR4CyDjqO5Thg?e=fL8KQv",
      "news":[
        {
          "date":"25/03/2023",
          "font":"Diario de Sevilla",
          "slug":"uno",
          "locale":{
            "es":{
              "title":"Nuestra oferta no sólo es la mejor, sino la única industrial por Abengoa",
              "subtitle":"subtitulo",
              "body":"cuerpo"
            },
            "en":{
              "title":"Our offer is not only the best, but the only industrial one for Abengoa",
              "subtitle":"subtitle",
              "body":"body"
            }
          }
          
        },
        {
          "date":"26/03/2023",
          "font":"Diario de Madrid",
          "slug":"dos",
          "locale":{
            "es":{
              "title":"Segunda noticia",
              "subtitle":"subtitulo noticia 2",
              "body":"cuerpo 2"
            },
            "en":{
              "title":"Second news",
              "subtitle":"subtitle new2 ",
              "body":"body 2"
            }
          }
          
        }

      ]
    }
    return new Response(JSON.stringify(jRet)) 

    
  }