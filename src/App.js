import React, { useState, useEffect } from 'react';
import './App.css';
// import InputBox from './components/Input';
import GenerateButton from './components/Generate';
import CodeBox from './components/Code';

function App() {

  // const [items, setItems] = useState([]);

  // const add = (items) => {
  //   setItems([
  //     ...items,
  //     {value: v, key: items.length}
  //   ])
  // };

  // const open = (key) => {
  //   console.log(items.splice(key,1).value) // display item value
  //   // setItems(items.filter(it=>it.key !== key))
  // }

  //
  // useEffect(()=>{
  //   console.log(items);
  // }, [items])

  // useEffect(()=>{
  //   // do setup
  //   // or update

  //   return () => {
  //     // do clean up
  //   }
  // }, [items])

  const [codes, setCodes] = useState([]);

  const generate = (items) => {
    setCodes(codes => (items));
  };

  return (
    <div className="App">
      <h3>QR-Generator</h3>
      <GenerateButton generate={generate} />
      {codes.map((code) => {
        return <CodeBox codeFromApp={code}/>
      })}
    </div>
  );
}

export default App;
