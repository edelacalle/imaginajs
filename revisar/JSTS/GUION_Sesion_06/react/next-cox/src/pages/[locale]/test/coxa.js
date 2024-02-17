import {getStaticPaths,getStaticProps} from '@/lib/i18n';
import {useState, useEffect } from 'react';
import {Layout} from '@/components/Bootstrap/Layout/Layout';


const  oBody =  function (props){
  const cfg = require('#/data/config.json');
  //console.log("props es ", props)
  //console.log("cfg es ", cfg );

  const [acc    , setAcc]     = useState(0);
  const getdata = async () =>{
    var res = await fetch(cfg.api.coxa);
    var jRes = await res.json();
    setAcc(jRes)
  }

  useEffect(function() {
    getdata()
  },[]);

  return <>
      <p>pruebas coxa {acc}</p>   
      <button onClick={()=>getdata()}>test</button>
  </>
  
}

export default function COXA(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
  }
 
export { getStaticPaths, getStaticProps }