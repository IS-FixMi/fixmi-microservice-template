/*
 *   File: App.ts 
 *
 *   Purpose: this file contains the parent of all components
 *
 */ 

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Greet from './components/greet'
import TestText from './components/testText'

function App() {

  return (
    <BrowserRouter>
      <main>
        <container>
          <Routes>
            {/* Routing */}
            <Route path="/" element={<Greet />}/>
            <Route path="/test" element={<TestText />}/>
          </Routes>
        </container>
      </main>

    </BrowserRouter>
  );

}

export default App;

