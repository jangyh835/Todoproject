// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function List() {}
//     const Listlist = (props) => {
//         const location = useLocation();
//         console.log(location);
//         useEffect(() => {
//             console.log(location);
//         }, [location])
//         const Ddaytimer = () => {
//             const Setdate = new Date('2024-05-12T09:00:00+0900')
//             const now = new Date()
//         }
//         const dis = setDate.getTime() - now.getTime()
//         const min1 = 1000 * 60
//         const h = Math.floor(dis / (min * 60 * 24))
//         const [day, setDay] = useState(h)
//         useEffect(() => {
//             const countdown = setInterval(() => {
//                 if (parseInt(day) === 0) {
//                     clearInterval(countdown);
//                 } else {
//                     setDay(prevDay => prevDay - 1);
//                 }
//             }, 1000);
//             return () => clearInterval(countdown); // cleanup 함수를 이용하여 컴포넌트가 unmount되었을 때 clearInterval을 호출하여 setInterval을 정리합니다.
//         }, [day]);
//     }


//     return (
//         <>
//             <div>{location.state}</div>
//             <div>clearInterval(countdown)</div>
//         </>);
// }

