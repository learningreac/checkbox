import React from 'react';


const ListItem = ({username, setcurrentid}) =>
   <li onClick = {() => setcurrentid(username)} > {username} </li>

export default ListItem;