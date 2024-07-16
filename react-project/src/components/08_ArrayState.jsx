import { useState } from "react";

export default function ArrayState() {
    const [items, setItems] = useState(['item-1', 'item-2', 'item-3'])

    function addItem() {
        setItems(items => [...items, 'new-item'])
    }
    function deleteItem(index) {
        setItems(items => items.filter((_, i) => i !== index))
    }

    function updateItem(index, newItem) {
        setItems(items =>
            items.map((item, i) => (i === index ? newItem : item))
        );
    }

    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => updateItem(index, "변경됨")}>업데이트</button>
                        <button onClick={() => deleteItem(index)}>삭제</button>
                    </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </>
    )
}