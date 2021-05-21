import React,{useState} from 'react';
import './time.css';

const Time = () => {
    let time=new Date().toLocaleTimeString();
const [t,set]=useState(time);


const increment=()=>{
  let t=new Date().toLocaleTimeString();
  set(t);
  console.log('clicked');

}
setInterval(increment,1000);
  return (
   <>
   <h1 className="time">{t}</h1>
   
   </>
  )
}

export default Time;
