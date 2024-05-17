import React,{ useState }   from "react";
import Makedelete from "./Makedelete";
import Makemodify from "./Makemodify";

export default function Makeadd({ Makeinput, setMakeinput }){
    const [savemake,setSavemake] = useState([]);
    const [keynum,setKeynum] =useState(1);
    // function Addbutton(){
    //     const keys = keynum +1;
    // setMakeinput.map((setMakeinput,i)=>{
    //    [...setMakeinput, key: keys]
    // })}
    const handleAdd = (e) => {
        e.preventDefault();
        if (!Makeinput.content.trim()) {
            return; // 입력 값이 공백이면 처리 중지
        }
    
        // savemake 배열에 기존의 savemake 객체와 새로운 객체를 추가합니다.
        setSavemake(prevSavemake => [
            ...prevSavemake,
            {
                ...Makeinput,
                key: keynum
            }
        ]);
    
        setKeynum(prevKeynum => prevKeynum + 1); // 이전 값에 1을 더하여 업데이트합니다.
        
        // 입력값 초기화
        setMakeinput({
            key: "",
            important: "",
            content: "",
            description: "",
            dday: ""
        });
    
        console.log(savemake);
        
    };

    return(<>
        <button onClick={handleAdd}>Add</button>
    <div >
    {savemake?.map((e,i)=>{return(<div key={i}>
            {e.key} IMPORTANT:{e.important} CONTENT:{e.content} DESCRIPTION:{e.description} D-DAY:{e.dday}
            <Makedelete i={i} savemake={savemake} setSavemake={setSavemake}></Makedelete><Makemodify i={i} savemake={savemake} setSavemake={setSavemake}></Makemodify></div>
    )})}
    </div>

    </>)
}