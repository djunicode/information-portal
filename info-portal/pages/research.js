import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import {AiOutlinePlus, AiOutlineEdit} from "react-icons/ai";
import Navbar from "@/components/navbar";

const research = () => {
  return (
    <div className="bg-bggrey flex flex-row w-full h-[1100px] text-ubuntu">
      <Navbar />
      <div className="flex flex-col ">
        <div className="absolute z-50 bg-lgreen h-[70px] w-[1130px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl ]">Research Work</span>
            <p className="font-normal">Time to feel proud</p>
          </div>

          <span className="ml-auto  text-2xl font-bold flex flex-row">
            <AiOutlinePlus className="m-2" />
          </span>
          
          <span className="  text-2xl font-bold flex flex-row">
            <BiBell className="m-2" />
          </span>
          
        </div>

        <div className="bg-white p-10 ml-[270px] w-[1200px] mt-14 h-[1000px] z-0 rounded-md">
          
        <div className="absolute z-50 bg-lgreen h-12 w-8/12 text-dgreen ml-12  mt-4 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between"><p className="font-normal text-dgreen">Research Topic</p>
        <span><AiOutlineEdit className=""/></span>
        </div>
          <div className="border-solid border-2 border-[#F4F4F4] rounded-sm h-3/6 mt-8">

            <div className="mt-8 px-12 py-4 font-inter">
            <p className="text-sm font-bold ">Description</p>
          <p className="text-xs ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque architecto, animi molestiae enim error quidem consequatur beatae! Provident, facere laborum. Minima explicabo alias in! Quisquam fugit dolore provident ipsam expedita?</p>
          <br/>

          <p className="text-sm font-bold  ">Team Members</p>
          <p className="text-xs ">team members name</p>

          <br/>
         

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Published In</p>
            <p>Journal Name</p>
          </div>

          

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Publish Date</p>
            <p>Date</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Publish Date</p>
            <p>Date</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Satus</p>
            <p>Published</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>ISBN Number</p>
            <p>ISBN Number</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>ISSN Number</p>
            <p>ISSN Number</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Paper ID</p>
            <p>Paper ID</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Research Paper Guide</p>
            <p>prof name</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>Research Paper Mentor</p>
            <p>prof name</p>
          </div>

          <div className="m-2 flex flex-row justify-between text-xs">
            <p>LOR</p>
            <p>lor pdf link</p>
          </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default research;
