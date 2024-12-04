import React from "react";
import Logo from "../../assets/Logo";
import styles1 from "./../Login/LoginPage1/Login.module.css";
import styles2 from "./Login2.module.css";
import Slider2 from "../../Components/Slider2/Slider2";
import Form1 from "../../Components/Form1/Form1";

const LoginPage2 = () => {
  return (
    <div
      className={`${styles1.main_login_div} d-flex justify-content-center align-items-center`}
    >
      <div className={styles2.sliderDiv}>
        <Slider2 />
        <div className={`${styles2.form_overlay} py-4`}>
          <Logo themeClass={styles1.logo_class}/>
          <Form1 />
        </div>
      </div>
    </div>
  );
};

export default LoginPage2;
