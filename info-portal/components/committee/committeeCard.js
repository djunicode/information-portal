import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Avatar } from "@mui/material";
import UpdateCommittee from "./editModal";
import Delete from "./deleteModal";

const CommitteeCard = ({ committeeData }) => {
  const [del, setDel] = useState(false);
  console.log(del);
  return (
    <>
      {committeeData.map((data, index) => (
        <div key={index}>
          <div className="flex-1 px-2">
            <div className="bg-white mt-16 px-10 py-1 rounded-t-lg border-opacity-10 border-navgrey border-2">
              <div className="bg-lgreen mx-auto -mt-12 p-4 rounded-t-lg flex justify-between">
                <div className="flex items-center">
                  <Avatar
                    src={"/images/committee_logos/" + data.logo + ".png"}
                  ></Avatar>
                  <div className="text-3xl font-bold text-black px-3">
                    {data.committee_name}
                  </div>
                </div>
                <div className="flex px-2 items-center">
                  <UpdateCommittee prevComm={data} />
                  <Delete committee_name={data.committee_name} />
                  {/* {del ? <Delete open={del} /> : null} */}
                </div>
              </div>

              <div className="grid grid-cols-3">
                {data.role_details.map((info, index) => (
                  <div key={index}>
                    <svg
                      width="340"
                      height="50"
                      viewBox="0 0 120 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="3" cy="10" r="3" fill="gray" />
                      <line
                        x1="15"
                        y1="10"
                        x2="110"
                        y2="10"
                        stroke="gray"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3">
                {data.role_details.map((info, index) => (
                  <div key={index} className="py-5">
                    <div className="text-l font-bold">{info.position}</div>
                    <div>{info.duration}</div>
                    <div className="py-5">
                      <div>Contributions - </div>
                      <div>{info.contribution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CommitteeCard;
