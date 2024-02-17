import {getStaticPaths,getStaticProps,getLang,t} from '@/lib/i18n';

import { useState } from 'react';

import {Layout} from '@/components/Bootstrap/Layout/Layout';
import {Card,Button,Form,Alert} from 'react-bootstrap';


const  oBody = function (props){
 // var aLang = getLang(props.locale);

  const [showError , setShowError ] = useState(false)
  const [showSuccess , setShowSuccess ] = useState(false)
  const [msg , setMsg ] = useState("");

  const [validated, setValidated] = useState(false);

  const [from , setFrom ] = useState("");
  const [subject , setSubject ] = useState("");

  const sendmail = async (form) =>{
    const data = {
      from: form.from.value,
      subject: form.subject.value
    }
    const settings = {
      body: JSON.stringify(data),
      method: "POST"
    }
    var res = await fetch("/api/sendmail", settings);
    var jRes = await res.json();
    if(jRes.status=="+OK"){
      // setMsg( t("Email sent",aLang,"forms"))
      setShowError(false);
      setShowSuccess(true);
    }else{
      setMsg(jRes.payload)
      setShowError(true);
      setShowSuccess(false);
    }

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      sendmail(form)
    }
    setValidated(true);
  };



  return (





    <Card className='p-1 m-1'>
      <Card.Header>{'t("Contact form",aLang,"forms")'}</Card.Header>
      <Card.Body>
        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label className={'text-capitalize'}>{'t("from",aLang)'}:</Form.Label>
            <Form.Control as="input" required value={from} onChange={(e)=>setFrom(e.target.value)} name="from" autoFocus />
            <Form.Control.Feedback type="invalid">{'t("You must provide a valid email",aLang,"forms")'}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label className={'text-capitalize'} >{'t("subject",aLang)'}</Form.Label>
            <Form.Control as="textarea" required rows={6} value={subject} onChange={(e)=>setSubject(e.target.value)} name="subject" />
            <Form.Control.Feedback type="invalid">{'t("You must provide your request for information",aLang,"forms")'}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="success" type="submit" className={'text-capitalize'} >{'t("send",aLang)'}</Button>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Alert variant='danger' className={(showError)?'visually-block':"visually-hidden"} >{msg}</Alert>
        <Alert variant='success' className={(showSuccess)?'visually-block':"visually-hidden"} >{msg}</Alert>
      </Card.Footer>
    </Card>
  )
}


export default function Sendmail(props) {
  var merge = {...props , body:oBody(props)}
  return <Layout {...merge } />
}
 
export { getStaticPaths, getStaticProps }