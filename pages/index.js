import { CssBaseline, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import style from '../styles/Home.module.css'
import img from './index.svg'
import Image from 'next/image';

const index = () => {
  return (<>
    
  <Container  style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      padding: "20px"
   }}>
       <div className={style.content}>
       <Typography variant="h4" style={{fontWeight:300}} component="div" gutterBottom>Welcome To This Very Basic Blog Website</Typography>
        <Typography variant="h6" style={{fontWeight:100}} component="div" gutterBottom>This website has a sole purpose of testing my blog API made with Node.js and Express.js</Typography>
        <Typography variant="h6" style={{fontWeight:100}} component="div" gutterBottom>This website was made with <em  style={{fontWeight:300}}>Next.js</em> </Typography>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" href="login">Login</Button>
            <Button variant="contained" href="Register">Register</Button>
    </Stack>
       </div>
       <div>
            <Image src={img} alt="" />
       </div>
  </Container>
  </>
  )
}

export default index