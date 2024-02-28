import {getStaticPaths,getStaticProps,t} from '@/lib/i18n';
import {Layout} from '@/components/Bootstrap/Layout/Layout';

import {Clock} from '@/components/Clock/Clock';

import { useEffect, useState } from 'react';

import {Card , ListGroup, Spinner} from 'react-bootstrap';

const sIni = '2023-01-01T00:00';
const dIni = new Date(sIni);
const Emis_Arbol = 20 ; 
const Emis_KM = 120;
const Emis_CO2 = 259;
const consumo = 10 ;


const  oBody = function (props){
  const [obj, setObj] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      var d = new Date();
      var nHoras = ( d-dIni) / 1000 / 60 / 60;
      var cAcum = nHoras * consumo;
      var cCO2 = (cAcum * Emis_CO2 ) / 1000
      var cKM = ( cCO2 / Emis_KM ) * 1000 ;
      var cArbol = cCO2 / Emis_Arbol ;
      setLoading(true);
      setObj({
        date:d.toISOString(),
        hAcum: nHoras,
        cAcum: cAcum ,
        co2: cCO2,
        km: cKM,
        arboles: cArbol
      })
    }, 1000 );
    return () => clearInterval(interval);
  }, []);

  if(!loading){
    return <Card className={"centered"}>
        <Card.Body >
          <Spinner animation="border" variant="primary" />
        </Card.Body>
      </Card>
  }
  

  return(
    <Card>
      <Card.Header  suppressHydrationWarning ><Clock /></Card.Header>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item><b>Fecha: </b>{obj.date.substring(0,10)}</ListGroup.Item>
          <ListGroup.Item><b>Consumo:</b> {obj.cAcum.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item><b>CO2:</b> {obj.co2.toFixed(4)}</ListGroup.Item>
          <ListGroup.Item><b>KM:</b> {obj.km.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item><b>Arboles:</b> {obj.arboles.toFixed(4)}</ListGroup.Item>
        </ListGroup>

      </Card.Body>
      <Card.Footer>
          

      </Card.Footer>
    </Card>
  )
  
}

export default function Monitor(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
  }
 
export { getStaticPaths, getStaticProps }