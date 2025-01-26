import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Settings from "./Settings"
import { useState } from "react";

export default function Layout(){
      const [color,setColor]=useState("white");
      const [mode,setMode]=useState(4);

    return(
        <div>

            <Routes>
            <Route path="/setting" element={<Settings color={color} setColor={setColor} mode={mode} setMode={setMode} />}></Route>
            <Route path="/" element={<Home color={color} mode={mode}/>}></Route>

            </Routes>
        </div>
    )
}