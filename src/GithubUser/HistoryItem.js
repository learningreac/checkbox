import React from 'react';
import { FaTrash } from "react-icons/fa";
import { useGit } from './GithubUserProvider';

const ListItem = ({ username }) => {
    // setcurrentid = { setID }     onRemove = {removeUser}
    const { setID,  removeUser} = useGit();
    return (
        <>
            <li>
                <span onClick={() => setID(username)} > {username}</span>
                <button style={{marginLeft:'20px'}} onClick={() =>  removeUser(username)}> 
                    <FaTrash />
                </button>
            </li>
        </>
    )
}

export default ListItem;