import React,{useState} from "react";


export default function Checkmodify({comeindata, important}) {
    const [isactive,setIsactive]=useState(false)
    const [modifyinput,setModifyinput] =useState({ 
        key:"",
        important: comeindata.important,
        content: comeindata.content,
        description: comeindata.description,
        dday: comeindata.dday
    });
    function handleInputChange(field, e) {
        setModifyinput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }
        ));}
    function IntoModify(e){
        return(
            isactive===true?
            <>
            <div>    
            <label>important:</label>
              <input
              type="number"
              value={modifyinput.important}
              placeholder="1~10"
              onChange={(e) => handleInputChange("important", e)}/>
              </div>
              <button onClick={()=>{setIsactive(!isactive);comeindata({  
        ...comeindata, // 기존 상태를 그대로 전달하고
        important: modifyinput.important,
        content: modifyinput.content,
        description: modifyinput.description,
        dday: modifyinput.dday // 필요한 필드만 변경된 값을 넣어줍니다.
    });}
                }>confirm</button>
                
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
