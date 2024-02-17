
import styles from './Layout.module.css'

import { Container, Nav,Navbar } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Image from 'next/image';
import { useRouter } from 'next/router';

import { t,t2, LanguageSwitchLink}  from "@/lib/i18n";
import { useEffect } from "react";



const Ticker = (props) => {
    return (
        <Container className="cai-ticker d-none d-md-block">
            <Row >
                <Col>
                <p className="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
            
                </Col>
                
            </Row>
            <Row >
                <Col>
                <a href="la-accion.html"> <img width="50px" height="17px" src="../static/images/logo-de-biva.svg" alt="" /></a>
                <p className="mb-0">Ticker: <span className="text-black" style={{"fontWeight": "bold", "fontSize":"12px"}}>COXA<sup>*</sup></span></p>

                </Col>
                <Col>
                <a href="la-accion.html"> 
                <img width="50px"  height="25px" src="../static/images/logo_BME.svg" alt="" /></a>
                <p className="mb-0">Ticker: <span className="text-black" style={{"fontWeight": "bold", "fontSize":"12px"}}>COX</span></p>

                </Col>
                
            </Row>
        
        </Container>

        
    )
}

const Header = (props) =>{
    const router = useRouter();
    useEffect(() => {
        console.log("en usseeffect header ")
    
      }, []);
    return(
        <Navbar  expand={"xl"} className="cox-background">
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src="../static/images/cox-logo-blanco.png"  alt="logo"></img>
                </Navbar.Brand>
              
                <Navbar.Collapse>
                    <Nav >
                        {(props.menutop && props.menutop.map((l,i)=>< Nav.Link 
                            key={`l_${i}`}
                            active={router.asPath==l.href}
                            href={l.href} 
                            bsPrefix={styles.caiLink}>
                                {t(props.locale,l.title,"menutop")}
                            </Nav.Link>))}
                         
                            
                    </Nav>
                    <LanguageSwitchLink locale="en" />
                    <LanguageSwitchLink locale="es" />
                   
                </Navbar.Collapse>
                <Ticker/>

                <Navbar.Toggle />
            </Container>
        
        </Navbar>
    )
}

