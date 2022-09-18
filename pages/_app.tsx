import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';
import React, { useEffect } from 'react';
import AppContext from '../components/AppContext';
import { setCookie, getCookie } from 'cookies-next';

axios.defaults.baseURL = 'http://192.168.1.57:5000/api/v1/';

// axios.defaults.withCredentials = true;

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
MyApp.getInitialProps  = async ({ req, res }) => {
    // Get a cookie
    // Set a cookie
    
    return {coo:getCookie("lang")}
}
function MyApp({ Component, pageProps }: AppProps) {
  console.log(getCookie("lang"))
  const [languageSelected, setLanguageSelected] = React.useState();
  useEffect(() => {
    getCookie("lang") ? setLanguageSelected(getCookie("lang")) : setLanguageSelected('en')
}, []);
  let languagesObject = {
    en: {
      id:2,
      direction:"ltr",
      languageLableName:'English',
      navbarAboutLink: "About",
      navbarContactLink: "Contact",
      homeTitle: "Home",
      homeContent: "Next.js is the React Framework for Production",
      aboutTitle: "About",
      aboutContent:
        "Next.js gives you the best developer experience with all the features you need for production",
      contactTitle: "Contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      inputSearchPlaceHolder:"Search",
      siteTitle:"Recipes",
      languageLable:"Languages"

    },
    ar: {
      direction:"rtl",
      id:1,
      languageLableName:'العربية',
      navbarAboutLink: "Sobre",
      navbarContactLink: "Contacto",
      homeTitle: "Hogar",
      homeContent: "Next.js es el marco de React para la producción",
      aboutTitle: "Sobre",
      aboutContent:
        "Next.js le brinda la mejor experiencia de desarrollador con todas las funciones que necesita para la producción",
      contactTitle: "Contacto",
      emailLabel: "Correo electrónico",
      phoneLabel: "Teléfono",
      inputSearchPlaceHolder:"ابحث",
      siteTitle:"وصفات",
      languageLabel:"اللغات"
    },
  };

  axios.defaults.headers.common['lang'] = languagesObject[languageSelected]?.id ||  languagesObject["en"].id// for all requests

  return (

    <AppContext.Provider
    value={{
      state: {
        languages: languagesObject[languageSelected] || languagesObject["en"] ,
        languageSelected: languageSelected,
      },
      setLanguageSelected: setLanguageSelected,
    }}
  >
    <Component {...pageProps} />
  </AppContext.Provider>
  )
}

export default MyApp
