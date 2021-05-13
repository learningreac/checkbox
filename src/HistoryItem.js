import React from 'react';
import { FaTrash } from "react-icons/fa";

const ListItem = ({ username, setcurrentid, onRemove}) => {
    return (
        <>
            <li>
                <span onClick={() => setcurrentid(username)} > {username}</span>
                <button onClick={() => onRemove(username)}> 
                    <FaTrash />
                </button>
            </li>
        </>
    )
}

export default ListItem;