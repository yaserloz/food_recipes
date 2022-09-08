import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';
import React from 'react';
import AppContext from '../components/AppContext';

axios.defaults.baseURL = 'http://localhost:5002/api/v1/';

// axios.defaults.withCredentials = true;

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
function MyApp({ Component, pageProps }: AppProps) {
  const [languageSelected, setLanguageSelected] = React.useState("en");
  let languagesObject = {
    en: {
      id:2,
      direction:"ltr",
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
      siteTitle:"Iraqi recipes",
      languageLabel:"Languages"

    },
    ar: {
      direction:"rtl",
      id:1,
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
      siteTitle:"وصفات عراقية",
      languageLabel:"اللغات"
    },
  };

  return (

    <AppContext.Provider
    value={{
      state: {
        languages: languagesObject[languageSelected],
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
