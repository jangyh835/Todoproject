import React, {useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Checkcorrect from "./Checkcorrect";
import Checkmodify from "./Checkmodify/Checkmodify";
import Checkmodify1 from "./Checkmodify/Checkmodify1";
import Checkmodify2 from "./Checkmodify/Checkmodify2";
import Checkmodify3 from "./Checkmodify/Checkmodify3";
import Checkgolist from "./Checkgolist";



export default function Makecheck() {
    const location = useLocation();
    const index = [1,2,3,4]
    const navigate = useNavigate();
    const [modifiedData, setModifiedData] = useState({
        important: "",
        content: "",
        description: "",
        dday: ""
    });

    useEffect(() => {
        console.log(location);
    }, [location])


    // const handleClick = () => {
    //     navigate('../list', { state: location.state });
    // }}
    // function Checkgolist(){
    //     const handleClick = () => {
    //         navigate('../list', { state: location.state });
    //     }
    // return(<button onClick={handleClick}></button>)
    // }
    return (
        <>
            <div>
                <div >IMPORTANT: {location.state.IMPORTANT}</div><Checkmodify important={location.state.IMPORTANT} />
                <div >CONTENT: {location.state.CONTENT}</div><Checkmodify1 content={location.state.CONTENT}/>
                <div >DESCRIPTION: {location.state.DESCRIPTION}</div><Checkmodify2 description={location.state.DESCRIPTION}/>
                <div >DDAY: {location.state.DDAY}</div><Checkmodify3 dday={location.state.DDAY}/>
            </div>
            <Checkcorrect></Checkcorrect>
            <Checkgolist></Checkgolist>
        </>
    );
}
