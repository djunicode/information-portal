import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import background from '../public/images/bgs.png'
import { Button, CssBaseline, Box, Container, Card, CardActions, CardContent, Typography, Paper, Grid, styled, TextField } from "@mui/material"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Signup = () => {

    const [sapId, setSapId] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [branch, setBranch] = useState("");
    const [email, setEmail] = useState("");

    const handleSignup = () => {

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

                    <Grid item xs={8}>
                        <Item>
                            <CssBaseline >
                                <Container fixed maxWidth='xl'>


                                    <Box sx={{ bgcolor: '', height: '150vh' }} >
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={0}>

                                                <Grid item xs={12} container
                                                    direction="column"
                                                    justifyContent="center"
                                                    alignItems="center">
                                                    <br />




                                                    <Item> <Card sx={{ minWidth: 500 }} >

                                                        <CardContent>
                                                            <Typography variant="h3" component="p" className='flex ml-[165px] absolute z-50 mt-[-35px]  items-center justify-center w-48 rounded-[10px] font-medium text-md bg-lgreen font-ubuntu text-dgreen'>
                                                                Sign Up
                                                            </Typography>

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

                                                                <form onSubmit={handleSignup}  className='ml-10'>


                                                                    <div className='flex flex-row'>
                                                                        <label className=' font-medium font-ubuntu mt-8'>First Name
                                                                            <input className='p-1 block mt-2  focus:outline-none border-2 rounded-md border-solid border-bggrey mr-5 '
                                                                                placeholder=''
                                                                                type='text' name='fname'
                                                                                aria-label='First Name'
                                                                                value={fname} onChange={(e) => setFname(e.target.value)}></input></label>

                                                                        <br />

                                                                        <label className='font-medium  font-ubuntu mt-8'>Last Name
                                                                            <input className='p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  '
                                                                                placeholder=''
                                                                                type='text'
                                                                                name='lname'
                                                                                aria-label='Last Name'
                                                                                value={lname}
                                                                                onChange={(e) => setLname(e.target.value)}></input></label>

                                                                    </div>


                                                                    <br />

                                                                    <div className='flex flex-row'>
                                                                        <label className='font-medium font-ubuntu mt-8'>Branch
                                                                            <br />
                                                                            <input className='p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  '
                                                                                placeholder=''
                                                                                type='text' name='branch'
                                                                                aria-label='Branch'
                                                                                value={branch} onChange={(e) => setBranch(e.target.value)}></input></label>

                                                                        <br />

                                                                        <label className='block font-medium font-ubuntu mt-8'>SapId

                                                                            <input className='p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  '
                                                                                placeholder=''
                                                                                type='text' name='sapid'
                                                                                aria-label='Sapid'
                                                                                value={sapId} onChange={(e) => setSapId(e.target.value)}></input></label>
                                                                    </div>
                                                                    <br/>

                                                                    <div className='flex flex-row'>

                                                                        <label className='font-medium font-ubuntu mt-8'>Password
                                                                            <input className='p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5 '
                                                                                placeholder=''
                                                                                type='password'
                                                                                name='password'
                                                                                aria-label='Password'
                                                                                value={password}
                                                                                onChange={(e) => setPassword(e.target.value)}></input></label>

                                                                        <br />

                                                                        <label className='font-medium font-ubuntu mt-8 '>Confirm Password
                                                                            <input className='p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  '
                                                                                placeholder=''
                                                                                type='password'
                                                                                name='password'
                                                                                aria-label='Password'
                                                                                value={cpassword}
                                                                                onChange={(e) => setCPassword(e.target.value)}></input></label>
                                                                    </div>

                                                                    <br />
                                                                    <br/>

                                                                    <label className='font-medium font-ubuntu mt-8 '>Email
                                                                        <input className='p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  '
                                                                            placeholder=''
                                                                            type='email'
                                                                            name='email'
                                                                            aria-label='Email ID'
                                                                            value={email}
                                                                            onChange={(e) => setEmail(e.target.value)}></input></label>

                                                                    <br />


                                                                    <Button variant="contained" type='submit' className='mt-10 mb-8 flex text-[20px] ml-[115px]   items-center justify-center w-52 rounded-[10px]  font-semibold content-center hover:bg-lgreen capitalize text-md bg-lgreen font-ubuntu text-dgreen' >Create Account</Button>

                                                                </form>
                                                                
                                                                <p className='ml-0 font-ubuntu text-base' >Already have an account? <Link href='/login'> <button className='bg-lgreen rounded-[7px] w-12 text-dgreen font-medium '
                                                                >Login</button></Link></p>
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

export default Signup;