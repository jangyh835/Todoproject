import React,{useState} from "react";


export default function Checkmodify3({comeindata3,dday}) {
    const [isactive,setIsactive]=useState(0)
    const [modifyinput,setModifyinput] =useState({ 
        key:"",
        important: comeindata3.important,
        content: comeindata3.content,
        description: comeindata3.description,
        dday: dday
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
            <><div>
                    <label>D-day:</label>
                    <input
                        type="number"
                        value={modifyinput.dday}
                        placeholder="number"
                        onChange={(e) => handleInputChange("dday", e)}/>
                        </div>:              <button onClick={()=>{setIsactive(!isactive);comeindata3({  // comeindata 함수 호출
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
