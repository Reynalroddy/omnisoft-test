"use client"
import React, { useEffect, useState } from 'react'
import Filter from '@/components/test/Filter'
import { DataTable } from '@/components/test/Datatable'
import { columns } from '@/components/test/Columns'
import { Filtz } from '@/utils/types'
import axios from 'axios'
import Loading from '../components/test/Loading'

    
const page =  () => {
    const [data,setData]= useState([])
    const [loading,setLoading]= useState(false)
    // const { data, isPending } = useQuery({
    //     queryKey: ['students'],
    //     queryFn: () => getAllData(),
    //   });
    // const data =  await getAllData();
    // const { data:ageData,isPending:age  } = useQuery({
    //     queryKey: ['age'],
    //     queryFn: () => getAllAge(),
    //   });
// console.log(data)


const getFilteredData=async (age:number,state:string,level:string,gender:string)=> {
    setLoading(true)
        try {
            const params ={
                age,state,level,gender
            }
    const {data} = await axios.post('https://test.omniswift.com.ng/api/filterData',
       params
    );
    if(data.message==='Successful'){
        setData(data.data.students);
    }
    else{
        setData((prev)=>{
return [];
        });
    }
    setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false) 
        }

    // console.log(age,state,level,gender)
      }


useEffect(() => {
   const getAllData=async ()=> {
    setLoading(true)
        try {
            
    const {data} = await axios.get('https://test.omniswift.com.ng/api/viewAllData');
    setData(data.data.students);
    setLoading(false)
        } catch (error) {
          console.error(error);
          setLoading(false)
          
        }
      }
      getAllData()
}, [])

if(loading){
return <Loading />
}
  return (
  <>
<Filter func={getFilteredData}/>
<DataTable  data={data} columns={columns}/>

  </>
  )
}

export default page