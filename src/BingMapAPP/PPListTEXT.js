import React from 'react';

const PPListText = ({ data }) => {
    console.log(data);
    return (
        <>
            <ul className='pplisttext' >
                {data.map((element, i) => (
                    //  if (undefined !== element.point) {
                    <li key={i}> {element.name} </li>
                ))}
            </ul>
        </>
    )
};


export default PPListText;
