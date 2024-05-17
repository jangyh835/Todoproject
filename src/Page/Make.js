import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Makesavedata from "./Makesavedata";

export default function Make() {
    const [Makeinput, setMakeinput] = useState({
        important: "",
        content: "",
        description: "",
        dday: ""
    });
<<<<<<< branch3:src/Page/Make.js
    const [savedData, setSavedData] = useState([]);
    const nextId = useRef(1);
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        // 저장 코드 추가
    }

    function handleInputChange(field, e) {
        // 입력값 변경 코드 추가
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate('./listdata', {
            state: {
                IMPORTANT: Makeinput.important,
                CONTENT: Makeinput.content,
                DESCRIPTION: Makeinput.description,
                DDAY: Makeinput.dday
            }
        });
=======

    const navigate=useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        // if (!Makeinput.trim()) {
        //     return; // 입력 값이 공백이면 처리 중지
        //   }
        if ( Makeinput.important && Makeinput.content && Makeinput.description && Makeinput.dday) {
            // navigate 호출
            navigate('/checklist', {
                state: {
                    IMPORTANT: Makeinput.important,
                    CONTENT: Makeinput.content,
                    DESCRIPTION: Makeinput.description,
                    DDAY: Makeinput.dday
                }
            });
        } else {
            console.error('Makeinput 객체의 일부 속성이 비어 있습니다.');
        }
>>>>>>> local:src/Page/make/Makemain.js
    };
    // const Navigate = ({ MakeInput }) => useNavigate('./listdata',
    //     {
    //         state: {
    //             IMPROTANT: Makeinput.important, NAME: Makeinput.name,
    //             DESCRIPTION: Makeinput.description, DDAY: Makeinput.dday
    //         }
    //     });
    // function handleSubmit(e) {
    //     e.preventDefault();// 버튼만 누르면 리프레시 되는것을 막아줌
    //     console.log(Makeinput);
    // };
    function handleInputChange(field, e) {
        setMakeinput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };
<<<<<<< branch3:src/Page/Make.js
    function Showlist() {
        const inputdata = {
            id: nextId.current,
            IMPORTANT: Makeinput.important,
            CONTENT: Makeinput.content,
            DESCRIPTION: Makeinput.description,
            DDAY: Makeinput.dday
        };
        setSavedData((prevData) => [...prevData, inputdata]);
        nextId.current += 1;
=======
    function CheckButton(){
        return<button type="submit">Check</button>
>>>>>>> local:src/Page/make/Makemain.js
    }

    const Resetlist = () => {
        setMakeinput({
            important: "",
            content: "",
            description: "",
            dday: ""
        });
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>important:</label>
                    <input
                        type="number"
                        value={Makeinput.important}
                        placeholder="1~10"
                        onChange={(e) => handleInputChange("important", e)}
                    />
                </div>
                <div>
                    <label>content:</label>
                    <input
                        type="text"
                        value={Makeinput.content}
                        placeholder="React coding 1hour"
                        onChange={(e) => handleInputChange("content", e)}
                    />
                </div>
                <div>
                    <label>description:</label>
                    <input
                        type="text"
                        value={Makeinput.description}
                        placeholder="description"
                        onChange={(e) => handleInputChange("description", e)}
                    />
                </div>
                <div>
                    <label>D-day:</label>
                    <input
                        type="number"
                        value={Makeinput.dday}
                        placeholder="number"
                        onChange={(e) => handleInputChange("dday", e)}
                    />

                </div>
<<<<<<< branch3:src/Page/Make.js
                <button type="submit">register</button>
                {/* <button type="submit" onClick={() => Navigate({ Makeinput })}>register</button> */}
            </form>
            {/* <button onClick={handleSubmit}>register</button> */}
                <button onClick={Showlist}>Add</button>
                <button onClick={Resetlist}>Reset</button>
            <p>{Makeinput.important && <Makesavedata Makeinput={Makeinput} />}</p>
        </>);
}

=======
                <CheckButton/>
                </form>
                <Makeadd Makeinput={Makeinput} setMakeinput={setMakeinput}/>
                <button onClick={handleReset}>Reset</button>
                </>
    )
}
>>>>>>> local:src/Page/make/Makemain.js
