import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Redir = () => {
  const history=useHistory()
  useEffect(()=>{
    history.push("/Home")
  },[])
}
