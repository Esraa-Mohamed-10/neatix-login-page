import React from "react";
import styles from "./Form.module.css";
import { useTranslation } from "react-i18next";

const Form1 = () => {

  const { t, i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change language
  };

  return (
    <form action="" className={`${styles.form1} mt-4 m-auto px-3`} style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}>
      <input
        type="email"
        placeholder={t('email')}
        className={`${styles.data_input} d-block mb-3 mb-lg-4 p-2`}
      />
      <input
        type="password"
        placeholder={t('pass')}
        className={`${styles.data_input} d-block mb-3 mb-lg-4 p-2`}
      />
      <div
        className={`${styles.form_help} d-flex text-white-50 flex-column flex-lg-row gap-2 gap-lg-0 justify-content-between align-items-lg-center my-3 my-lg-4`}
      >
        <div className={`${styles.remember} d-flex align-items-center`}>
          <input type="checkbox" />
          <label htmlFor="">{t('remember')}</label>
        </div>
        <p>{t('forgotPass')}</p>
      </div>
      <button type="submit" className={`d-block my-4 my-md-2 my-lg-4 p-2 ${styles.login_btn}`}>
      {t('login')}
      </button>
      <div className={`${styles.btns_container} d-flex mt-3 justify-content-between flex-wrap flex-lg-nowrap`}>
        <button className={`d-flex align-items-center gap-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
          </svg>
          {t('help')}
        </button>
        <button className={`d-flex align-items-center gap-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-play-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
          </svg>
          {t('video')}
        </button>
        <button className={`d-flex align-items-center gap-1 mt-2 mt-lg-0`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
          </svg>
          {t('guide')}
        </button>
      </div>
    </form>
  );
};

export default Form1;
