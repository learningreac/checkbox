import React, { useState, useEffect } from "react";

export default function FavoritePhrase() {
  const [val, set] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(val);
    set('');
  }

   useEffect(() => {
    console.log(`typing '${val}' or '${phrase}'`);
  }, [val, phrase]);

  /*useEffect(() => {
    console.log(`saved phrase: '${phrase}'`);
  }, [phrase]); // dependency array: the effect now is only invoked when the phrase value has changed. 
  */

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder = {phrase}
        onChange={e => set(e.target.value)}
      />
     <button onClick={createPhrase}> send </button>
    </>
  );
}