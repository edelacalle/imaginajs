import {getStaticPaths,getStaticProps,t} from '@/lib/i18n';
import {Layout} from '@/components/Bootstrap/Layout/Layout';

const  oBody = function (props){
  //var aLang = getLang(props.locale);
  //console.log("oBody3", props)
  return(
    <>
      <p>{t(props.locale,'acerca')} </p>
      <button className={"button"}>button1</button>
    </>
  )
  
}

export default function Acerca(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
  }
 
export { getStaticPaths, getStaticProps }