import React from "react";



export default function Makedelete ({i,savemake,setSavemake}){
    const handleDelete = (index) => {
        // key 값이 i와 같지 않은 요소들만 필터링하여 새로운 배열을 생성합니다.
        const deleteSavemake = savemake.filter(item => item.key !== savemake[index].key);
        // 새로운 배열을 상태로 설정하여 해당 요소를 삭제합니다.
        setSavemake(deleteSavemake);
    };

    return (
        <>
            <button onClick={() => handleDelete(i)}>delete</button>
        </>
    );
}