import {  getLang , getStaticPaths,t}  from "@/lib/i18n";

var jConfig = require('@/lib/caiconfig.js');

import { Layout } from "@/components/Bootstrap/Layout/Layout";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { getPostsyAxiosAPICall } from '@/lib/hygraph_cms'
/*
      
*/
const  oBody = function (aNews , locale ){
  // var oLang = getLang(locale)
  return(
    <Card >
      <Card.Header><div>{'t("news",oLang)'}</div></Card.Header>
      <Card.Img variant="top" src="/images/Header-Sala-prensa.png" />
      <Card.Body>
        <ListGroup>
          {aNews.map((n) => 
            <ListGroup.Item key={"n_"+n.slug} action href={"noticias/"+ n.slug }>
              {n.title}
          </ListGroup.Item>)}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}  

export default  function Noticias(props) {
  var merge = {...props , body:oBody(props.payload , props.locale )}
  return <Layout  {...merge }/>
}

async function getStaticProps( ctx ) {
  //var news = await fetch(jConfig.endpoint);
  var notis = await getPostsyAxiosAPICall(ctx.params.locale);
  console.log("posts", notis.data.posts )
  return {
    props:{
      locale: ctx.params.locale,
      payload: notis.data.posts
    }
  }
}

export { getStaticPaths, getStaticProps }


