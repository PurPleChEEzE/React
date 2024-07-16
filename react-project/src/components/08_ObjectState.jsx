import { useState } from "react";

export default function ObjectState() {
    const [user, setUser] = useState({ name: "John", age: 20 })

    function updateName() {
        setUser(prevUser => ({ ...prevUser, name: "Jane" }));
    }


    return (
        <div>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <button onClick={updateName}>UpdateName</button>
        </div>
    )
}