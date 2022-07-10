import { Button, Container, CssBaseline, Grid, TextareaAutosize, TextField, Typography,FormControl,Input,FormHelperText,InputLabel, ButtonBase, Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import img from '../../pages/addpost/img/img.svg'
import style from '../../styles/Addform.module.css'
import { DarkModeToggle } from '../form/Toggler'
const AddPost = () => {
  return (
    <>
    <Box  sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        padding: "20px",
        height:'100vh'
      }}  >
    <Container maxWidth="lg" minWidth="sm" >
        <Grid container>
            <Grid item sm={12} lg={6} spacing={3} style={{
                display:"flex",
                justifyContent:"center"
            }} direction="column" >
                    <Typography variant="h4" component="div" style={{marginBottom:"10px",fontWeight:200}}>Add Post</Typography>
                    <form className={style.form}>
                    <FormControl style={{
                        marginBottom:"10px"
                    }}>
                    <InputLabel htmlFor="title">Post Title</InputLabel>
                    <Input id="title" aria-describedby="titlehelper" />
                    <FormHelperText id="titlehelper">Write something captivating</FormHelperText>
                    </FormControl>
                    <FormControl>
                    <InputLabel htmlFor="post">Content</InputLabel>
                    <Input id="post" aria-describedby="posthelper" />
                    <FormHelperText id="posthelper">Tell your story</FormHelperText>
                    </FormControl>
                    <Button variant="outlined" style={{
                        marginTop:'25px'
                    }}  type="submit">Post</Button>
                    </form>
            </Grid>
            <Grid item lg={6} >
                <DarkModeToggle/>
                <Image src={img} alt=""/>
            </Grid>
        </Grid>
    </Container>
    </Box>
    </>
  )
}

export default AddPost