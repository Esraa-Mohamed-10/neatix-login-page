import React from "react";
import styles1 from "./../Login/LoginPage1/Login.module.css";
import styles3 from "./Login3.module.css";
import Form3 from "../../Components/Form3/Form3";
import Slider3 from "../../Components/Slider3/Slider3";
import Logo from "../../assets/Logo";
const LoginPage3 = () => {
  return (
    <div
      className={`${styles1.main_login_div} d-flex justify-content-center align-items-center`}
    >
        <div className={`d-flex justify-content-between ${styles3.form_slider_container}`}>
            <div className={`${styles3.form_div} pt-5`}>
                <Logo />
                <Form3 />
            </div>

            <div className={`${styles3.slider_div}`}>
              <Slider3 />
            </div>
        </div>
    </div>
  );
};

export default LoginPage3;
