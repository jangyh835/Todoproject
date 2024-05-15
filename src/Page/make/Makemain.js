import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Makeadd from "./Makeadd";


export default function Makemain(){
    
    const [Makeinput, setMakeinput] = useState({ 
        key:"",
        important: "",
        content: "",
        description: "",
        dday: ""
    });
    const navigate=useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/checklist', {
            state: {
                KEY: Makeinput.key,
                IMPORTANT: Makeinput.important,
                CONTENT: Makeinput.content,
                DESCRIPTION: Makeinput.description,
                DDAY: Makeinput.dday
            }
        });
    };
    function handleInputChange(field, e) {
        setMakeinput((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }
        ));
    };
    function RegisterButton(){
        return<button type="submit">register</button>
    }
    function handleReset() {
        setMakeinput({
            key:"",
          important: "",
          content: "",
          description: "",
          dday: ""
        });}
    return(
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
                <RegisterButton/>
                </form>
                <Makeadd setMakeinput={setMakeinput}/>
                <button onClick={handleReset}>Reset</button>
                </>
    )
}