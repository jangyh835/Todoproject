import React,{useState} from "react";


export default function Checkmodify3({index,important, content, description, dday}) {
    const [isactive,setIsactive]=useState(0)
    const [modifyinput,setModifyinput] =useState({ 
        key:"",
        important: important,
        content: content,
        description: description,
        dday: dday
    });
    function handleInputChange(field, e) {
        modifyinput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }
        ));}
    function IntoModify(){
        return(
          
            isactive===true?<div>
                    <label>D-day:</label>
                    <input
                        type="number"
                        value={modifyinput.dday}
                        placeholder="number"
                        onChange={(e) => handleInputChange("dday", e)}/>
                        </div>:<button onClick={()=>{!isactive}}></button>
        )
        }
    return (
        <>
            <IntoModify></IntoModify>
        </>
      );
}
