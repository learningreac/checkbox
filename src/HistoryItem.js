import React from 'react';


const ListItem = ({username, onFetch}) =>
   <li onClick = {() => onFetch(username)} > {username} </li>

export default ListItem;