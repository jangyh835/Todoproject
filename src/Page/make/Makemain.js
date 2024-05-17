import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Makeadd from "./Makeadd";


export default function Make() {
    const [Makeinput, setMakeinput] = useState({
        important: "",
        content: "",
        description: "",
        dday: ""
    });

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
    function CheckButton(e){
        return<button type="submit">Check</button>
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
                <CheckButton/>
                </form>
                <button onClick={Resetlist}>Reset</button>
                <Makeadd Makeinput={Makeinput} setMakeinput={setMakeinput}/>
                </>
    )
}
