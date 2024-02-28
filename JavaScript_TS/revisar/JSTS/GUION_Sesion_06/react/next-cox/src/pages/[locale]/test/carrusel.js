import {getStaticPaths,getStaticProps} from '@/lib/i18n';
import {Layout} from '@/components/Bootstrap/Layout/Layout';
import { Carrusel } from '@/components/Bootstrap/Carrusel/Carrusel';


const  oBody = function (props){
  return <>
      <Carrusel />   
  </>
  
}

export default function TestCarrusel(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
  }
 
export { getStaticPaths, getStaticProps }