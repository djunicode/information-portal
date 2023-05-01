import { useState, useEffect } from "react";
import NewCommittee from "../../components/committee/addModal";
import CommitteeCard from "../../components/committee/committeeCard";
import Navbar from "@/components/navbar";
import { BiBell } from "react-icons/bi";
import * as React from "react";

const Committee = () => {
  const [committeeData, setCommitteeData] = useState([]);
  const getCommitteeData = async () => {
    const res = await fetch("/api/committee/view", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setCommitteeData(data);
  };
  useEffect(() => {
    getCommitteeData();
  }, []);
  /* const [committeeData, setCommitteeData] = useState([
    {
      committee_name: "DJ UNICODE",
      logo: "unicode",
      role_details: [
        {
          position: "FRONTEND MENTEE",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
        {
          position: "FRONTEND MENTOR",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
        {
          position: "FRONTEND HEAD",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
      ],
    },
    {
      committee_name: "DJ SYNAPSE",
      logo: "synapse",
      role_details: [
        {
          position: "ML MENTEE",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
        {
          position: "ML HEAD",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
      ],
    },
  ]); */
  /* const committeeData = [
    {
      committee_name: "DJ UNICODE",
      logo: "unicode",
      role_details: [
        {
          position: "FRONTEND MENTEE",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
        {
          position: "FRONTEND MENTOR",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
        {
          position: "FRONTEND HEAD",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
      ],
    },
    {
      committee_name: "DJ SYNAPSE",
      logo: "synapse",
      role_details: [
        {
          position: "ML MENTEE",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
        {
          position: "ML HEAD",
          contribution: "did some stuff",
          duration: "(2023-present)",
        },
      ],
    },
  ]; */
  console.log(committeeData);
  return (
    <div className="flex bg-bggrey">
      <Navbar />
      <div className="flex-1 px-12 overflow-auto">
        <div className="bg-white mt-16 h-screen px-10 py-1 rounded-t-lg">
          <div className="bg-lgreen mx-auto -mt-12 p-5 rounded-t-lg flex justify-between">
            <div className="text-3xl font-bold text-dgreen">Committees</div>
            <div className="flex">
              <NewCommittee />
              <div>
                <BiBell
                  className="m-2 cursor-pointer"
                  size={25}
                  color="#115C6C"
                />
              </div>
            </div>
          </div>
          <CommitteeCard committeeData={committeeData}></CommitteeCard>
        </div>
      </div>
    </div>
  );
};

export default Committee;
