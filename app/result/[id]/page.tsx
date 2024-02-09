import Result from "@/components/test/Result";
import { fetchResult } from "@/utils/serverCalls";
import React from 'react'

const page = async({
    params,
  }: {
    params: { id: string };
  }) => {
    const data = await fetchResult(params?.id);
    console.log(data);
    if(!data){
      return <div>No result found with this ID</div>
    }
  return (
   <Result data={data}/>
  )
}

export default page

