import React, {useState, useEffect} from 'react'
import {ImBooks} from 'react-icons/im';
import {IoIosPeople} from 'react-icons/io'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {GiArchiveResearch, GiHamburgerMenu} from 'react-icons/gi'
import {AiFillProject, AiFillHome} from 'react-icons/ai'
import {IoNewspaper} from 'react-icons/io'
import {GiTrophyCup} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import {MdNewspaper} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'
import Link from 'next/link'


const navbar = (props) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsSidebarOpen(mediaQuery.matches);
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
     <button
        className="fixed top-0 left-0 z-50 p-4 bg-gray-100 border-none tablet:hidden mobile:block"
        onClick={handleSidebarToggle}
      >
        {isSidebarOpen ? 'Close' : 'Open'}
      </button>
    <div className={`font-ubuntu`}>
        <div className={`sidebar bg-white fixed top-0 bottom-0 lg:left-0 sm:left-[-300px] p-2 w-[230px] overflow-y-hidden overflow-x-hidden text-center  transition-all ease-in-out duration-300 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }  `}  >
        
          <div className='text-navgrey font-semibold text-lg '>
            <div className='p-3 mt-1 flex flex-col items-center'>
              {/*avatar*/ }
              <img src="" alt='student-image'></img>
              <h1 className='font-extrabold text-black text-[15px] -ml-3'>Kreena Shah</h1>
              <p className='font-normal text-black text-[12px]'>Sap ID</p>
              {/* <RxCross2 className='bi bi-x ml-20 cursor-pointer lg:hidden'/> */}
              </div>
              <hr className='my-2 text-navgrey font-semibold '></hr>
              </div>

              <Link href='/home'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
             <AiFillHome/>
              <span className='text-[15px] ml-4 '>Home</span>
              </div></Link>

              <Link href='/grades'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <ImBooks/>
              <span className='text-[15px] ml-4 '>CGPA/Grades</span>
              </div></Link>

              <Link href='/committee'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <IoIosPeople/>
              <span className='text-[15px] ml-4 '>Committee</span>
              </div></Link>

              <Link href='/faculty'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <FaChalkboardTeacher/>
              <span className='text-[15px] ml-4 '>Faculty</span>
              </div>
              </Link>

              <Link href='/research'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <GiArchiveResearch/>
              <span className='text-[15px] ml-4 '>Research Work</span>
              </div>
              </Link>

              
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <AiFillProject/>
              <span className='text-[15px] ml-4 '>Projects</span>
              </div>

             
              <Link href='/internships'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <MdNewspaper/>
              <span className='text-[15px] ml-4 '>Internships</span>
              </div>
              </Link>


              <Link href='/achievements'>
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <GiTrophyCup/>
              <span className='text-[15px] ml-4 '>Achievements</span>
              </div>
              </Link>


              
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <FaUserGraduate/> 
              <span className='text-[15px] ml-4 '>Alumini</span>
              </div>
    
        </div>

    </div>
    </>
    
  )
}

export default navbar