import { useRef, useState } from "react";

import {getStaticPaths,getStaticProps,getLang,t2} from '@/lib/i18n';

import {Layout} from '@/components/Bootstrap/Layout/Layout';
import {Row,Col,Modal} from 'react-bootstrap';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import allLocales from '@fullcalendar/core/locales-all';

const  oBody = function (props){
  var aLang = getLang(props.locale);
  const events = require('#/data/'+props.locale+'.eventos.json');
  const calendarRef = useRef(null);
  const [event, setEvent] = useState({show:false, title:"", url:""});
  const handleClose = () => setEvent({show:false,title:""});

  const openEvent = (arg) => {
    arg.jsEvent.preventDefault() ;
    setEvent({show:true, title:arg.event.title, description: arg.event.extendedProps.description })
  };

  return (
    <>
     <Modal show={event.show} onHide={handleClose}   backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{event.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div dangerouslySetInnerHTML={{__html: event.description}} /></Modal.Body>
      </Modal>
    
    
    <Row>
      <Col xs={4}></Col>
      <Col xs={4}>
      <FullCalendar
        eventClick={openEvent}
        initialView="dayGridMonth"
        themeSystem="bootstrap5"
        plugins={[bootstrap5Plugin ,dayGridPlugin]}
        views={{
          dayGrid: {
            // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
            titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
            weekends: false

          },
          timeGrid: {
            // options apply to timeGridWeek and timeGridDay views
            titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }

          },
          week: {
            // options apply to dayGridWeek and timeGridWeek views
            titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
          },
          day: {
            // options apply to dayGridDay and timeGridDay views
            titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }

          }
      }}
      locales={allLocales} 
      locale={props.locale}
      events={events}
      innerRef={calendarRef}
     
    />
      </Col>
      <Col xs={4}></Col>
    </Row>
    </>
  );
};

export default function Calendar(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
  }


export { getStaticPaths, getStaticProps }