import React, { useState } from 'react'
import Link from 'next/link'
import background from '../public/images/bgs.png'
import Image from 'next/image'
import { Button, CssBaseline, Box, Container, Card, CardActions, CardContent, Typography, Paper, Grid, styled, TextField } from "@mui/material"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Login = () => {

    const [sapId, setSapId] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {

    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={4} className='hidden tablet:inline'>
                        <Item>
                            <Image className='' src={background} alt='bg'></Image>
                        </Item>
                    </Grid>

                    <Grid item xs={8} >
                        <Item>
                            <CssBaseline >
                                <Container fixed maxWidth='xl ' className='mt-20'>


                                    <Box sx={{ bgcolor: '', height: '150vh' }} >
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={0}>

                                                <Grid item xs={12} container
                                                    direction="column"
                                                    justifyContent="center"
                                                    alignItems="center">
                                                    <br />




                                                    <Item> <Card sx={{ minWidth: 500 }} >
                                                        <Typography variant="h3" component="p" className='flex ml-[145px] absolute z-50 mt-[-35px]  items-center justify-center w-48 rounded-[10px] font-medium text-md bg-lgreen font-ubuntu text-dgreen'>
                                                            Sign In
                                                        </Typography>
                                                        <CardContent>


                                                            <br />



                                                            <br />
                                                            <Box
                                                                component="form"
                                                                sx={{
                                                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                                }}
                                                                noValidate
                                                                autoComplete="off"
                                                            >

                                                                <form onSubmit={handleLogin}  className='flex flex-col justify-center items-center'>

                                                                   
                                                                    <label className='font-medium font-ubuntu mt-8 '>SapId</label>
                                                                    <input className='p-1 block mt-2  focus:outline-none border-2 rounded-md border-solid border-bggrey '
                                                                        type='text'
                                                                        placeholder=''
                                                                        name='sapid'
                                                                        aria-label='Sapid'
                                                                        value={sapId}
                                                                        onChange={(e) => setSapId(e.target.value)}></input>



                                                                    <br />
                                                                    <label className='font-medium font-ubuntu mt-8 '>Password</label>
                                                                    <input className='p-1 block mt-2  focus:outline-none border-2 rounded-md border-solid border-bggrey'
                                                                        placeholder=''
                                                                        type='password'
                                                                        name='password'
                                                                        aria-label='Password'
                                                                        value={password}
                                                                        onChange={(e) => setPassword(e.target.value)}></input>
                                                                   




                                                                    <br />

                                                                    <Button variant="contained" type='submit' className='mt-10  flex text-[20px] ml-[12px]   items-center justify-center w-52 rounded-[10px]  font-semibold content-center hover:bg-lgreen capitalize text-md bg-lgreen font-ubuntu text-dgreen' >Login</Button>
                                                                    <button className='font-thin underline mt-2 mb-8'>Forgot Password?</button>

                                                                </form>

                                                                <p className='ml-0 font-ubuntu text-base' >Don't have an account? <Link href='/signup'> <button className='bg-lgreen rounded-[7px] w-14 text-dgreen font-medium '
                                                                    >Sign up</button></Link></p>
                                                            </Box>


                                                            <br />






                                                        </CardContent>
                                                        <CardActions>

                                                        </CardActions>
                                                    </Card></Item>
                                                </Grid>

                                            </Grid>
                                        </Box>

                                    </Box>
                                </Container>
                            </CssBaseline>
                        </Item>
                    </Grid>
                </Grid>
            </Box>




        </>
    )

}

export default Login;