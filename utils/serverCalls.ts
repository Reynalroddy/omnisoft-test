import axios from "axios";


type GetAllDataTypes = {
    id: number;
    surname: string;
    firstname: string;
    age?: number;
    gender:string;
    level:string;
    state:string;
  };
  export async function  getAllData() {
    try {
const {data} = await axios.get('https://test.omniswift.com.ng/api/viewAllData');
return data.data.students || [];
    } catch (error) {
      console.error(error);
      return [] ;
    }
  }
  export async function  getAllStates() {
    try {
const {data} = await axios.get('https://test.omniswift.com.ng/api/viewAllStates');
return data.data || [];
    } catch (error) {
      console.error(error);
      return [] ;
    }
  }
  export async function  getAllAge() {
    try {
const {data} = await axios.get('https://test.omniswift.com.ng/api/viewAllAges');
// console.log(data)
return data.data 
    } catch (error) {
      console.error(error);
      
    }
  }
  export async function  getAllLevel() {
    try {
        // https://05ie21yeka.execute-api.eu-west-3.amazonaws.com/staging/option/states/63
        // https://test.omniswift.com.ng/api/viewAllLevels
const {data} = await axios.get('https://test.omniswift.com.ng/api/viewAllLevels');
return data.data;
    } catch (error) {
      console.error(error);
    }
  }
  export async function  getAllGender() {
    try {
const {data} = await axios.get('https://test.omniswift.com.ng/api/viewAllGender');
return data.data || [];
    } catch (error) {
      console.error(error);
      return [] ;
    }
  }

  export async function  fetchResult(id:any) {
    try {
const {data} = await axios.post(`https://test.omniswift.com.ng/api/viewResult/${id}`);
// console.log(data)
return data;
    } catch (error) {
      console.error(error);
    }
  }



    export async function urlToBase64(url:any) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error converting URL to base64:", error);
        return null;
      }
    }