import React, {useState} from 'react';
import {Button} from 'antd';
var randomString = require("randomstring");

const GenerateButton = ({generate}) => {
  return(
  <div>
    <Button
      type="primary"
      onClick={() => {
        generate(Array.from({length:30},()=> ({
          value: randomString.generate(16)
        })));
      }}>
      Generate QR Codes!
    </Button>
  </div>)
}

export default GenerateButton;
