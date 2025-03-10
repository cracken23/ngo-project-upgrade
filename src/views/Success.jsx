import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import NGOICON from './../components/Images/GCAHF.png'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const sucess = () => {
  const history = useHistory();
  useEffect(()=>{
    history.push("/")
  },[])
  return (
    <>
    <Helmet>
        <title>GCAHF</title>
        
        <link rel="icon" href={NGOICON} />
      </Helmet>
        <div className=' tw-flex tw-flex-col tw-h-96 tw-text-center'>
            <p>Thank You For Donating</p>
        </div>
    </>
  )
}

export default Success
