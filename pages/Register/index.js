import React from 'react'
import Form from '../../componets/form/Form'
import Regimg from './img/reg.svg'
const index = () => {
  return (
   <Form header="Register" Img={Regimg} account="Have an account? " link="login" alink="./login"/>
  )
}

export default index