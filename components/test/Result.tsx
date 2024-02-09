"use client"
import React,{useState,useEffect} from 'react'
import "./Result.css"
import { Button } from '../ui/button'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import  {urlToBase64} from "../../utils/serverCalls"
const Result = ({data}:any) => {

    const [newFace,setNewFace] = useState<any>('' || null)
    const [newFace2,setNewFace2] = useState<any>('' || null)
    useEffect(() => {
        const getNewImage=async()=>{
            const newImg = await urlToBase64(data?.logo)
            const newImg2 = await urlToBase64(data?.profile_picture)
            setNewFace(newImg);
            setNewFace2(newImg2);

        }
    getNewImage();
    }, [])
    
    const handleDownload = () => {
        const input = document.getElementById("result_pdf");
        if (input) {
          html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
    console.log('img',imgData)
            const pdf = new jsPDF();
            const pdfWidth = pdf.internal.pageSize.getWidth();
            pdf.addImage(imgData, 0, 0, pdfWidth, 0);
            pdf.save(`result-${data?.data?.firstname}.pdf`);
          });
        }
      };
  return (
    <>
    <div className='w-100 flex justify-center my-1'>
    <Button className=' text-center' onClick={handleDownload}>Download</Button>
    </div>
<div className="container" id="result_pdf">
{/* School Header Section */}
<header className="header">
  <div className="school-logo w-24 h-24">
  {/* <img src={data?.logo} alt='logo' className='w-[100%] h-[100%]'/> */}

  <img src={newFace} alt='logo' className='w-[100%] h-[100%]'/>
{/* <img src='data:image/png;base64,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'/> */}
  </div>                                        
  <div className="school-info text-center">
    <h2 className='text-xl dark:text-black'>FREMONT COLLEGE OF EDUCATION</h2>
    <p className='text-[#4F4F4F]  text-sm'>No.5 Raymond Osuman Street, PMB 2191<br/> Maitama, Abuja, Nigeria.</p>
   <div className='my-2'>
   <h1 className='text-2xl font-semibold dark:text-black'> Post Graduate Diploma in Education</h1>
    <p className='text-sm dark:text-black'>Student First Semester Statement Of Result</p>
   </div>
   
  </div>
  <div className="school-logo w-24 h-24">
  <img src={newFace2} alt='logo' className='w-[100%] h-[100%]'/>
  </div>
</header>

{/* Student Information Section */}
<section className="student-info dark:text-black">
  <div className="student-details ">
    <h3 ><span className='font-semibold mr-3'>Name:</span>  {data?.data?.firstname} {data?.data?.surname}</h3>
    <h3 ><span className='font-semibold mr-3'>Level:</span>   {data?.data?.level}</h3>
   
  </div>
  <div className="student-session">
  <h3 ><span className='font-semibold mr-3'>Student Number:</span>   {data?.data?.reg_no}</h3>
  <h3 ><span className='font-semibold mr-3'>Session:</span>   {data?.data?.session}</h3>
  </div>
</section>

{/* Student Result Table Section */}
<section className="result-table">
  <table className='t2'>
    <thead className='bg-[#0b7590] text-white'>
    
            <tr>
            <th>S/N</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Unit</th>
              <th>Grade</th>
              <th>Total Point</th>
            </tr>
         
    </thead>
    <tbody className='dark:text-black'>
    {
data?.data?.result?.map((items:any,i:any)=>{
    return  <tr className="odd-row" key={items?.title}>
 <td> {i +1}</td>
        <td> {items?.coursecode}</td>
        <td>{items?.title}</td>
        <td>{items?.credit_unit}</td>
        <td>{items?.grade}</td>
        <td>{items?.total_point}</td>
      </tr>
    
})
        }
    </tbody>
  </table>
</section>

<section className="result-table2">
  <table className='t2'>
    <thead className='bg-[#0b7590] text-white'>
    
            <tr>
            <th>UNTS</th>
              <th>UNTD</th>
              <th>GPTS </th>
              <th>GPTD</th>
              <th>GPATS</th>
              <th>GPATD </th>
            </tr>
         
    </thead>
    <tbody className='dark:text-black'>
      <tr className="odd-row">
        <td> {data?.data?.cummulative?.unts}</td>
        <td>{data?.data?.cummulative?.untd}</td>
        <td>{data?.data?.cummulative?.gpts}</td>
        <td>{data?.data?.cummulative?.gptd}</td>
        <td>{data?.data?.cummulative?.gpats}</td>
        <td>{data?.data?.cummulative?.gpatd}</td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</section>

<section className='my-2'>
    <h3 className='text-sm dark:text-black'>Remarks: <span className="text-[#0b7590]">{data?.data?.cummulative?.remarks}</span></h3>
</section>
<section className='mt-9' >

    <div className='border-solid border-[0.5px] border-black w-20'></div>
    <p className='text-sm  mt-2 dark:text-black'>Registrar</p>
    </section>
</div>
</>
  )
}

export default Result