import React,{useState} from "react";


export default function Checkmodify1({index,important, content, description, dday}) {
    const [isactive,setIsactive]=useState(false)
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
            <label>content:</label>
            <input
                type="text"
                value={modifyinput.content}
                placeholder="React coding 1hour"
                onChange={(e) => handleInputChange("content", e)}/>
            </div>
:<button onClick={()=>{!isactive}}></button>
        )
    }

    return (
        <>
            <IntoModify></IntoModify>
        </>
      );
}
