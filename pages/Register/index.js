import React from 'react'
import Login from '../../componets/Login/Login'
import Regimg from './reg.svg'
const index = () => {
  return (
   <Login header="Register" Img={Regimg} account="Have an account? " link="login" alink="./login"/>
  )
}

export default index