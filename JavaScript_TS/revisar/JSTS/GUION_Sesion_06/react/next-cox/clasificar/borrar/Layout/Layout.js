
import styles from '../Bootstrap/Layout/Layout.module.css'

import { Container, Nav,Navbar } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Image from 'next/image';
import { useRouter } from 'next/router';

import { t, LanguageSwitchLink}  from "@/lib/i18n";

/*
    <Navbar.Text>{t((props.header && props.header.title) ? props.header.title :'' ,props.lang)}</Navbar.Text>
 <Nav>
                        {(props.header && props.header.links && props.header.links.map((l,i)=>< Nav.Link 
                            key={`l_${i}`}
                            active={router.asPath==l.href}
                            href={l.href} 
                            bsPrefix={styles.caiLink}>
                                {t(l.title,props.lang)}
                            </Nav.Link>))}
                        <LanguageSwitchLink locale="en" />
                        <LanguageSwitchLink locale="es" />
                    </Nav>


    <div class="menu-ticker d-none d-lg-flex flex-column align-items-center">
                            <p class="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br>cotiza en:</p>
                            <a href="la-accion.html"> <img width="50px" src="../static/images/logo-de-biva.svg" alt=""></a>
                            <p class="mb-0">Ticker: <span class="text-black" style="font-weight: bold; font-size: 12px;">COXA<sup>*</sup></span>
                            </p>
                        </div>



<p className="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
            <a href="la-accion.html"> <img width="50px" src="../static/images/logo-de-biva.svg" alt="" /></a>
            <p className="mb-0">Ticker: <span class="text-black" style="font-weight: bold; font-size: 12px;">COXA<sup>*</sup></span></p>

  


*/

/*
const Ticker = (props) => {
    return (
        <div className="ticker">
            <p className="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
            <a href="la-accion.html"> <img width="50px" src="../static/images/logo-de-biva.svg" alt="" /></a>
            <p className="mb-0">Ticker: <span class="text-black" style={{"font-weight": "bold", "font-size":"12px"}}>COXA<sup>*</sup></span></p>
        </div>
    )
}

<div className="ticker">
            <p className="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
            <a href="la-accion.html"> <img width="50px" src="../static/images/logo-de-biva.svg" alt="" /></a>
            <p className="mb-0">Ticker: <span class="text-black" style={{"font-weight": "bold", "font-size":"12px"}}>COXA<sup>*</sup></span></p>
        </div>
*/

const Ticker = (props) => {
    return (
        <Container className="cai-ticker">
            <Row >
                <Col>
                <p className="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
            
                </Col>
                
            </Row>
            <Row >
                <Col>
                <a href="la-accion.html"> <img width="50px" height="17px" src="../static/images/logo-de-biva.svg" alt="" /></a>
                <p className="mb-0">Ticker: <span class="text-black" style={{"font-weight": "bold", "font-size":"12px"}}>COXA<sup>*</sup></span></p>

                </Col>
                <Col>
                <a href="la-accion.html"> <img width="50px" height="17px" src="../static/images/logo_BME.svg" alt="" /></a>
                <p className="mb-0">Ticker: <span class="text-black" style={{"font-weight": "bold", "font-size":"12px"}}>COX</span></p>

                </Col>
                
            </Row>
        
        </Container>

        
    )
}

const Header = (props) =>{
    const router = useRouter();
    return(
        <Navbar  className={styles.caiBackground}>
            <Container fluid>
                <Navbar.Brand href='/'>
                    <img src="../static/images/cox-logo-blanco.png"  alt="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        {(props.menutop && props.menutop.map((l,i)=>< Nav.Link 
                            key={`l_${i}`}
                            active={router.asPath==l.href}
                            href={l.href} 
                            bsPrefix={styles.caiLink}>
                                {t(l.title,props.lang)}
                            </Nav.Link>))}
                            <Ticker />
                    </Nav>
                 
                   
                </Navbar.Collapse>
              
            </Container>
        </Navbar>
    )
}

