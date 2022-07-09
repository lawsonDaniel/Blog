import React from 'react'
import Login from '../../componets/Login/Login'
import LoginImg from '../../pages/login/assets/img/login.svg'
const index = () => {
  return (
    <div>
        <Login header="Login" Img={LoginImg} account="Dont Have a Accout? " link="Register" alink="./Register"/>
    </div>
  )
}

export default index