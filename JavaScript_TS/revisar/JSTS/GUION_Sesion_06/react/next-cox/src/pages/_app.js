import 'bootstrap/dist/css/bootstrap.css';
import '@/pages/styles/globals.css';
import '@/pages/styles/tania.css';


import { useEffect } from "react";
import { useRouter } from 'next/router';

import { DefaultSeo, NextSeo } from 'next-seo';
import SEO from '@/next-seo.config';

import cfg from '@/app.config.js';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    //console.log("Cargando bootstrap.bundle.min.js")
    console.log("en usseeffect app ", pageProps)

  }, []);

  var merge = {...pageProps, ...cfg};
  const router = useRouter();
  const seo = cfg.seo[router.asPath] ?? {title:'', description:''}
  return <>
    <DefaultSeo {...SEO} />
    <NextSeo  title={seo.title} description={seo.description}  />
    <Component {...merge} />
  </>
}

  



