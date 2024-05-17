import React,{useState} from "react";


export default function Checkmodify2({index,important, content, description, dday}) {
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
    function IntoModify({index,onShow}){
        return(

            isactive===true?                
            <div>
            <label>description:</label>
                    <input
                        type="text"
                        value={modifyinput.description}
                        placeholder="description"
                        onChange={(e) => handleInputChange("description", e)}
                    />
                    </div>:<button onClick={()=>{!isactive}}></button>
                    
        )
    }

    return (
        <>
            <IntoModify></IntoModify>
        </>
      );
}
