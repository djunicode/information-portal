import React, { useState } from "react";
import { BiBell } from "react-icons/bi";
import Navbar from "@/components/navbar";
import Card from '@/components/card';
import Dropdown from '@/components/dropdown';
import Search from "@/components/search";


const faculty = () => {
  return (
    <div className="bg-bggrey flex flex-row w-full h-[1100px] text-ubuntu">
      <Navbar />
      <div className="flex flex-col ">
        <div className="absolute z-50 bg-lgreen h-[70px] w-[1130px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl">Faculty</span>
            <p className="font-normal">what</p>
          </div>

          
          <span className="  text-2xl font-bold flex flex-row">
            <BiBell className="m-2" />
          </span>
        </div>

        <div className="bg-white ml-[270px] w-[1200px] mt-14 h-[1000px] z-0 rounded-md">

        <div className=" flex felx-row justify-around items-center">
        <Dropdown className="mt-16"/>

        <Search data={""}/>

        </div>


       
        
        <div className="">
       {/* map them */}
      <Card
        title="Card Title"
        content="This is the content of the card."
        imageUrl="https://via.placeholder.com/300"
      />
    </div> 
        </div>
      </div>
    </div>
  );
};

export default faculty;