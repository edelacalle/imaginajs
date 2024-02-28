import { useRouter } from 'next/router'
import languageDetector from '../languageDetector'

const trans = require('#/data/translate.json');

const cfg = {
  defaultLocale: 'es',
  locales: ['en','es'],
}
async function getStaticPaths (){
  let paths=[];
  cfg.locales.map((e)=> paths.push({params:{"locale":e}}))
  return {
    fallback:false,
    paths:paths
  }
}


async function getStaticProps( ctx ) {
  var lang = getLang(ctx.params.locale);
  return {
    props:{
      locale:ctx.params.locale
      // lang: lang
    }
  }
}

function getLang(lng){
  lng = (cfg.locales.indexOf(lng)==-1) ? cfg.defaultLocale : lng;
  return require("./"+lng+".json");
}

// INFO: Mejorar

function xt(txt,lang,section="common"){
  txt = (txt.substring(0,1)=="#") ? txt.substring(1):txt; 
  console.log("en t ", txt , section)
  return (lang && lang[section] && lang[section][txt] ) ? lang[section][txt]:txt
}

function t(locale,txt,section="common"){
  return (trans && trans[section] && trans[section][txt] && trans[section][txt][locale])?trans[section][txt][locale]:txt;
}





const LanguageSwitchLink = (props) => {
    const router = useRouter()
    const locale = props.locale || i18n.defaultLocale
    var href  = props.href || router.asPath
    let img = `/images/${locale}.png`
    // Cambiamos el primer param por el locale
    var aPath = href.split("/");
    aPath[1] = locale;
    href = aPath.join("/");
    return <a href={href}>
      <button onClick={() => languageDetector.cache(locale)}>
        <img width="24" height="24" src={`/images/${locale}.png`}></img>
      </button>
    </a>
      
  }


module.exports = {
  i18n: cfg,
  getStaticPaths: getStaticPaths,
  getStaticProps:getStaticProps,
  getLang: getLang,
  t:t,
 // t2:t2,
  LanguageSwitchLink:LanguageSwitchLink
}