import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container,Button, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import style from '../../styles/login.module.css'
import Image from 'next/dist/client/image';
import Link from 'next/link'
const Form = ({header,Img,account,link,alink}) => {
  
  return (
   <>
   <CssBaseline />
   <Container style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      padding: "20px"
   }}>
            <div className={style.loginform}>
            <Typography variant='h5'>{header}</Typography>
             <form  className={style.form}>
            <TextField  type="email"  label="Email" variant="outlined" />
            <TextField type="password"  label="password" variant="outlined" />
            <Button  variant="outlined" value="submit" color="primary" gutterBottom={true}>{header}</Button>
            <Typography variant="caption">{account}<Link href={alink}><a>{link}</a></Link></Typography>
            </form>
            </div>
            <div>
                <Image src={Img} alt=""/>
            </div>
    </Container>
   </>
  )
}

export default Form