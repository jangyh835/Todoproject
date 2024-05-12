import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Listdata() {
    const Listlist = (props) => {
        const location = useLocation();
        console.log(location);
    }
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])
    const Navigate = ({ location }) => useNavigate('./list', { state: { location } });
    return (<>
        <div>{location.state}</div>
        <button onClick={() => Navigate({ location })}>Check</button>
    </>)
}