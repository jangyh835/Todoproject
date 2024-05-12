import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";



export default function Accountdata() {
    const AccountList = (props) => {
        const location = useLocation();
        console.log(location);
    }
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])
    return (<></>)
}