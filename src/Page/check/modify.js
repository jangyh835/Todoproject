// import React from "react";


// export default function Makemodify({ i, savemake, setSavemake }) {
//     const handleModify = (index, newValue) => {
//         // 수정할 요소의 key 값
//         const modifyKey = savemake[index].key;

//         // 수정할 요소를 제외한 나머지 요소들을 유지하는 새로운 배열 생성
//         const updatedSavemake = savemake.map(item => {
//             if (item.key === modifyKey) {
//                 // 수정할 요소에 새로운 값을 할당
//                 return { ...item, ...newValue };
//             }
//             return item;
//         });

//         // 수정된 배열을 상태로 설정하여 업데이트
//         setSavemake(updatedSavemake);
//     };

//     return (
//         <>
//             <button onClick={() => handleModify(i, /* 새로운 값 */)}>
//                 Modify
//             </button>
//         </>
//     );
// }
