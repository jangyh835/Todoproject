import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Makecheck() {
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
