import React,{useState} from "react";


export default function Checkmodify1({comeindata1,content}) {
    const [isactive,setIsactive]=useState(false)
    const [modifyinput,setModifyinput] =useState({ 
        key:"",
        important: comeindata1.important,
        content: content,
        description: comeindata1.description,
        dday: comeindata1.dday
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
            <label>content:</label>
            <input
                type="text"
                value={modifyinput.content}
                placeholder="React coding 1hour"
                onChange={(e) => handleInputChange("content", e)}/>
            </div>
              <button onClick={()=>{setIsactive(!isactive);comeindata1({  // comeindata 함수 호출
        important: modifyinput.important,
        content: modifyinput.content,
        description: modifyinput.description,
        dday: modifyinput.dday
    });}}>comfirm</button>
              </>
            :
            <>
            <button onClick={()=>setIsactive(!isactive)}>modify</button>
            </>
        )
    }

    return (
        <>
            <IntoModify></IntoModify>
        </>
      );
}
