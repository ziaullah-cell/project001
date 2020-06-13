import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [isDay,setDay] = useState(true);
  let [pvalue,nvalue] = useState(1);
  
  return (
    <div className={`isDay ${isDay?"isDay":"isNight"}`}>
      <h2>Developed by Zia Ullah Student of PIAIC-AI Batch 35</h2>
     Good = {isDay?"Day":"Night"}
     <br /> Counter Value ={pvalue}
    
    <button onClick={()=>setDay(!isDay)}>click for D/N</button>
    <button onClick={()=>nvalue(pvalue+2)}>Update Counter</button>
   
    </div>
  );
}

export default App;

