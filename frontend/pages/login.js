import React, { useState } from "react";
import useLoginStore from "../authStore";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "react-query";
import background from "../public/images/bgs.png";
import Image from "next/image";
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

const Login = () => {
  const [Sapid, setSapid] = useLoginStore((state) => [
    state.Sapid,
    state.setSapid,
  ]);
  const [password, setPassword] = useLoginStore((state) => [
    state.password,
    state.setPassword,
  ]);
  const [visible, setVisible] = useLoginStore((state) => [
    state.visible,
    state.setVisible,
  ]);
  /*   const [Sapid, setSapid] = useState();
  const [password, setPassword] = useState();
  const [visible, setVisible] = useState(false); */

  const router = useRouter();

  const { mutate, isLoading } = useMutation(
    async (formData) => {
      console.log(formData);
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Failed to login: ${res.statusText}`);
      }
      const data = await res.json();
      console.log(data);
      return data;
    },
    {
      onSuccess: (data) => {
        console.log("Successfully logged in:", data);
        router.push("/home");
      },
      onError: (error) => {
        console.error("Failed to login:", error);
      },
    }
  );

  const handleLogin = (event) => {
    event.preventDefault();
    mutate({ Sapid, password });
  };

  const passwordToggle = (e) => {
    e.preventDefault();
    visible ? setVisible(false) : setVisible(true);
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
                <Container
                  fixed
                  maxWidth="xl "
                  className="mt-20 overflow-y-hidden"
                >
                  <Box sx={{ bgcolor: "", height: "95vh" }}>
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
                              <Typography
                                variant="h3"
                                component="p"
                                className="flex ml-[145px] absolute z-50 mt-[-35px]  items-center justify-center w-48 rounded-[10px] font-medium text-md bg-lgreen font-ubuntu text-dgreen"
                              >
                                Sign In
                              </Typography>
                              <CardContent>
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
                                  <form className="flex flex-col justify-center items-center">
                                    <div className="flex flex-col items-start">
                                      <label className="font-medium ml-[-1rem]  font-ubuntu mt-8 ">
                                        SapId
                                      </label>
                                      <input
                                        className="p-1 block mt-2 ml-[-1rem] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                        type="text"
                                        placeholder=""
                                        name="sapid"
                                        aria-label="Sapid"
                                        value={Sapid}
                                        onChange={(e) =>
                                          setSapid(e.target.value)
                                        }
                                      />
                                    </div>

                                    <br />
                                    <div className="flex flex-col items-start">
                                      <label className="font-medium font-ubuntu mt-8 ">
                                        Password
                                      </label>
                                      <div className="flex flex-row">
                                        <input
                                          className="p-1 block mt-2  focus:outline-none border-2 rounded-md border-solid border-bggrey"
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
                                          className="ml-[-2]"
                                          onClick={(e) => passwordToggle(e)}
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

                                    <Button
                                      variant="contained"
                                      type="submit"
                                      onClick={handleLogin}
                                      className="mt-10  flex text-[20px] ml-[12px]   items-center justify-center w-52 rounded-[10px]  font-semibold content-center hover:bg-lgreen capitalize text-md bg-lgreen font-ubuntu text-dgreen"
                                    >
                                      {isLoading ? "Loading..." : "Login"}
                                    </Button>
                                    <button className="font-thin underline mt-2 mb-8">
                                      Forgot Password?
                                    </button>
                                  </form>

                                  <div className="ml-0 font-ubuntu text-base">
                                    Don't have an account?{" "}
                                    <Link href="/signup">
                                      {" "}
                                      <button className="bg-lgreen rounded-[7px] w-14 text-dgreen font-medium ">
                                        Sign up
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

export default Login;
