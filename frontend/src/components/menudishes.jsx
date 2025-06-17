import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Dishes from "./dishes";
import Menu from "./Menu";

export default function Menudishes()
{
    const [chosen,setDish]=useState("");
    useEffect(()=>{
        console.log(chosen);
    },[chosen]);
     return(
        <div>

    <Menu setDish={setDish}></Menu>
    <Dishes chosen={chosen}></Dishes>
        </div>
     )
  



}