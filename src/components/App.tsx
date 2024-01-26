/*
 *   File: App.ts 
 *
 *   Purpose: this file contains the parent of all components
 *
 */ 

mport Axios from "axios"
import React, {useState, useEffect} from "react"

function App() {

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
    <div className="App">
        <p>
          React says: {res.text}
        </p>
    </div>
  );
}

export default App;

