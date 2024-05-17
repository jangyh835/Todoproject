import React from "react";

export default function Makedeleteall({Uploaddel}){

    return(<>
    <button onClick={()=>{Uploaddel([])}}>All Delete</button>
    </>)
}