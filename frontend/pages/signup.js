import React, { useState } from "react";
import { useMutation } from "react-query";
import Link from "next/link";
import Image from "next/image";
import background from "../public/images/bgs.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  Button,
  CssBaseline,
  Box,
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  Paper,
  Grid,
  styled,
  TextField,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Signup = () => {
  const [Sapid, setSapid] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Branch, setBranch] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const { mutate, isLoading } = useMutation(
    async (formData) => {
      console.log(formData);
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Failed to sign up: ${res.statusText}`);
      }
      const data = await res.json();
      console.log(data);
      return data;
    },
    {
      onSuccess: (data) => {
        console.log("Successfully signed up:", data);
      },
      onError: (error) => {
        console.error("Failed to sign up:", error);
      },
    }
  );

  const handleSignup = (event) => {
    event.preventDefault();
    const name = `${fname} ${lname}`;
    mutate({ Sapid, password,name, Branch, email });
  };

  const passwordToggle = (e) => {
    e.preventDefault();
    visible ? setVisible(false) : setVisible(true);
  };

  const passwordToggle2 = (e) => {
    e.preventDefault();
    visible2 ? setVisible2(false) : setVisible2(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4} className="hidden tablet:inline">
            <Item>
              <Image
                className="h-[100vh] overflow-y-hidden"
                src={background}
                alt="bg"
              ></Image>
            </Item>
          </Grid>

          <Grid item xs={8}>
            <Item>
              <CssBaseline>
                <Container fixed maxWidth="xl">
                  <Box sx={{ bgcolor: "", height: "100vh" }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <br />

                          <Item>
                            {" "}
                            <Card sx={{ minWidth: 500 }}>
                              <CardContent>
                                <Typography
                                  variant="h3"
                                  component="p"
                                  className="flex ml-[145px] absolute z-50 mt-[-35px]  items-center justify-center w-48 rounded-[10px] font-medium text-md bg-lgreen font-ubuntu text-dgreen"
                                >
                                  Sign Up
                                </Typography>

                                <br />

                                <br />
                                <Box
                                  component="form"
                                  sx={{
                                    "& .MuiTextField-root": {
                                      m: 1,
                                      width: "25ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                >
                                  <form className="ml-10" method="POST">
                                    <div className="flex flex-row">
                                      <div className="flex flex-col items-start">
                                        <label className=" font-medium font-ubuntu mt-8 ml-[-2]">
                                          First Name
                                        </label>
                                        <input
                                          className="p-1 block mt-2  focus:outline-none border-2 rounded-md border-solid border-bggrey mr-8"
                                          placeholder=""
                                          type="text"
                                          name="fname"
                                          aria-label="First Name"
                                          value={fname}
                                          onChange={(e) =>
                                            setFname(e.target.value)
                                          }
                                        ></input>
                                      </div>

                                      <br />

                                      <div className="flex flex-col items-start">
                                        <label className="font-medium  font-ubuntu mt-8">
                                          Last Name
                                        </label>
                                        <input
                                          className="p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-8  "
                                          placeholder=""
                                          type="text"
                                          name="lname"
                                          aria-label="Last Name"
                                          value={lname}
                                          onChange={(e) =>
                                            setLname(e.target.value)
                                          }
                                        ></input>
                                      </div>
                                    </div>

                                    <br />

                                    <div className="flex flex-row">
                                      <div className="flex flex-col items-start">
                                        <label className="font-medium font-ubuntu mt-8">
                                          Branch
                                        </label>

                                        <input
                                          className="p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-8  "
                                          placeholder=""
                                          type="text"
                                          name="branch"
                                          aria-label="Branch"
                                          value={Branch}
                                          onChange={(e) =>
                                            setBranch(e.target.value)
                                          }
                                        ></input>
                                      </div>

                                      <br />

                                      <div className="flex flex-col items-start">
                                        <label className="block font-medium font-ubuntu mt-8">
                                          SapId
                                        </label>
                                        <input
                                          className="p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  "
                                          placeholder=""
                                          type="text"
                                          name="sapid"
                                          aria-label="Sapid"
                                          value={Sapid}
                                          onChange={(e) =>
                                            setSapid(e.target.value)
                                          }
                                        ></input>
                                      </div>
                                    </div>
                                    <br />

                                    <div className="flex flex-row">
                                      <div className="flex flex-col items-start">
                                        <label className="font-medium font-ubuntu mt-8">
                                          Password
                                        </label>
                                        <div className="flex felx-row">
                                          <input
                                            className="p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5 "
                                            placeholder=""
                                            type={visible ? "text" : "password"}
                                            name="password"
                                            aria-label="Password"
                                            value={password}
                                            onChange={(e) =>
                                              setPassword(e.target.value)
                                            }
                                          />
                                          <button
                                            className=""
                                            onClick={(e) => passwordToggle(e)}
                                            style={{
                                              marginLeft: "-1rem",
                                              marginRight: "1rem",
                                            }}
                                          >
                                            {visible ? (
                                              <AiFillEyeInvisible />
                                            ) : (
                                              <AiFillEye />
                                            )}
                                          </button>
                                        </div>
                                      </div>

                                      <br />

                                      <div className="flex flex-col items-start">
                                        <label className="font-medium font-ubuntu mt-8 ">
                                          Confirm Password
                                        </label>
                                        <div className="flex felx-row">
                                          <input
                                            className="p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  "
                                            placeholder=""
                                            type={
                                              visible2 ? "text" : "password"
                                            }
                                            name="password"
                                            aria-label="Password"
                                            value={cpassword}
                                            onChange={(e) =>
                                              setCPassword(e.target.value)
                                            }
                                          />
                                          <button
                                            className=""
                                            onClick={(e) => passwordToggle2(e)}
                                            style={{
                                              marginLeft: "-1rem",
                                              marginRight: "0.5rem",
                                            }}
                                          >
                                            {visible2 ? (
                                              <AiFillEyeInvisible />
                                            ) : (
                                              <AiFillEye />
                                            )}
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <br />

                                    <div className="flex flex-col items-start">
                                      <label className="font-medium font-ubuntu mt-8 ">
                                        Email
                                      </label>
                                      <input
                                        className="p-1 block mt-2 focus:outline-none border-2 rounded-md border-solid border-bggrey  mr-5  "
                                        placeholder=""
                                        type="email"
                                        name="email"
                                        aria-label="Email ID"
                                        value={email}
                                        onChange={(e) =>
                                          setEmail(e.target.value)
                                        }
                                      ></input>
                                    </div>

                                    
                                    <br />

                                    <Button
                                      variant="contained"
                                      type="submit"
                                      className="mt-10 mb-8 flex text-[20px] ml-[95px]   items-center justify-center w-52 rounded-[10px]  font-semibold content-center hover:bg-lgreen capitalize text-md bg-lgreen font-ubuntu text-dgreen"
                                      onClick={handleSignup}
                                    >
                                      {isLoading
                                        ? "Loading..."
                                        : "Create Account"}
                                    </Button>
                                  </form>

                                  <div className="ml-0 font-ubuntu text-base">
                                    Already have an account?
                                    <Link href="/login">
                                      <button className="bg-lgreen rounded-[7px] w-12 text-dgreen font-medium ">
                                        Login
                                      </button>
                                    </Link>
                                  </div>
                                </Box>

                                <br />
                              </CardContent>
                              <CardActions></CardActions>
                            </Card>
                          </Item>
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
  );
};

export default Signup;
