import React, {useState} from 'react'
import {GiArchiveResearch, GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineEdit} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import Navbar from '@/components/navbar'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 13,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, answer) {
    return { name, answer };
  }
  
  const rows = [
    createData('Name', 'blah'),
    createData('SapID', 'blah' ),
    createData('Department', 'blah'),
    createData('Batch', 'blah'),
    createData('Division/ Practical Batch', 'blah'),
    createData('Class Teacher', 'blah'),
    createData('Email ID', 'blah'),
    createData('Contact Number', 'blah'),
    createData('Skills', 'blah'),
    createData('Profile Link- I', 'blah'),
    createData('Profile Link - II', 'blah'),
  ];
  


const home = () => {

  

  return (


<div className='bg-bggrey flex flex-row w-full h-[1000px] text-ubuntu'>
    <Navbar/>
    <div className='flex flex-col '>
        <div className='absolute z-50 bg-lgreen h-[70px] w-[1130px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between'><div className='flex flex-col'><span className='text-2xl'>Name of student </span><p className='font-normal'>sapid</p></div> <span className='font-bold text-base ml-[-780px] mt-[-16px]'> year</span> <span className='  text-2xl font-bold flex flex-row'><AiOutlineEdit className='m-2'></AiOutlineEdit><BiBell className='m-2'/> </span></div>
    <div className='bg-white p-10 ml-[270px] w-[1200px] mt-14 h-[650px] z-0 rounded-md'>
        <div className='table p-3'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1100 }} aria-label="customized table">
      
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} className=''>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.answer}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
   
    </div>
    <div className='flex flex-row ml-[266px] mt-10 '>

        <div className='flex flex-col '>
        <div className='absolute z-50 p-1 flex justify-center rounded-md bg-lgreen h-[40px] w-[200px] text-dgreen ml-[65px] font-extrabold text-lg mt-[-15px]'>Performance </div>
        <div className='z-0 w-[350px] rounded-md h-200px bg-white mr-9'>1</div>
        </div>
        
        <div className='flex flex-col'>
        <div className='absolute z-50 p-1 flex justify-center rounded-md bg-lgreen h-[40px] w-[200px] text-dgreen ml-[75px] font-extrabold text-lg mt-[-15px]'>Attendance </div>
        <div className='w-[350px] rounded-md h-200px bg-white  mr-9'>2</div>
        </div>
        
        <div className='flex flex-col'>
        <div className='absolute z-50 p-1 flex justify-center rounded-md bg-lgreen h-[40px] w-[200px] text-dgreen ml-[110px] font-extrabold text-lg mt-[-15px]'>Announcements </div>
        <div className='w-[425px] rounded-md h-200px bg-white  mr-9 p-1'>3
        <ul>
            <li>
                Lorem ipsum
            </li>
        </ul>
        </div>
        </div>
        
    </div>
    </div>
 

</div>


  )
}

export default home