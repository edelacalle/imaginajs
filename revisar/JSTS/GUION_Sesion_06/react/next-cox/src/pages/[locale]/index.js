import {getStaticPaths,getStaticProps,getLang,t2} from '@/lib/i18n';
import {Layout} from '@/components/Bootstrap/Layout/Layout';

import { Carrusel } from '@/components/Bootstrap/Carrusel/Carrusel';

const cfgCarr = require('#/data/carrusel.json');


const  oBody = function (props){
  var merge = {...props , carrusel:cfgCarr}
  
  return(
    <>
       <Carrusel { ...merge }  />   
    </>
  )
  
}

export default function Index(props) {
  var merge = {...props , body:oBody(props) }
  
  return <Layout {...merge } />
  }
 
export { getStaticPaths, getStaticProps }