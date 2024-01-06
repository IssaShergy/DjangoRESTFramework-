import { useState,useEffect } from 'react'
 

function App() {
  const [data,setData]=useState([])
 useEffect(()=> {
 async function fetchData() {
  console.log(import.meta.env.VITE_API_URL)
  try {
    const response= await fetch(import.meta.env.VITE_API_URL)
    if (!response){
      throw new Error('Network respons was not ok')
    }
    const result= response.json();
    console.log('result::',result);
    setData(result)

  }
  catch (error){
    console.error('Error fetching data',error);
  }
}
fetchData();

 },[])

  return (
    <>
 
   <h1>DATA:   </h1>
    </>
  )
}

export default App
