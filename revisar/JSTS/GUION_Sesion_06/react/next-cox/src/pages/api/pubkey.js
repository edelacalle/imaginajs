// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
    runtime: 'edge',
  }
  
  export default async function handler(req) {
    var pp = await fetch("https://porfolio.armonia.ltd/pubkey")
    var kk= await pp.json();
    return new Response(JSON.stringify(kk));
  }