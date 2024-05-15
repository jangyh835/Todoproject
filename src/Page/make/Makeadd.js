import React,{useState}   from "react";

export default function Makeadd({setMakeinput}){
    const [savemake,setSavemake] = usestate("");
    const [keynum,setKeynum] =usestate(1);
    function Addbutton(){

    setMakeinput.map((setMakeinput,i)=>{
        [...setMakeinput, ]
    })}
    function handleAdd(){
        const key = keynum +1;
        setKeynum()
        return 

            <p></p>

    }
    return(<>
        <button onClick={handleAdd}>Add</button>
    </>)
}