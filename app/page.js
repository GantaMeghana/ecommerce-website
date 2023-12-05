"use client"
import React from 'react';
import Link from 'next/link';
import Grid from './grid.js';
import Rows from './rows.js';
import Components from './components.js';

import"bootstrap/dist/css/bootstrap.css";
const App=()=>{
    return(
        <>
            <Components/>   
            <Grid/>
            <Rows/>
                                     
        </>
       
    )
}
export default App;
