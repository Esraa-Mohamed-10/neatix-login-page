import React from 'react'
import style3 from './Form3.module.css'
const Form3 = () => {
    return (
        <form action="" className={`${style3.form3} mt-4 m-auto`}>
            <input type="email" placeholder='Email' className={`${style3.data_input} d-block  mb-4 p-2`} />
            <input type="password" placeholder='Password'  className={`${style3.data_input} d-block  mb-4 p-2`} />
            <div className={`${style3.form_help} d-flex text-white-50 justify-content-between align-items-center my-4`}>
                <div className={`${style3.remember} d-flex align-items-center`}>
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                </div>
                <p>Forgot Password?</p>
            </div>
            <button type='submit' className={`d-block mt-4 p-2`}>Sign In</button>
        </form>
    )
}

export default Form3