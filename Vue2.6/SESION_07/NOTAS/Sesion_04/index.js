import payMethods from './pay';
import rusticaMethods from './rustica';
import csvMethods from './csv';
import generalMethods from './general';
import userMethods from './user';
import embargoMethods from './embargo';
import consultaMethods from './consulta';
import cartaPagoMethods from './carta-pago';
import penaltyMethods from './penalty';
import citizenMethods from './citizen';
import vehicleMethods from './vehicle';
import tributariaMethods from './tributaria';
import domiciliacionesMethods from './domiciliaciones';
import presentacionesExpedientesMethods from './solicitudes-expedientes';
import certificatesMethods from './certificates';
import notificationsMethods from './notifications';
import fraccionamientoMethods from './fraccionamiento';
import devolucionesMethods from './devoluciones';
import pppMethods from './ppp';
import tasasMethods from './tasas';
import plusvaliasMethods from './plusvalias';
import icioMethods from './icio';
import apoderadoMethods from './apoderado';
import fireMethods from './fire';
import userCMSMethods from './cms/user';
import anunciosCMSMethods from './cms/anuncios';
import generalCMSMethods from './cms/general';
import textosCMSMethods from './cms/textos';
import bloqueInformacionCMSMethods from './cms/bloque-informacion';
import odicMethods from './odic/odic';
import odicColaboradorMethods from './odic/colaborador';
import odicDelegadoMethods from './odic/delegado';
import odicTitularMethods from './odic/titular';
import odicPresentacionMethods from './odic/presentacion';
import odicObligacionesCensalesMethods from './odic/obligaciones-censales';
import odicEstadisticasMethods from './odic/estadisticas'
import AjaxClient from './ajax-client';

/** Example on how to extend a repo with more methods */
// const postExtObj = {
// async doSomething(...args) {
//   const { res } = await this.create(...args)
//   return res
// }
// }

// const postExtObjUser = {
//   async login(...args) {
//     const { res } = await this.create(...args)
//     return res
//   }
// };


// const customExtObj = {
//   setToken(...args) {
//     console.log('Set token: ', args);
//     this.clientAjax.token = args;
//   }
// };

export default ({ app, store, redirect, $axios }, inject) => {
  const setSessionExpired = args => store.commit('ui/setShowSessionExpiredDialog', args);
  const setSelectBanksPay = args => store.commit('ui/setShowSelectBankPayDialog', args);
  const clientAjax = new AjaxClient($axios, app, setSessionExpired);
  const api = {
    ...generalMethods(app, redirect, clientAjax),
    ...payMethods(app, setSelectBanksPay, clientAjax),
    ...rusticaMethods(clientAjax),
    ...userMethods(clientAjax),
    ...csvMethods(clientAjax),
    ...embargoMethods(clientAjax),
    ...consultaMethods(clientAjax),
    ...cartaPagoMethods(clientAjax),
    ...penaltyMethods(clientAjax),
    ...vehicleMethods(clientAjax),
    ...tributariaMethods(clientAjax),
    ...citizenMethods(clientAjax),
    ...domiciliacionesMethods(clientAjax),
    ...presentacionesExpedientesMethods(clientAjax),
    ...notificationsMethods(clientAjax),
    ...fraccionamientoMethods(clientAjax),
    ...devolucionesMethods(clientAjax),
    ...pppMethods(clientAjax),
    ...certificatesMethods(clientAjax),
    ...tasasMethods(clientAjax),
    ...plusvaliasMethods(clientAjax),
    ...icioMethods(clientAjax),
    ...apoderadoMethods(clientAjax),
    ...fireMethods(clientAjax),
    ...userCMSMethods(clientAjax),
    ...textosCMSMethods(clientAjax),
    ...generalCMSMethods(clientAjax),
    ...anunciosCMSMethods(clientAjax),
    ...bloqueInformacionCMSMethods(clientAjax),
    ...odicMethods(clientAjax),
    ...odicColaboradorMethods(clientAjax),
    ...odicDelegadoMethods(clientAjax),
    ...odicTitularMethods(clientAjax),
    ...odicPresentacionMethods(clientAjax),
    ...odicObligacionesCensalesMethods(clientAjax),
    ...odicEstadisticasMethods(clientAjax)
    // ...customExtObj(clientAjax)
  };

  inject('api', api);
};
