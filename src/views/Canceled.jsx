import React from 'react'
import { Helmet } from 'react-helmet'
import NGOICON from './../components/Images/GCAHF.png'
const Canceled = () => {
  return (
    <>
    <Helmet>
        <title>GCAHF</title>
        
        <link rel="icon" href={NGOICON} />
      </Helmet>
        <div className=' tw-flex tw-flex-col tw-h-96 tw-text-center'>
            <p>The Transction was Canceled</p>
        </div>
    </>
  )
}

export default Canceled