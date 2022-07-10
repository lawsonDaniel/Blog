import React from 'react'
import Form from '../../componets/form/Form.jsx'
import LoginImg from '../../pages/login/img/login.svg'
import ToggleColorMode from '../../componets/form/Toggler.jsx'
const index = () => {
  return (
    <ToggleColorMode>
        <Form header="Login" Img={LoginImg} account="Dont Have a Accout? " link="Register" alink="./Register"/>
    </ToggleColorMode>
  )
}

export default index