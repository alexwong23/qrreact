import React, { useState, useEffect } from 'react';
import { CSVLink } from "react-csv";
import './App.css';
import GenerateButton from './components/Generate';
import ExportData from './components/Export';
import CodeBox from './components/Code';

var shuffle = require('shuffle-array');

function App() {

  const [codes, setCodes] = useState([]);
  const [hashes, setHashes] = useState([]);
  const [shuffledHashes, setShuffledHashes] = useState([]);

  const codeHeaders = [
    {label: "Index", key: "index"},
    {label: "Random String", key: "value"}
  ];

  const hashHeaders = [
    {label: "Index", key: "index"},
    {label: "Random String", key: "value"},
    {label: "Hashed String", key: "hash"}
  ];

  const generate = (items) => {
    setCodes(codes => items.map((item, index) => {
      return {
        value: item.value,
        index: index + 1
      };
    }));
    hashCodes(items);
  };

  const hashCodes = (items) => {
    setHashes(hashes => items.map((item, index) => {
      return {
        value: item.value,
        hash: item.hash,
        index: index + 1
      };
    }));
    randomiseHashOrder(items);
  };

  const randomiseHashOrder = (items) => {
    let items2 = shuffle(items, { 'copy': true });
    setShuffledHashes(shuffledHashes => items2.map((item, index) => {
      return item.hash
    }));
  };

  return (
    <div className="App">
      <div className="Interaction">
        <h3>QR-Generator</h3>
        <GenerateButton generate={generate} />
        {codes.length === 0 ? '' : <CSVLink
          data={codes}
          filename={"code_list.csv"}
          headers={codeHeaders}>
          Download code list
        </CSVLink>}
        {hashes.length === 0 ? '' : <CSVLink
          data={hashes}
          filename={"hash_list.csv"}
          headers={hashHeaders}>
          Download hash list
        </CSVLink>}
        {shuffledHashes.length === 0 ? '' : <ExportData
          hashes={{hashArr:shuffledHashes}}
          filename="shuffledHashes.json"/>
        }
      </div>
      {codes.map((code) => {
        return <CodeBox codeFromApp={code}/>})
      }
    </div>
  );
}

export default App;
