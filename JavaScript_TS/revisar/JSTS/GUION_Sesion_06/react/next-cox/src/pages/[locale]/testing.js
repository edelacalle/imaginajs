import {getStaticPaths,getStaticProps,getLang,t2} from '@/lib/i18n';
import {Layout} from '@/components/Bootstrap/Layout/Layout';

import Link from 'next/link';


const  oBody = function (props){
  var aLang = getLang(props.locale);
  return <>
    <p>Zona de testeo</p>
    <button className={"button"} >
      <a href={"test/carrusel"}>Pruebas con el Carrusel</a>
    </button>
    <button className={"button"} >
      <a href={"test/sendmail"}>Pruebas con el Sendmail</a>
    </button>
  
    <button className={"button"} >
      <a href={"test/calendar"}>Pruebas Calendar</a>
    </button>
    <button className={"button"} >
      <a href={"test/coxa"}>Pruebas COXA</a>
    </button>


    
  </>
  
}

export default function Index(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
  }
 
export { getStaticPaths, getStaticProps }