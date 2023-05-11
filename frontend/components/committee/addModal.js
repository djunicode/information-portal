import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { MdDelete } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";

export default function NewCommittee() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [committeeName, setCommitteeName] = useState("");
  const [roleDetails, setRoleDetails] = useState([
    { position: "", duration: "", contribution: "" },
  ]);
  const handleAddRoleDetail = () => {
    let lastRole = roleDetails[roleDetails.length - 1];
    if (
      lastRole.position === "" ||
      lastRole.duration === "" ||
      lastRole.contribution === ""
    ) {
      console.log("empty fields");
    } else {
      setRoleDetails([
        ...roleDetails,
        { position: "", duration: "", contribution: "" },
      ]);
    }
  };

  const handleRoleDetailChange = (index, field, value) => {
    const updatedRoleDetails = [...roleDetails];
    updatedRoleDetails[index][field] = value;
    setRoleDetails(updatedRoleDetails);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ committeeName, roleDetails });
    // Send data to server
    const res = await fetch("/api/committee/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ committee_name: committeeName, role_details: roleDetails }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <button
        className="bg-transparent hover:bg-dgreen text-blue-700 font-semibold hover:text-lgreen py-2 px-4 mx-6 border border-dgreen hover:border-transparent rounded text-dgreen"
        onClick={() => {
          openModal();
          setRoleDetails([{ position: "", duration: "", contribution: "" }]);
        }}
      >
        Add Committee
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center flex-col">
                    <IoAddCircle color="#115C6C" size={25} />
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Add Committee
                    </Dialog.Title>
                  </div>

                  <div className="mt-2">
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                      <div className="w-full md:w-1/2 px-0 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-first-name"
                        >
                          Committee Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="DJ Unicode"
                          value={committeeName}
                          onChange={(event) =>
                            setCommitteeName(event.target.value)
                          }
                        />
                      </div>
                      <p className="flex justify-center uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">
                        Role Details
                      </p>
                      {roleDetails.map((roleDetail, index) => (
                        <>
                          <div key={index}>
                            <div className="flex -mx-3 mb-3">
                              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  for="grid-first-name"
                                >
                                  Position
                                </label>
                                <input
                                  className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-first-name"
                                  type="text"
                                  placeholder="Mentee"
                                  value={roleDetail.position}
                                  onChange={(event) =>
                                    handleRoleDetailChange(
                                      index,
                                      "position",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  for="grid-first-name"
                                >
                                  Duration
                                </label>
                                <input
                                  className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-first-name"
                                  type="text"
                                  placeholder="DJ Unicode"
                                  value={roleDetail.duration}
                                  onChange={(event) =>
                                    handleRoleDetailChange(
                                      index,
                                      "duration",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>
                              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  for="grid-first-name"
                                >
                                  Contribution
                                </label>
                                <input
                                  className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-first-name"
                                  type="text"
                                  placeholder="Lorem Ipsum"
                                  value={roleDetail.contribution}
                                  onChange={(event) =>
                                    handleRoleDetailChange(
                                      index,
                                      "contribution",
                                      event.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                      <div className="flex">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-dgreen hover:bg-dgreen hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-dgreen focus-visible:ring-offset-2 mx-2"
                          onClick={handleAddRoleDetail}
                        >
                          Add New Role
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red hover:text-white hover:border-red focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mx-2"
                          onClick={() => {
                            setRoleDetails([
                              { position: "", duration: "", contribution: "" },
                            ]);
                          }}
                        >
                          Clear All Roles
                        </button>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-blue-900 hover:bg-red hover:text-white hover:border-red focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mx-2"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-dgreen px-4 py-2 text-sm font-medium text-white hover:bg-lgreen hover:text-black hover:border-lgreen focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
