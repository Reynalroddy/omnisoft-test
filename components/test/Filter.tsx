"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query';
import { getAllAge, getAllGender, getAllLevel, getAllStates } from '@/utils/serverCalls';
import { getDomainOfItemsWithSameAxis } from 'recharts/types/util/ChartUtils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
import Loading from './Loading';
const Filter = ({func}:any) => {

    const  [state,setState] = useState("");
    const  [ageFilter,setAge] = useState(0);
    const  [genderFilter,setGender] = useState("");
    const  [levelFilter,setLevel] = useState("");

        const { data, isPending } = useQuery({
        queryKey: ['states'],
        queryFn:  getAllStates,
      });
      const { data:levelData,isPending:level  } = useQuery({
        queryKey: ['level'],
        queryFn:  getAllLevel,
      });
      const { data:ageData,isPending:age  } = useQuery({
        queryKey: ['age'],
        queryFn:  getAllAge,
      });
      const { data:genderData, isPending:gender } = useQuery({
        queryKey: ['gender'],
        queryFn:  getAllGender,
      });
    //   console.log(age)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       func(ageFilter,state,levelFilter,genderFilter)
    //    console.log(ageFilter,state,levelFilter,genderFilter)
      };
//     if(level &&gender && age &&isPending ){
// return <Loading/>
//     }
  return (
    <>
    <div className='mx-16'>
    <p className='text-xl font-bold'>Student Data Table</p> 
    </div>
    <form className='grid grid-cols-1 md:grid-cols-3 mx-16 p-10 mb-16 gap-6 bg-white dark:bg-black dark:text-white rounded-md my-7' onSubmit={handleSubmit}>
    {/* <p>Student Data Table</p> */}
  
    <div className="relative">
    <label
      htmlFor="name"
      className="absolute -top-2 left-2 inline-block bg-white dark:bg-black dark:text-white px-1 text-xs font-medium text-gray-900"
    >
      Age
    </label>
          <select
            id="age"
            name="age"
            // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            className=" block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            defaultValue=""
            onChange={(e:any)=>setAge(e.target.value)}
          >
              <option value="">select Age</option>

              {/* {levelData.map((item:any) => {
            return (
<option value={item.level} key={item.id}>{item.level}</option>

            )
            }
            )
        } */}
              { ageData?.map((item:any)=>{
                return  (
                <option value={item.age} key={item.id}>
                    {item.age}
                    </option>
                )
              })
            
            }
            
          </select>
        </div> 
    
        <div className="relative">
    <label
      htmlFor="name"
      className="absolute -top-2 left-2 inline-block bg-white  dark:bg-black dark:text-white px-1 text-xs font-medium text-gray-900"
    >
      State
    </label>
          <select
            id="state"
            name="state"
            // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            className=" block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-priary sm:text-sm sm:leading-6"
            defaultValue=""
            onChange={(e:any)=>setState(e.target.value)}
          >
             <option value="">select state</option>
             {data?.map((item:any)=>{
                return  (
                <option value={item.name} key={item.id}>
                    {item.name}
                    </option>
                )
              })
            
            }
          </select>
        </div> 
    
        <div className="relative">
    <label
      htmlFor="name"
      className="absolute -top-2 left-2 inline-block bg-white   dark:bg-black dark:text-white px-1 text-xs font-medium text-gray-900"
    >
    Level
    </label>
          <select
            id="level"
            name="level"
            // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            className=" block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            defaultValue=""
            onChange={(e:any)=>setLevel(e.target.value)}
          >
             <option value={""}>select level </option>
             {levelData?.map((item:any) => {
            return (
<option value={item.level} key={item.id}>{item.level}</option>

            )
            }
            )
        }
            {/* <option>100</option>
            <option>200</option>
            <option>300</option> */}
          </select>
        </div> 
        <div className="relative">
    <label
      htmlFor="name"
      className="absolute -top-2 left-2 inline-block bg-white  dark:bg-black dark:text-white px-1 text-xs font-medium text-gray-900"
    >
     Gender
    </label>
    {/* <Select defaultValue={''} name='gender'>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {genderData.map((jobStatus:any) => {
            return (
              <SelectItem key={jobStatus.id} value={jobStatus.gender}>
                {jobStatus.gender}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select> */}
          <select
            id="location"
            name="gender"
            
            // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            className=" block w-full rounded-md border-0 py-4 pl-3 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
            defaultValue=""
            onChange={(e:any)=>setGender(e.target.value)}
          >
            <option value={""}>select gender</option>
            {genderData?.map((item:any) => {
            return (
<option value={item.gender} key={item.id}>{item.gender}</option>

            )
            }
            )
        }
          </select>
        </div> 


{/* 
        {ageData.map(({item,i}:any)=>{
            const {id,age}=item;
            return <h2>{age}</h2>
        })} */}

        <Button type='submit' className='h-[53.5px]'>Search</Button>
            </form>
            </>
  )
}

export default Filter