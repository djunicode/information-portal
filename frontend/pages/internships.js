import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import Navbar from "@/components/navbar";

const research = () => {
  return (
    <div className="bg-bggrey flex flex-row w-full h-[1100px] text-ubuntu">
      <Navbar />
      <div className="flex flex-col ">
        <div className="absolute z-50 bg-lgreen h-[70px] w-[1130px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl ]">Internships</span>
            <p className="font-normal">Work, work, work</p>
          </div>

          <span className="ml-auto  text-2xl font-bold flex flex-row">
            <AiOutlinePlus className="m-2" />
          </span>

          <span className="  text-2xl font-bold flex flex-row">
            <BiBell className="m-2" />
          </span>
        </div>

        <div className="bg-white p-10 ml-[270px] w-[1200px] mt-14 h-[750px] z-0 rounded-md">
          <div className="absolute z-50 bg-lgreen h-12 w-8/12 text-dgreen ml-12  mt-4 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
            <p className="font-normal text-dgreen">Ongoing Internships</p>
            <span>
              <AiOutlineEdit className="" />
            </span>
          </div>
          <div className="border-solid border-2 border-[#F4F4F4] rounded-sm h-[280px] mt-8">
            <div className="mt-8 px-12 py-4 font-inter">
              <div className="flex flex-row">
                <img className="m-1 float-left" src="logo"></img>
                <p className="text-sm font-bold ">Company name</p>
              </div>

              <p className="text-xs ml-4 font-light">Software services</p>
              <br />

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Position</p>
                <p className="bg-lgreen">UI/UX Designer</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Duration</p>
                <p>whtaever</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Hours Completed</p>
                <p>20</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Hours(total)</p>
                <p>100</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Total Stipend</p>
                <p>INR blah</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Offer Letter</p>
                <p>link</p>
              </div>

            </div>
          </div>

          <div className="absolute z-50 bg-lgreen h-12 w-8/12 text-dgreen ml-12  mt-4 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
            <p className="font-normal text-dgreen">Completed Internships</p>
            <span>
              <AiOutlineEdit className="" />
            </span>
          </div>
          <div className="border-solid border-2 border-[#F4F4F4] rounded-sm h-[280px] mt-8">
            <div className="mt-8 px-12 py-4 font-inter">
            <div className="flex flex-row">
                <img className="m-1 float-left" src="logo"></img>
                <p className="text-sm font-bold ">Company name</p>
              </div>

              <p className="text-xs ml-4 font-light">Software services</p>
              <br />

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Position</p>
                <p className="bg-lgreen">UI/UX Designer</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Duration</p>
                <p>whtaever</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Hours</p>
                <p>100</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Total Stipend</p>
                <p>INR blah</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Completion Letter</p>
                <p>link</p>
              </div>

              <div className="m-2 flex flex-row justify-between text-xs">
                <p>Report from mentor</p>
                <p>Link</p>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default research;
