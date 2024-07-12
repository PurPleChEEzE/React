// import React from "react";


function Jsx() {
    const todoClass = "className";

    return (
        <>
            <h1 className={todoClass}>Todo List</h1>
            <ul style={{ backgroundColor: "black", color: "pink", fontSize: "20px" }}>
                <li>잠자기</li>
                <li>먹기</li>
                <li>자기</li>
            </ul>
        </>
    );
}

export default Jsx;