// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// export default function Listdata() {
//     const Listlist = (props) => {
//         const location = useLocation();
//         console.log(location);
//     }
//     const location = useLocation();
//     useEffect(() => {
//         console.log(location);
//     }, [location])
//     const Navigate = ({ location }) => useNavigate('./list', { state: { location } });
//     return (<>
//         <div>{location.state}</div>
//         <button onClick={() => Navigate({ location })}>Check</button>
//     </>)
// }
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Listdata() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(location);
    }, [location])

    const handleClick = () => {
        navigate('../list', { state: location.state });
    }

    return (
        <>
            <div>
                <div>IMPORTANT: {location.state.IMPORTANT}</div>
                <div>CONTENT: {location.state.CONTENT}</div>
                <div>DESCRIPTION: {location.state.DESCRIPTION}</div>
                <div>DDAY: {location.state.DDAY}</div>
            </div>
            <button onClick={handleClick}>Check</button>
        </>
    );
}
