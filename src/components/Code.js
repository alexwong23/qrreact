import React, {useState} from 'react';
import '../Code.css';
var QRCode = require('qrcode.react');

const CodeBox = ({codeFromApp:code}) => {
  return (
    <div class="codeBox">
      <h3>Sample Title here</h3>
      <div class="qrCode">
        <QRCode value={code.value}/>
      </div>
      <div class="right">
        <img src="access_logo.jpeg" alt="Access Logo"/>
      </div>
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>
      </div>
      <div class="footer">
        <p>Powered by <img src="jedtrade-logo-01.png" alt="Jupitor Logo"/></p>
        <h2>#AGM{code.index}</h2>
      </div>
    </div>
  )
}

export default CodeBox;
