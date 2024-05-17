import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import Checkcorrect from "./Checkcorrect";
import Checkmodify from "./Checkmodify/Checkmodify";
import Checkmodify1 from "./Checkmodify/Checkmodify1";
import Checkmodify2 from "./Checkmodify/Checkmodify2";
import Checkmodify3 from "./Checkmodify/Checkmodify3";
import Checkgolist from "./Checkgolist";



export default function Makecheck() {
    const location = useLocation();
    const [modifiedData, setModifiedData] = useState({
        important: location.state.important,
        content: location.state.content,
        description: location.state.description,
        dday: location.state.dday
    });
    
    // useEffect(() => {
    //     setModifiedData({
    //         important: location.state.important,
    //         content: location.state.content,
    //         description: location.state.description,
    //         dday: location.state.dday
    //     });
    // }, [location]);

    function comeindata(uploaddata){
        setModifiedData(uploaddata)
    }
    function comeindata1(uploaddata){
        setModifiedData(uploaddata)
    }
    function comeindata2(uploaddata){
        setModifiedData(uploaddata)
    }
    function comeindata3(uploaddata){
        setModifiedData(uploaddata)
    }

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
                <div >IMPORTANT: {modifiedData.important}</div><Checkmodify comeindata={comeindata} important={modifiedData.important} />
                <div >CONTENT: {modifiedData.content}</div><Checkmodify1 comeindata1={comeindata1} content={modifiedData.content}/>
                <div >DESCRIPTION: {modifiedData.description}</div><Checkmodify2 comeindata2={comeindata2} description={modifiedData.description}/>
                <div >DDAY: {modifiedData.dday}</div><Checkmodify3 comeindata3={comeindata3} dday={modifiedData.dday}/>
            </div>
            <div>{modifiedData.important}{modifiedData.content}{modifiedData.description}{modifiedData.dday}</div>
            <Checkcorrect></Checkcorrect>
            <Checkgolist></Checkgolist>
        </>
    );
}
