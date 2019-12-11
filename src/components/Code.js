import React, {useState} from 'react';
import './Code.css';
var QRCode = require('qrcode.react');

const CodeBox = ({codeFromApp:code}) => {
  return(
    <div style={{display: "inline-block", width: "30%"}}>
      <p>{code.value}</p>
      <QRCode value={code.value} size={180}/>,
    </div>
  )
}

export default CodeBox;