const xHeader = (props) =>{
    //const router = useRouter();
    return(
        <header id="header" className="header default">
            <div className="menu">
                <nav id="menu" className="mega-menu">
                    <div className="menu-list-items">
                        <div className="container p-0">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 d-flex align-items-center justify-content-between menu-active">
                                    <ul className="menu-logo">
                                        <li>
                                            <a href="index.htm"><img id="logo_img" src="../static/images/cox-logo-blanco.png" alt="logo" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="menu-bar">

                                        <ul className="menu-links first-block">

                                            <li className="nav-item nav-item-anim-icon d-inline d-sm-none">











                                                <a className="nav-link pl-2" href="#">
                                                    <i className="fa fa-search"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a className="text-center active" href="acerca-de.html">Grupo Cox</a>
                                            </li>
                                            <li>
                                                <a className="text-center " href="proyectos-pais.html"> Proyectos</a>
                                            </li>
                                            <li>
                                                <a className="text-center " href="suministradora.html">Ibergy</a>
                                            </li>
                                            <li>
                                                <a className="text-center " href="coxenergy.html">Inversores COXA</a>
                                            </li>
                                            <li>
                                                <a className="text-center " href="esg.html">ASG </a>
                                            </li>
                                            <li>
                                                <a href="la-accion.html" className=" d-inline d-md-none text-center justify-content-center"><div className="menu-ticker d-lg-flex flex-column align-items-center" style={{"margin": "auto"}}>
                                                    <p className="mb-0 text-center">Cox Energy America S.A.B. de C.V. <br/>Listed on:</p>
                                                    <div className="d-flex justify-content-center"><img width="50px" height="50px" src="../static/images/logo-de-biva.svg" alt=""/></div>
                                                                                <p className="mb-0">Ticker: <span className="text-black" style={{"font-weight": "bold",  "font-size": "12px"}}>COXA<sup>*</sup></span>
                                                                                </p>
                                                </div></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menu-bar hide-mobile">
                                        <ul className="menu-links d-flex align-content-center" style={{"display": "flex!important","align-items": "center"}}>
                                            <li data-toggle="modal" data-target="#modalSearch" style={{"display":"none"}} className="nav-item nav-item-anim-icon">
                                                <a className="nav-link pl-2" href="#">
                                                    <i className="fa fa-search"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item nav-item-anim-icon">
                                                
                                                    <a className="pl-2 btn standard center-block pt-1 pb-1" href="/en/acerca-de.html">
                                                        EN
                                                    </a>
                                                
                                            </li>
                                            
                                            
                                            
                                            
                                        </ul>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    <div className="menu-ticker d-none d-lg-flex flex-column align-items-center">
                                        <p className="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
                                        <a href="la-accion.html"> <img width="50px" src="../static/images/logo-de-biva.svg" alt=""/></a>
                                        <p className="mb-0">Ticker: <span className="text-black" style={{"font-weight": "bold", "font-size": "12px"}}>COXA<sup>*</sup></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="contactModal" className="modal">
                <div className="modal-dialog " style={{"max-width": "820px" ,"margin-top": "150px"}}>

                    <div className="modal-content">
                        <div className="modal-head p-2">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row mb-3">
                                <div className="col-12 text-center">
                                    <h2 className="text-center m-auto">Contrata con nosotros tu energía</h2>
                                </div>
                            </div>

                            <div className="row d-flex ">

                                <div className="col-6 text-center align-self-center">

                                    <a href="https://www.nexusenergia.mx/ ">
                                        <img src="../static/images/nexus.jpg?v=1.0" alt=""/>
                                    </a>
                                </div>
                                <div className="col-6  text-center align-self-center">

                                    <a href="https://www.coxenergy.es/">
                                        <img src="../static/images/logo.svg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-6 text-center">
                                    <h3>México</h3>
                                </div>
                                <div className="col-6 text-center">
                                    <h3>España</h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

const FooterAdmin = (props) =>{
    return(

        <Container fluid  className="footer">
        <div className="row">
            <div className="col-12">
                <div className="footer-logo d-flex align-items-center">
                    <img id="logo-footer" className="mr-3" src="../static/images/logo_color.svg" alt="Logo" title="logo" style={{"width":"auto","height":"40px"}} />
                </div>
            </div>
            <div className="col-md-4 col-sm-6 sm-mb-30">
                <div className="footer-useful-link footer-hedding">
                    <h6 className="mt-10 mb-3"><span className="border-bottom">{t(props.locale,'#Grupo_Cox','menutop')}</span></h6>
                    <ul className="mb-4">
                        <li><a target="_blank" href="acerca-de.html">{t(props.locale,'#acercade','footer')}</a></li>
                        <li><a target="_blank" href="historia.html">{t(props.locale,'#historia','footer')}</a></li>
                        <li><a target="_blank" href="cadena-valor.html">{t(props.locale,'#cadenadevalor','footer')}</a></li>
                        <li><a target="_blank" href="panorama-sectorial.html">{t(props.locale,'#panoramaindustria','footer')}</a></li>
                        <li><a target="_blank" href="articulos-interes.html">{t(props.locale,'#articulosdeinteres','footer')}</a></li>
                    </ul>

                    <h6 className="mt-10 mb-3"><span className="border-bottom">Negocio</span></h6>
                    <ul>
                        <li><a target="_blank" href="proyectos-pais.html">Portafolio 2025</a></li>
                        <li><a target="_blank" href="proyectos-etapa.html">Proyectos reportados al 1T-2023</a></li>
                        <li><a target="_blank" href="proyectos-relevantes.html">Proyectos Relevantes</a></li>
                        <li><a target="_blank" href="clasificacion-proyectos.html">Clasificación de Proyectos</a></li>
                        <li><a target="_blank" href="glosario.html">Glosario</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 xs-mb-30">
                <div className="footer-useful-link footer-hedding">
                    <h6 className="mt-10 mb-3"><span className="border-bottom">Inversores COXA</span></h6>
                    <ul className="">
                        <li><a target="_blank" href="coxenergy.html">Cox Energy</a></li>
                        <li><a target="_blank" href="la-accion.html">La Acción</a></li>
                        <li><a target="_blank" href="centro-reportes.html">Centro de Reportes</a></li>
                        <li><a target="_blank" href="gobierno-corporativo.html">Gobierno Corporativo</a></li>
                        <li><a target="_blank" href="directivos.html">Equipo Directivo</a></li>
                        <br />
                    </ul>

                    <h6 className="mt-10 mb-3"><span className="border-bottom"><a target="_blank" href="esg.html">ASG </a></span></h6>
                    <h6 className="mt-10 mb-3"><span className="border-bottom">
                        <a target="_blank" href="coxa-medios.html">Sala de Prensa</a></span>
                    </h6>
                    <h6 className="mt-10 mb-3"><span className="border-bottom">
                        <a target="_blank" href="aviso-legal2.html">Aviso Legal</a>
                    </span></h6>

                </div>
            </div>

            <div className="col-lg-4 col-sm-12 xs-mb-30">

                <a target="_blank" href="empleo.html">
                    <div className="custom-bg mb-2 border-empleo d-flex align-items-center justify-content-between">
                        <div>
                            <h6 className="mb-0" style={{"margin-top":"-5px"}} >Únete a Nuestro Equipo</h6>
                            
                        </div>
                        <img width="50px" src="../static/images/cv.png" alt="" />
                    </div>
                </a>
                <div className="custom-bg mb-3 border-radius-10">
                    <h6 style={{"margin-top":"-5px"}}>Contacto</h6>

                    <div className="footer-logo ">
                        <i className="fa fa-map-marker mr-2"></i>
                        
                            Montes Urales 415, Lomas de Chapultepec II Sección, Alc. Miguel Hidalgo. C.P. 11000, CDMX,
                            México.
                        
                    </div>
                    <div className="footer-logo ">
                        <a target="_blank" href="mailto:info@coxenergy.com" className="mr-5" >
                            <i className="fa fa-envelope mr-2"></i>info@coxenergy.com
                        </a>
                        <br /> <a target="_blank" href="tel:+525573163174"><i className="fa fa-phone mr-2"></i>+52 55 7316 3174</a>
                    </div>
                </div>
                <div className="mb-2 d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">Síguenos</h6>
                    <a target="_blank" href="https://twitter.com/Cox_Energy" className="redes">
                        <img width="30px" src="../static/images/twitter.png" alt="" />
                    </a>
                    <a className="redes" target="_blank" href="https://www.linkedin.com/company/cox-energy-america">
                        <img width="30px" src="../static/images/linkedin.png" alt="" />
                    </a>
                    <a className="redes" target="_blank" href="https://www.instagram.com/coxenergy/?hl=es">
                        <img width="30px" src="../static/images/instagram.png" alt="" />
                    </a>
                    <a className="redes" target="_blank">
                        <img src="../static/images/ibergy.svg" alt="" width="100px" />
                    </a>
                </div>
            </div>
            <div className="col-12 mt-3 text-center">
                <div className="d-flex flex-column justify-content-center align-items-center">

                    <a target="_blank" href="contacto.html" className="btn standard center-block" style={{"width":"150px"}} role="button" aria-label="Learn More">Contáctenos</a>
                </div>
            </div>
        </div>

        <div className="footer-widget ">
            <div className="row">
                <div className="col-lg-12 col-md-12 xs-mb-20">
                    <p className="mt-15 text-center"> &copy;Copyright <span id="copyright"> </span>
                        ® Cox Energy | Todos los Derechos Reservados | <a href="aviso-legal.html">
                            Términos y Condiciones</a>
                        |
                        <a target="_blank" href="aviso-privacidad-confiabilidad.html">Aviso de Privacidad y Confiabilidad</a>
                        | <a target="_blank" href="conciencia-fraude.html">Conciencia sobre fraudes</a>
                        | <a target="_blank" href="politica-cookies.html">Política de cookies</a>
                    </p>
                </div>
            </div>
        </div>
    
    </Container>


    )
}
const BodyAdmin = (props) =>{
    /*
    return(
    <Container fluid >
      {props.body}
    </Container>
    )
    */
    return(
        <div className='wrapper' >{props.body}</div>
    )
}

export function Layout(props) {
    return (
    <Container fluid>
        <Row >
            <Col xs={12} ><Header {...props} /></Col>
            <Col xs={12} ><BodyAdmin   {...props} /></Col>
            <Col xs={12} ><FooterAdmin {...props} /></Col>
        </Row>
    </Container>

    )


}