// import React, { useState,useRef } from "react";
//  //Hook은 최상위 레벨(at the top level)에서 작동."Rendering시,동일 순서로Hook호출가능"
// import { useNavigate } from "react-router-dom";
//  //register button event 시 입력된 listdata를 확인하는 page로 이동.
// import Makesavedata from "./Makesavedata"; //
// //자식 component로 listdata를 확인하는 page 보여주는 component
// import Makeinput from "./Makeinput";
// export default function Make() { //

//  //inputdata state 정의
//     const nextId = useRef(1);
//     const [savedData, setSavedData] = useState([]);
//     const navigate = useNavigate();

//     // function handleSubmit(e) {
//     //     e.preventDefault();
//     //     // 저장 코드 추가
//     // }

//     // function handleInputChange(field, e) {
//     //     // 입력값 변경 코드 추가
//     // }


    // const Navigate = ({ MakeInput }) => useNavigate('./listdata',
    //     {
    //         state: {
    //             IMPROTANT: Makeinput.important, NAME: Makeinput.name,
    //             DESCRIPTION: Makeinput.description, DDAY: Makeinput.dday
    //         }
    //     });
//     // function handleSubmit(e) {
//     //     e.preventDefault();// 버튼만 누르면 리프레시 되는것을 막아줌
//     //     console.log(Makeinput);
//     // };

//     function Showlist() {
//         nextId.current += 1;
//         const inputdata = {
//             id: nextId.current,
//             IMPORTANT: Makeinput.important,
//             CONTENT: Makeinput.content,
//             DESCRIPTION: Makeinput.description,
//             DDAY: Makeinput.dday
//         };
//         setSavedData((prevData) => [...prevData, inputdata]);
//     }

//     const Resetlist = () => {
//         setMakeinput({
//             important: "",
//             content: "",
//             description: "",
//             dday: ""
//         });
//     };


//     return (
//         <>
//                 <button type="submit">register</button>
//                 {/* <button type="submit" onClick={() => Navigate({ Makeinput })}>register</button> */}
//             {/* <button onClick={handleSubmit}>register</button> */}
//                 <button onClick={Showlist}>Add</button>
//                 <button onClick={Resetlist}>Reset</button>
//             <p>{Makeinput.important && <Makesavedata Makeinput={Makeinput} />}</p>
//         </>);
// }

