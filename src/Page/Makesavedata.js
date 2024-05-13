import React from "react";

export default function Makesavedata({ Makeinput }) {
    // Makeinput 데이터를 사용하는 로직 작성
    return (
        <div>
            <h2>Saved Data</h2>
                    ID:{nextId.current}
            IMPORTANT: {Makeinput.important},
                CONTENT: {Makeinput.content},
                DESCRIPTION: {Makeinput.description},
                DDAY: {Makeinput.dday}
        </div>
    );
}