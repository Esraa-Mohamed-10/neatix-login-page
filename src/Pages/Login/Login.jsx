import React, { useEffect, useState } from "react";
import styles1 from "./Login.module.css";
import Form1 from "../../Components/Form1/Form1";
import Logo from "../../assets/Logo";
import Slider1 from "../../Components/Slider1/Slider1";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className={`${styles1.main_login_div} d-flex justify-content-center align-items-center`}
      >
        <button onClick={toggleTheme} className={styles1.mode_btn}>
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-moon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>
          )}
        </button>


        <div
          className={`${styles1.form_slider_container} d-flex flex-md-row flex-column`}
        >
          <div
            className={`${styles1.login_form} py-5 py-md-4 py-lg-5 d-flex flex-column align-items-center`}
          >
            <button onClick={toggleLanguage} className={styles1.langBtn}>
              {i18n.language === "en" ? "العربية" : "English"}
            </button>

            <Logo themeClass={styles1.logo_class} />
            <Form1 />
          </div>
          <div className={`${styles1.login_slider}`}>
            <Slider1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
