import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import Navbar from "@/components/navbar";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { display } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";
import { TextField, Modal, Button, Typography, Box } from "@mui/material";

const projects = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 480,
    bgcolor: "background.paper",
    boxShadow: 24,
    p:4,
  };

  return (
    <div className="bg-bggrey flex flex-row w-full h-[645px] text-ubuntu">
      <Navbar />
      <div className="flex flex-col ">
        <div className="absolute z-50 bg-lgreen h-[70px] w-[980px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl">Projects </span>
            <p className="font-normal">
              Something significant , untill you don't find an internship
            </p>
          </div>
          <span className="  text-2xl font-bold flex flex-row">
            <AddIcon onClick={handleOpen} className="m-2 h-[6] w-[6]" />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography className="font-medium font-ubuntu font-extrabold m-auto">
                  Add Projects!
                </Typography>
                <div className="flex">
                  <div>
                    <label className="font-medium font-ubuntu mt-8 mb-none">
                      Title
                    </label>
                    <input
                      className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                      type="text"
                      placeholder="Project Title"
                      name="title"
                      aria-label="title"
                      // value={title}
                      // onChange={(e) => setSapId(e.target.value)}
                    ></input>
                  </div>
                  <div className="ml-8">
                    <label className="font-medium font-ubuntu mt-8 mb-none">
                      Date
                    </label>
                    <input
                      className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                      type="date"
                      placeholder="Date"
                      name="date"
                      aria-label="date"
                      // value={title}
                      // onChange={(e) => setSapId(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <label className="font-medium font-ubuntu mt-8 mb-none">
                      Github Link
                    </label>
                    <input
                      className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                      type="text"
                      placeholder="Project Title"
                      name="title"
                      aria-label="title"
                      // value={title}
                      // onChange={(e) => setSapId(e.target.value)}
                    ></input>
                  </div>
                  <div className="ml-8">
                    <label className="font-medium font-ubuntu mt-8 mb-none">
                      Reference Link
                    </label>
                    <input
                      className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                      type="text"
                      placeholder="Date"
                      name="date"
                      aria-label="date"
                      // value={title}
                      // onChange={(e) => setSapId(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <label className="font-medium font-ubuntu mt-8 mb-none">
                    Skills
                  </label>
                  <input
                    className="p-1 block mt-1 w-[430px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                    type="text"
                    placeholder="Date"
                    name="date"
                    aria-label="date"
                    // value={title}
                    // onChange={(e) => setSapId(e.target.value)}
                  ></input>
                </div>
                <div className="w-[200px]">
                  <label className="font-medium font-ubuntu mt-8 mb-none">
                    Description
                  </label>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    className="w-[430]"
                  />
                </div>
                <div>
                  <label className="font-medium font-ubuntu mt-8 mb-none">
                    Image
                  </label>
                  <input
                    className="p-1 block mt-1 w-[430px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                    type="file"
                    placeholder="Date"
                    name="date"
                    aria-label="date"
                    // value={title}
                    // onChange={(e) => setSapId(e.target.value)}
                  ></input>
                  <Button
                    variant="contained"
                    className="w-[430px] bg-lgreen text-dgreen mt-2"
                  >
                    Add Project
                  </Button>
                </div>
              </Box>
            </Modal>
            <BiBell className="m-2" />{" "}
          </span>
        </div>
        <div className="flex bg-white p-10 ml-[270px] w-[1040px] mt-14 h-[580px] z-0 rounded-md">
          <div className="w-[700px]">
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  MenuProps={{
                    sx: {
                      "&& .Mui-selected": {
                        color: "pink",
                      },
                    },
                  }}
                  label="1st year"
                  value="1"
                />
                <Tab label="2nd year" value="2" />
                <Tab label="3rd year" value="3" />
                <Tab label="4th year" value="4" />
              </TabList>
              <TabPanel value="1">
                <div>
                  <div>
                    <p className="font-extrabold">Project Title</p>
                    <i>May 2022</i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscidcng elit
                      Ut et massa missss. Aliquasdsm in hendrerit urna.
                      Pellentesque sit amet samassa mi. Aliquam in hendrerit uit
                      urna.
                    </p>
                    <div className="flex justify-between">
                      <span>
                        View More <ArrowForwardIcon />
                      </span>
                      <span>
                        <BorderColorIcon onClick={handleOpen} />
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography className="font-medium font-ubuntu font-extrabold m-auto">
                              Add Projects!
                            </Typography>
                            <div className="flex">
                              <div>
                                <label className="font-medium font-ubuntu mt-8 mb-none">
                                  Title
                                </label>
                                <input
                                  className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                  type="text"
                                  placeholder="Project Title"
                                  name="title"
                                  aria-label="title"
                                  // value={title}
                                  // onChange={(e) => setSapId(e.target.value)}
                                ></input>
                              </div>
                              <div className="ml-8">
                                <label className="font-medium font-ubuntu mt-8 mb-none">
                                  Date
                                </label>
                                <input
                                  className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                  type="date"
                                  placeholder="Date"
                                  name="date"
                                  aria-label="date"
                                  // value={title}
                                  // onChange={(e) => setSapId(e.target.value)}
                                ></input>
                              </div>
                            </div>
                            <div className="flex">
                              <div>
                                <label className="font-medium font-ubuntu mt-8 mb-none">
                                  Github Link
                                </label>
                                <input
                                  className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                  type="text"
                                  placeholder="Project Title"
                                  name="title"
                                  aria-label="title"
                                  // value={title}
                                  // onChange={(e) => setSapId(e.target.value)}
                                ></input>
                              </div>
                              <div className="ml-8">
                                <label className="font-medium font-ubuntu mt-8 mb-none">
                                  Reference Link
                                </label>
                                <input
                                  className="p-1 block mt-1 w-[200px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                  type="text"
                                  placeholder="Date"
                                  name="date"
                                  aria-label="date"
                                  // value={title}
                                  // onChange={(e) => setSapId(e.target.value)}
                                ></input>
                              </div>
                            </div>
                            <div>
                              <label className="font-medium font-ubuntu mt-8 mb-none">
                                Skills
                              </label>
                              <input
                                className="p-1 block mt-1 w-[430px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                type="text"
                                placeholder="Date"
                                name="date"
                                aria-label="date"
                                // value={title}
                                // onChange={(e) => setSapId(e.target.value)}
                              ></input>
                            </div>
                            <div className="w-[200px]">
                              <label className="font-medium font-ubuntu mt-8 mb-none">
                                Description
                              </label>
                              <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                maxRows={4}
                                className="w-[430]"
                              />
                            </div>
                            <div>
                              <label className="font-medium font-ubuntu mt-8 mb-none">
                                Image
                              </label>
                              <input
                                className="p-1 block mt-1 w-[430px] focus:outline-none border-2 rounded-md border-solid border-bggrey "
                                type="file"
                                placeholder="Date"
                                name="date"
                                aria-label="date"
                                // value={title}
                                // onChange={(e) => setSapId(e.target.value)}
                              ></input>
                              <Button
                                variant="contained"
                                className="w-[430px] bg-lgreen text-dgreen mt-2"
                              >
                                Update Project Details
                              </Button>
                            </div>
                          </Box>
                        </Modal>
                        <DeleteIcon className="ml-4 mr-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">JAVA</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item 4</TabPanel>
            </TabContext>
          </div>
          <div className="w-[400px] bg-bggrey rounded-md mt-10">
            <Box className="-mt-8 ml-6 h-[200px] w-[300px] bg-lgreen rounded-md"></Box>
            <p className="ml-6 mt-2">Description :</p>
            <p className="ml-6 mt-1 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscidcng elit Ut et
              massa missss. Aliquasdsm in hendrerit urna. Pellentesque sit amet
              samassa mi. Aliquam in hendrerit uit urrem ipsum dolor sit amet
              consectetur adipiscidcng elit Ut et massa missss.
            </p>
            <p className="ml-6 mt-2">Skills :</p>
            <p className=" flex ml-6 mt-1 text-sm">
              <ul className="w-[80] h-[10] bg-white p-1 rounded-md">
                Html&nbsp;
              </ul>
              <ul className="w-[80] h-[10] bg-white p-1 rounded-md mr-3 ml-3">
                Css&nbsp;
              </ul>
              <ul className="w-[80] h-[10] bg-white p-1 rounded-md mr-3">
                Js&nbsp;
              </ul>
              <ul className="w-[80] h-[10] bg-white p-1 rounded-md mr-3">
                React&nbsp;
              </ul>
              <ul className="w-[80] h-[10] bg-white p-1 rounded-md mr-3">
                Node&nbsp;
              </ul>
            </p>
            {/* <p className="ml-6 mt-2">Links : </p> */}
            <div className="flex ml-6 mt-3">
              <a href="https://github.com/KreenaShah">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/kreena-shah-229667235/">
                <LinkIcon className="ml-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
