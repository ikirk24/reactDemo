import React from 'react';
import Site from '../props/site'
import NavBar from '../props/navbar'


function App() {
 return ( 
 <div className="transitions-colors duration-900 bg-white pt-20 dark:bg-black h-full">
    <div className="transitions-colors duration-900  bg-slate-50 mx-20 mb-0 dark:bg-gray-950">
      <NavBar/>
      <Site/>
    </div>
  </div>
 )
}

export default App;
