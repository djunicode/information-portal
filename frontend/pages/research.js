import React, { useState, useEffect } from "react";
import { BiBell } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import {ImBin} from 'react-icons/im'
import Navbar from "@/components/navbar";
import axios from "axios";
import AddResearch from "@/components/research/addResearch";
/* import Delete from "@/components/research/deleteResearch";
import Edit from "@/components/research/editResearch"; */

const research = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
 
    const storage = window.localStorage.getItem("jwt")
        var config = {
            method: 'get',
            url: 'http://localhost:3001/api/research/',
            headers: { 
              Authorization: `Bearer ${storage}`
            }
          };
          
          axios(config)
          .then(function (response) {
/*             console.log(JSON.stringify(response.data)); */
            setResearch([response.data.research_data[0]])
            console.log(response.data.research_data[0])
            console.log(research)
          })
          .catch(function (error) {
            console.log(error);
          });
          
      }
,[])

console.log(research.publish_date)

  return (
    <div className="bg-bggrey flex flex-row w-full h-[1100px] text-ubuntu">
      <Navbar />
      <div className="flex flex-col ">
        <div className="absolute z-50 bg-lgreen h-[70px] w-[1130px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl ]">Research Work</span>
            <p className="font-normal">Time to feel proud</p>
          </div>

          <span className="ml-auto  text-lg font-bold flex flex-row">
            <AddResearch className="m-2" />
          </span>

          <span className="  text-2xl font-bold flex flex-row">
            <BiBell className="m-2" />
          </span>
        </div>

        <div className="bg-white p-10 ml-[270px] w-[1200px] mt-14 h-[1000px] z-0 rounded-md">
          
        <div className="absolute z-50 bg-lgreen h-12 w-8/12 text-dgreen ml-12  mt-4 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between">
            <p className="font-normal text-dgreen">Research Topic</p>
            <span>
              <ImBin className="flex flex-row ml-[800px] justify-items-end"  />
            </span>
            <span>
              <AiOutlineEdit className=" flex flex-row justify-end"  />
            </span>
          </div>

          {research?.map((data, index) => (
           <div>
         
            <div className="border-solid border-2 border-[#F4F4F4] rounded-sm h-3/6 mt-8">
              <div
                className="mt-8 px-12 py-4 font-inter"
                key={index}
              >
                <p className="text-sm font-bold ">Description</p>
                <p className="text-xs ">
                
                  {data.description}
                </p>
                <br />

                <p className="text-sm font-bold  ">Team Members</p>
                <p className="text-xs ">{data.team_members}</p>

                <br />

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>Published In</p>
                  <p>{data.journal_name}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>Publish Date</p>
                  <p>9 04 2023</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>Status</p>
                  <p>{data.status}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>ISBN Number</p>
                  <p>{data.ISBN}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>ISSN Number</p>
                  <p>{data.ISSN}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>Paper ID</p>
                  <p>{data.paper_id}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>Research Paper Guide</p>
                  <p>{data.guide}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>Research Paper Mentor</p>
                  <p>{data.mentor}</p>
                </div>

                <div className="m-2 flex flex-row justify-between text-xs">
                  <p>LOR</p>
                  <p>{data.link}</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default research;