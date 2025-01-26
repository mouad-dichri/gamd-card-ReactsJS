import { useState } from "react"
import { Link } from "react-router-dom";

export default function Settings({ color, setColor ,mode,setMode}){

   

    const handleChange = (e) => {
        setColor(e.target.value); 
      };
      const handleChangeMode = (e) => {
        setMode(e.target.value); 
      };
    return(
        <div>
            <div> <label>Choose a Background Color </label>
            <select name="color" onChange={handleChange} value={color}>
            <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option>
            <option value="white">White</option>
            </select>
           <Link to="/"> <button>Change</button></Link></div>
           <div>Changer le mode de jeu
             <select name="mode" onChange={handleChangeMode} value={mode}>
            <option value="4">4</option>
             <option value="16">16</option>
             <option value="32">32</option>
           
            </select>
           <Link to="/"> <button>Change</button></Link> </div>
           
        </div>
    )
}