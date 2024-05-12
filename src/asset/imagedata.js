import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Imagedata() {
    const ImageList = (props) => {
        const location = useLocation();
        console.log(location);
    }
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location])
    return (<></>)
}