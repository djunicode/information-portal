import React from 'react'
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

const navbar = () => {

  const Open=(e)=>{
    e.preventDefault();

  }

  return (
    <div className='font-ubuntu w-60'>
        <div className='sidebar bg-white fixed top-0 bottom-0 lg:left-0 sm:left-[-300px] p-2 w-[230px] overflow-y-auto text-center '>
        
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

              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
             <AiFillHome/>
              <span className='text-[15px] ml-4 '>Home</span>
              </div>

              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <ImBooks/>
              <span className='text-[15px] ml-4 '>CGPA/Grades</span>
              </div>

              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <IoIosPeople/>
              <span className='text-[15px] ml-4 '>Committee</span>
              </div>

              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
           
              <FaChalkboardTeacher/>
              <span className='text-[15px] ml-4 '>Faculty</span>
              </div>

              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <GiArchiveResearch/>
              <span className='text-[15px] ml-4 '>Research Work</span>
              </div>

              
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <AiFillProject/>
              <span className='text-[15px] ml-4 '>Projects</span>
              </div>

             
              
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <MdNewspaper/>
              <span className='text-[15px] ml-4 '>Internships</span>
              </div>


              
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <GiTrophyCup/>
              <span className='text-[15px] ml-4 '>Achievements</span>
              </div>


              
              <div className='p-3 mt-3 flex items-center rounded-md px-10 cursor-pointer text-navgrey hover:bg-lgreen hover:text-dgreen  '>
              <FaUserGraduate/> 
              <span className='text-[15px] ml-4 '>Alumini</span>
              </div>

  
                
               
              
              

               
             
                 
          
         
    
        </div>

    </div>
  )
}

export default navbar