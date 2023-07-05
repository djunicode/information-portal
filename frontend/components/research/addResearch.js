import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoAddCircle } from "react-icons/io5";
import axios from "axios";

export default function addResearch() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [topic_name, settopic_name] = useState("");
  const [description, setDescription] = useState("");
  const [team_members, setteam_members] = useState("");
  const [journal_name, setjournal_name] = useState("");
  const [publish_date, setpublish_date] = useState({
    date: "",
    month: "",
    year: "",
  });
  const [status, setStatus] = useState("");
  const [ISBN, setISBN] = useState("");
  const [ISSN, setISSN] = useState("");
  const [paper_id, setpaper_id] = useState("");
  const [mentor, setMentor] = useState("");
  const [guide, setGuide] = useState("");
  const [link, setlink] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      topic_name: topic_name,
      team_members: team_members,
      description: description,
      status: status,
      guide: guide,
      mentor: mentor,
      publish_date: publish_date,
      journal_name: journal_name,
      ISBN: ISBN,
      ISSN: ISSN,
      link: link,
      paper_id: paper_id,
    });
    const token = localStorage.getItem("jwt");
    const res = await fetch("http://localhost:3001/api/research", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        topic_name: topic_name,
        team_members: team_members,
        description: description,
        status: status,
        guide: guide,
        mentor: mentor,
        publish_date: publish_date,
        journal_name: journal_name,
        ISBN: ISBN,
        ISSN: ISSN,
        link: link,
        paper_id: paper_id,
      }),
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
        }}
      >
        Add Research Work
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
                      Add Research
                    </Dialog.Title>
                  </div>

                  <div className="mt-2">
                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                      <div className="w-full md:w-1/2 px-0 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="research-topic"
                        >
                          Research Topic
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="research-topic"
                          name="research-topic"
                          type="text"
                          placeholder="Name"
                          defaultValue={topic_name}
                          onChange={(e) => settopic_name(e.target.value)}
                          required
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="description"
                        >
                          Description
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="description"
                          name="description"
                          type="text"
                          placeholder="About the research paper"
                          defaultValue={description}
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="team-members"
                        >
                          Team Members
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="team-members"
                          name="team-members"
                          type="text"
                          placeholder="Names of Team Members"
                          defaultValue={team_members}
                          onChange={(e) => setteam_members(e.target.value)}
                          required
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="pub-in"
                        >
                          Published In
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="pub-in"
                          name="pub-in"
                          type="text"
                          placeholder="Journal Name"
                          defaultValue={journal_name}
                          onChange={(e) => setjournal_name(e.target.value)}
                          required
                        />

                        <div className="flex flex-row">
                          <div className="flex flex-col">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="publish_date_date"
                            >
                              Publication Date (Day):
                            </label>
                            <input
                              className="appearance-none block w-36 mr-2 bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              type="number"
                              id="publish_date_date"
                              name="date"
                              placeholder="DD"
                              defaultValue={publish_date.date}
                              onChange={(e) =>
                                setpublish_date({ ...publish_date, date: e.target.value })
                              }
                              min="1"
                              max="31"
                              required
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              className="block uppercase ml-2 tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="publish_date_month"
                            >
                              Publication Date (Month):
                            </label>
                            <input
                              className="appearance-none block w-36 ml-2 mr-2 bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              type="text"
                              id="publish_date_month"
                              name="month"
                              placeholder="MM"
                              defaultValue={publish_date.month}
                              onChange={(e) =>
                                setpublish_date({ ...publish_date, month: e.target.value })
                              }
                              required
                            />
                          </div>

                          <div className="flex flex-col">
                            <label
                              className="block uppercase ml-2 tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="publish_date_year"
                            >
                              Publication Date (Year):
                            </label>
                            <input
                              className="appearance-none mr-2 ml-2 block w-36 bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              type="text"
                              id="publish_date_year"
                              name="year"
                              placeholder="YYYY"
                              defaultValue={publish_date.year}
                              onChange={(e) =>
                                setpublish_date({ ...publish_date, year: e.target.value })
                              }
                              required
                            />
                          </div>
                        </div>

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="status"
                        >
                          Status
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="status"
                          name="status"
                          type="text"
                          placeholder="pending/published"
                          defaultValue={status}
                          onChange={(e) => setStatus(e.target.value)}
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="isbn"
                        >
                          ISBN
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="isbn"
                          name="isbn"
                          type="number"
                          placeholder="ISBN"
                          defaultValue={ISBN}
                          onChange={(e) => setISBN(e.target.value)}
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="issn"
                        >
                          ISSN
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="issn"
                          type="number"
                          name="issn"
                          placeholder="ISSN"
                          defaultValue={ISSN}
                          onChange={(e) => setISSN(e.target.value)}
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="paper-id"
                        >
                          Paper ID
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="paper-id"
                          name="paper_id"
                          type="number"
                          placeholder="Paper ID"
                          defaultValue={paper_id}
                          onChange={(e) => setpaper_id(e.target.value)}
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="guide"
                        >
                          Research Paper Guide
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="guide"
                          name="guide"
                          type="text"
                          placeholder="Name of guide"
                          defaultValue={guide}
                          onChange={(e) => setGuide(e.target.value)}
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="mentor"
                        >
                          Research Paper Mentor
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="mentor"
                          name="mentor"
                          type="text"
                          placeholder="Name of mentor"
                          defaultValue={mentor}
                          onChange={(e) => setMentor(e.target.value)}
                        />

                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="lor"
                        >
                          LOR
                        </label>
                        <input
                          className="appearance-none block w-full bg-bggrey text-black border border-bggrey rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="lor"
                          name="lor"
                          type="text"
                          placeholder="Link of LOR pdf"
                          defaultValue={link}
                          onChange={(e) => setlink(e.target.value)}
                        />
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