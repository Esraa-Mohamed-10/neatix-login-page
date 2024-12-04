import React from 'react';
import styles1 from './Login.module.css'
import Form1 from '../../../Components/Form1/Form1';
import Logo from '../../../assets/Logo';
import Slider1 from '../../../Components/Slider1/Slider1';
import Numbers from '../../../Components/Numbers/Numbers';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en'; // Toggle between 'en' and 'ar'
    i18n.changeLanguage(newLang); // Change the language
    document.documentElement.lang = newLang; // Update the lang attribute in HTML
  };

  return (
    <>
    <div className={`${styles1.main_login_div} d-flex justify-content-center align-items-center`}>
    
      <div className={`${styles1.form_slider_container} d-flex flex-md-row flex-column`}>
        <div className={`${styles1.login_form} py-5 d-flex flex-column align-items-center`}>
        <button onClick={toggleLanguage} className={styles1.langBtn}>
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </button>

          <Logo themeClass={styles1.logo_class}/>
          <Form1 />
        </div>
        <div className={`${styles1.login_slider}`}>
          <Slider1 />
        </div>
      </div>

    </div>
    </>
  )
}

export default Login