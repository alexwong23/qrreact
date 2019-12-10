import React, { useState, useEffect } from 'react';
import './App.css';
import InputBox from './components/Input';



function App() {
  const [items, setItems] = useState([]);

  const add = (v) => {
    setItems([
      ...items,
      {value: v, key: items.length}
    ])
  };

  const remove = (key) => {
    console.log(key)
    // const newItems = [...items]
    // newItems.splice(key,1);
    setItems(items.filter(it=>it.key !== key))
  }

  useEffect(()=>{
    console.log(items);
  }, [items])

  // useEffect(()=>{
  //   // do setup
  //   // or update

  //   return () => {
  //     // do clean up
  //   }
  // }, [items])

  return (
    <div className="App">
      <header className="App-header">
        <h3>TODO-APP</h3>
        <InputBox add={add} />
        {items.map((item, index) => { return <div key={item.key} onClick={()=>remove(item.key)}>{item.value}</div> })}

      </header>
    </div>
  );
}

export default App;
