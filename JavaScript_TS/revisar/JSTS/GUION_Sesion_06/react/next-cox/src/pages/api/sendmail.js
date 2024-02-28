
  const endpoint = "https://sendmail.informatica1503.workers.dev" 
  //const endpoint = "http://127.0.0.1:8787" 
                  
  export const config = {runtime: 'edge'}
  

  export  default async function handler(req) {
    var payload;
    for await (const chunk of req.body.values({ preventCancel: true })) {
      payload= new TextDecoder().decode(chunk);
      break;
    }
    try {
      var res = await fetch(endpoint,{
        headers: {
          'Content-Type': 'application/json',
          "rejectUnauthorized": false,
          "strictSSL": false
        },
        body: payload,
        method: req.method
      });
      return new Response(JSON.stringify( await res.json() ));
      //return new Response(await res.text() , {status:res.status});
      
      /*
        console.log("antes", res.status);
      console.log("otro antes", res.statusText);
      let jAux = await res.text()
      //return new Response(JSON.stringify(jAux), {status:200});
      console.log("lo ha enviado pero ", jAux)
      return new Response(await res.text() , {status:200});
      */
    } catch (error) {
      console.log("y el error", error)
      return new Response(JSON.stringify({status:"ERR", message:error }), {status:500});
    }
  }

 