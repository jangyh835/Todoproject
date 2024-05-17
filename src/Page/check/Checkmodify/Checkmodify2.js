import React,{useState} from "react";


export default function Checkmodify2({comeindata2, description}) {
    const [isactive,setIsactive]=useState(false)
    const [modifyinput,setModifyinput] =useState({ 
        key:"",
        important: comeindata2.important,
        content: comeindata2.content,
        description: comeindata2.description,
        dday: comeindata2.dday
    });
    function handleInputChange(field, e) {
        setModifyinput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }
        ));}
    function IntoModify(){
        return(

            isactive===true?      
            <>          
            <div>
            <label>description:</label>
                    <input
                        type="text"
                        value={modifyinput.description}
                        placeholder="description"
                        onChange={(e) => handleInputChange("description", e)}
                    />
                    </div>:              <button onClick={()=>{setIsactive(!isactive);comeindata2({  // comeindata 함수 호출
        important: modifyinput.important,
        content: modifyinput.content,
        description: modifyinput.description,
        dday: modifyinput.dday
    });}}>comfirm</button>
                    </>
              :
              <>
              <button onClick={()=>{setIsactive(!isactive);}}>modify</button>
              </>
                    
        )
    }

    return (
        <>
            <IntoModify></IntoModify>
        </>
      );
}
