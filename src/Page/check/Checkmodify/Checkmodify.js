import React,{useState} from "react";


export default function Checkmodify({important, content, description, dday}) {
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
            <label>important:</label>
              <input
              type="number"
              value={modifyinput.important}
              placeholder="1~10"
              onChange={(e) => handleInputChange("important", e)}/>
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
