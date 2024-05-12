import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Make() {
    const [Makeinput, setMakeinput] = useState({
        important: "",
        content: "",
        description: "",
        dday: ""
    });
    const Navigate = ({ MakeInput }) => useNavigate('./listdata',
        {
            state: {
                IMPROTANT: Makeinput.important, NAME: Makeinput.name,
                DESCRIPTION: Makeinput.description, DDAY: Makeinput.dday
            }
        });
    function handleSubmit(e) {
        e.preventDefault();// 버튼만 누르면 리프레시 되는것을 막아줌
        console.log(Makeinput);
    };
    function handleInputChange(field, e) {
        setMakeinput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };
    const Showlist = () => {
        <><p>{Makeinput}</p></>
    }
    const Resetlist = () => {
        setMakeinput('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>important:</label>
                    <input
                        type="important"
                        value={Makeinput.important}
                        placeholder="1~10"
                        onChange={(e) => handleInputChange("important", e)}
                    />
                </div>
                <div>
                    <label>content:</label>
                    <input
                        type="content"
                        value={Makeinput.content}
                        placeholder="React coding 1hour"
                        onChange={(e) => handleInputChange("content", e)}
                    />
                </div>
                <div>
                    <label>description:</label>
                    <input
                        type="description"
                        value={Makeinput.description}
                        placeholder="description"
                        onChange={(e) => handleInputChange("description", e)}
                    />
                </div>
                <div>
                    <label>D-day:</label>
                    <input
                        type="dday"
                        value={Makeinput.dday}
                        placeholder="number"
                        onChange={(e) => handleInputChange("dday", e)}
                    />

                </div>
                <button type="submit" onClick={() => Navigate({ Makeinput })}>register</button>
                <button onClick={Showlist}>Add</button>
                <button onClick={Resetlist}>Reset</button>
            </form>
        </>);
}