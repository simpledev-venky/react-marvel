import React from 'react'
import Marvel from './Marvel';
import {Route,Routes} from "react-router-dom" 
import Chardetails from './Chardetails';
import Notfound from './Notf';

const App = () => {
  return(
  
      <Routes>
        <Route path='/' element={<Marvel/>}/>
        <Route path='/:id' element={<Chardetails/>}
        />
        <Route path='*' element = {<Notfound/>} />
      </Routes>
  
  
  )
}



export default App;
