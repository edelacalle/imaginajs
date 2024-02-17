// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
    runtime: 'edge',
  }
  
  export default async function handler(req) {
    var res = await fetch("https://query1.finance.yahoo.com/v8/finance/chart/COXA.MX?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance")
    var jRes= await res.json();
    if(jRes && jRes["chart"] && jRes["chart"]["result"] && jRes["chart"]["result"][0]["meta"] && jRes["chart"]["result"][0]["meta"]["regularMarketPrice"] ){
      var sRes = jRes["chart"]["result"][0]["meta"]["regularMarketPrice"]
    }else{
      var sRes = "";
    }
    return new Response(sRes);
  }