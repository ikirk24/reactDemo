import React from "react";
// import './site.css'

import Grid from "./grid";


function Site() {

        
   return  (
    <div>
        <div className="transitions-colors duration-900 bg-black w-3xl mx-auto mt-20 h-40 flex justify-center items-center shadow-xl/75 dark:bg-white" >
          <h1 className=" transitions-colors duration-900 text-8xl font-bold text-white tracking-wide text-center text-shadow-lg font-bitcount dark:text-slate-900 dark:text-shadow-md/50 dark:text-shadow-black">Learn React</h1>
        </div>
       <Grid/>
     </div>
    
    )

}



export default Site;