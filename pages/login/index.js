import React from 'react'
import Form from '../../componets/form/Form'
import LoginImg from '../../pages/login/img/login.svg'
const index = () => {
  return (
    <div>
        <Form header="Login" Img={LoginImg} account="Dont Have a Accout? " link="Register" alink="./Register"/>
    </div>
  )
}

export default index