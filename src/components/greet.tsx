/*
 *   File: greet.tsx 
 *
 *   Purpose: the greet component, It makes a call to the
 *            backend at /api/greet and displays the message 
 *            on screen
 *
 */ 

import Axios from "axios"
import React, {useState, useEffect} from "react"

import '../style.css'


export default function Greet() {

  // Introduce state to the component
  const [res, setRes] = useState([])

  // Call api
  useEffect(() => {
    async function go() {
      const response = await Axios.get("http://localhost:3001/api/greet")
      setRes(response.data)
    }
    go()
  }, [])
  

  return (
    <div className="App text-3xl font-bold underline flex h-screen bg-sky-400">
      <div className="m-auto">
        <p>
          React says: {res.text}
        </p>
      </div>
    </div>
  );
}
