import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Main() {
    const Mainlist = (props) => {
        const location = useLocation();
        console.log(location);
        useEffect(() => {
            console.log(location);
        }, [location])
    }
    return (
        <>
            <div>{location.state}</div>
        </>);
}