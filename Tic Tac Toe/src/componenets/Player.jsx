import { useState } from 'react';

export default function Player({in_name,symbol,isactive,onsave}){
    const [val,setVal] =useState(false);
    const [name,setname] =useState(in_name);
    return(
        <li className={isactive? 'active' : undefined}>
           <span className='player'>
           {val?  <input type='text' value={name} onChange={(e)=> setname(e.target.value)}/> : <span className="player-name">{name}</span> }
           <span className="player-symbol">{symbol}</span>
           </span>
           { val?  <button onClick={()=>{setVal(false); onsave(symbol,name)}}>Save</button> : <button onClick={()=>(setVal(true))}>Edit</button> }
        </li>
    )
}