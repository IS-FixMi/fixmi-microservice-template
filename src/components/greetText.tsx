/*
 *   File: greetText.tsx 
 *
 *   Purpose: returns a component with the greet text
 *            by calling the api /api/greet
 *
 */ 

import Axios from "axios"
import React, {useState, useEffect} from "react"
import { useErrorBoundary } from "react-error-boundary";
import '../style.css'

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error

    const { showBoundary } = useErrorBoundary()
    showBoundary(error)
    return Promise.reject(error);
  });

export default function GreetText() {

  // Use the Error Bundary handling
  const { showBoundary } = useErrorBoundary()
  // Introduce state to the component
  // The initial state is an empty list
  const [res, setRes] = useState([])

  // Call api
  useEffect(() => {
      const fetchData = async () => {
        Axios.get("http://localhost:3001/api/greet")
            .then(
              response => {
              setRes(response.data)
              },
              error => {
                console.error(error);
                showBoundary(error)
            })
         /*
            .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
              }
              console.log(error.config)
              
              showBoundary(error)

            })*/

      }

      fetchData()
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