const xHeader = (props) =>{
    //const router = useRouter();
    return(
        <header id="header" class="header default">
            <div class="menu">
                <nav id="menu" class="mega-menu">
                    <div class="menu-list-items">
                        <div class="container p-0">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 d-flex align-items-center justify-content-between menu-active">
                                    <ul class="menu-logo">
                                        <li>
                                            <a href="index.htm"><img id="logo_img" src="../static/images/cox-logo-blanco.png" alt="logo" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="menu-bar">

                                        <ul class="menu-links first-block">

                                            <li class="nav-item nav-item-anim-icon d-inline d-sm-none">











                                                <a class="nav-link pl-2" href="#">
                                                    <i class="fa fa-search"></i>
                                                </a>
                                            </li>

                                            <li>
                                                <a class="text-center active" href="acerca-de.html">Grupo Cox</a>
                                            </li>
                                            <li>
                                                <a class="text-center " href="proyectos-pais.html"> Proyectos</a>
                                            </li>
                                            <li>
                                                <a class="text-center " href="suministradora.html">Ibergy</a>
                                            </li>
                                            <li>
                                                <a class="text-center " href="coxenergy.html">Inversores COXA</a>
                                            </li>
                                            <li>
                                                <a class="text-center " href="esg.html">ASG </a>
                                            </li>
                                            <li>
                                                <a href="la-accion.html" class=" d-inline d-md-none text-center justify-content-center"><div class="menu-ticker d-lg-flex flex-column align-items-center" style={{"margin": "auto"}}>
                                                    <p class="mb-0 text-center">Cox Energy America S.A.B. de C.V. <br/>Listed on:</p>
                                                    <div class="d-flex justify-content-center"><img width="50px" height="50px" src="../static/images/logo-de-biva.svg" alt=""/></div>
                                                                                <p class="mb-0">Ticker: <span class="text-black" style={{"font-weight": "bold",  "font-size": "12px"}}>COXA<sup>*</sup></span>
                                                                                </p>
                                                </div></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="menu-bar hide-mobile">
                                        <ul class="menu-links d-flex align-content-center" style={{"display": "flex!important","align-items": "center"}}>
                                            <li data-toggle="modal" data-target="#modalSearch" style={{"display":"none"}} class="nav-item nav-item-anim-icon">
                                                <a class="nav-link pl-2" href="#">
                                                    <i class="fa fa-search"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item nav-item-anim-icon">
                                                
                                                    <a class="pl-2 btn standard center-block pt-1 pb-1" href="/en/acerca-de.html">
                                                        EN
                                                    </a>
                                                
                                            </li>
                                            
                                            
                                            
                                            
                                        </ul>
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    <div class="menu-ticker d-none d-lg-flex flex-column align-items-center">
                                        <p class="mb-0 text-center">Cox Energy América S.A.B. de C.V. <br/>cotiza en:</p>
                                        <a href="la-accion.html"> <img width="50px" src="../static/images/logo-de-biva.svg" alt=""/></a>
                                        <p class="mb-0">Ticker: <span class="text-black" style={{"font-weight": "bold", "font-size": "12px"}}>COXA<sup>*</sup></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="contactModal" class="modal">
                <div class="modal-dialog " style={{"max-width": "820px" ,"margin-top": "150px"}}>

                    <div class="modal-content">
                        <div class="modal-head p-2">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-12 text-center">
                                    <h2 class="text-center m-auto">Contrata con nosotros tu energía</h2>
                                </div>
                            </div>

                            <div class="row d-flex ">

                                <div class="col-6 text-center align-self-center">

                                    <a href="https://www.nexusenergia.mx/ ">
                                        <img src="../static/images/nexus.jpg?v=1.0" alt=""/>
                                    </a>
                                </div>
                                <div class="col-6  text-center align-self-center">

                                    <a href="https://www.coxenergy.es/">
                                        <img src="../static/images/logo.svg" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-6 text-center">
                                    <h3>México</h3>
                                </div>
                                <div class="col-6 text-center">
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
    <Container className="fixed-bottom">
        {t((props.footer && props.footer.title) ? props.footer.title :'' , props.lang)}
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