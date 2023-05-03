import React, {useState} from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import {BiBell} from 'react-icons/bi'
import {RiUploadCloud2Fill} from 'react-icons/ri'
import {MdPictureAsPdf, MdEditDocument} from 'react-icons/md'
import Navbar from '@/components/navbar'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
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
    createData('SEM I', 'blah'),
    createData('SEM II', 'blah' ),
    createData('SEM III', 'blah'),
    createData('SEM IV', 'blah'),
    createData('SEM V', 'blah'),
    createData('SEM VI', 'blah'),
    createData('SEM VII', 'blah'),
    createData('SEM VIII', 'blah'),
   
  ];
  


const grades = () => {

  

  return (


<div className='bg-bggrey flex flex-row w-full h-[1100px] text-ubuntu'>
    <Navbar/>
    <div className='flex flex-col '>
        <div className='absolute z-50 bg-lgreen h-[70px] w-[1130px] text-dgreen ml-[300px] mt-5 rounded-md p-3 font-extrabold  flex flex-row items-center justify-between'><div className='flex flex-col'><span className='text-2xl'>Grades</span><p className='font-normal'>Academic details</p></div> <span className='font-bold text-base ml-[-780px] mt-[-16px]'></span> <span className='  text-2xl font-bold flex flex-row'><BiBell className='m-2'/> </span></div>
    <div className='bg-white p-10 ml-[270px] w-[1200px] mt-14 h-[1000px] z-0 rounded-md'>
        <div className='table p-3'>
            <p className='m-2 text-dgreen text-xl'>Semester wise CGPA</p>
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
   
        <p className='mt-3 m-2 text-dgreen text-xl'>Results</p>
        <div className='bg-[#F4F4F4] h-14 w-auto m-5'>
            <div className='flex flex-row justify-start items-center ml-2'><MdPictureAsPdf className='text-[#818080] h-16 w-7'/>  
            <div className='flex flex-col ml-2'>
            <p className='text-sm text-[#818080]'>Pdf Name</p>
            <p className='text-xs text-[#818080]'>memory</p>
            </div>
            <div className='flex flex-row ml-auto'><MdEditDocument  className='text-[#818080] h-16 w-7 mx-1'/> <AiOutlineDownload  className='text-[#818080] h-16 w-7 mx-1'/></div></div>
          
        </div>

        <br/>
        <br/>
        <br/>

            <div className='flex flex-row'>

            <div className='w-full h-24 border-dashed border-2 border-[#302E2E] flex flex-row justify-center items-center'>
          <p className='text-[#302E2E] text-md'>Drag files here or <span className='text-[#818080] text-md'>Browse</span></p>
         
            </div>
            <div className='bg-lgreen w-32 ml-2 flex flex-col'><RiUploadCloud2Fill className='text-white h-12 w-10 box-border items-center justify-center ml-9 mt-3' /><p className='text-white ml-5 text-sm'>Upload File</p></div>
        </div>

       

    </div>
   
    </div>
 

</div>


  )
}

export default grades