import {i18n, getStaticPaths as pStatic , getLang}  from "@/lib/i18n";

import {getSlugsbyAxiosAPICall , getPostAxiosAPICall  } from '@/lib/hygraph_cms';

import { Layout } from "@/components/Bootstrap/Layout/Layout";
import Card from 'react-bootstrap/Card';

import { useEffect , useState} from "react";


import ListGroup from 'react-bootstrap/ListGroup';

const  oBody = function (data, lang ){
  const [title,setTitle] = useState('');
  const [subtitle,setSubTitle] = useState('');
  const [body,setBody] = useState('');

  useEffect(() => {
    setTitle(data.title ||'a')
    setSubTitle(data.subtitle ||'b')
    setBody(data.content ||'c')
  }, []);

 
  if(!data) return <Card><Card.Header>Noticia not found</Card.Header></Card>

  return(
    <Card >
      <Card.Header>{lang["common"]["news"]}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{subtitle}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{__html: body }}></Card.Text>  
      </Card.Body>
    </Card>
  );

}  




export default  function Noticia(props) {
  var auxBody = oBody(props.payload , props.lang );
  return <Layout body={auxBody}  {...props} />
}


export async function getStaticPaths (){
  const aIds = await getSlugsbyAxiosAPICall();
  //const aIds = ["uno","dos"];
  let paths = [];
  i18n.locales.map((lng)=> aIds.map((p)=>paths.push({ params:{"locale":lng, "noticia":p }})));
  return {
    fallback:false,
    paths:paths
  }
}

  export async function getStaticProps(ctx) {
    var post2 =  await getPostAxiosAPICall (ctx.params.noticia);
    console.log("y ahora ", post2);
    //var post2 = {"title":"uno", "subtitle":"dos", "slug":"uno"}
    if(!post2) return {props:{}}
   
    return {
      props:{
        locale: ctx.params.locale,
        lang: getLang(ctx.params.locale),
        payload: post2[ctx.params.locale]
      }
    }
  }