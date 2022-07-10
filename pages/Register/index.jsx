import React from 'react'
import Form from '../../componets/form/Form.jsx'
import ToggleColorMode from '../../componets/form/Toggler.jsx'
import Regimg from './img/reg.svg'
const index = () => {
  return (
    <ToggleColorMode>
   <Form header="Register" Img={Regimg} account="Have an account? " link="login" alink="./login"/>
   </ToggleColorMode>
  )
}

export default index