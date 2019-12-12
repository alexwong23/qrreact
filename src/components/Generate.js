import React, {useState} from 'react';
import { Button } from 'antd';
import { utils } from "web3";
var randomString = require("randomstring");

const GenerateButton = ({generate}) => {
  return(
  <div>
    <Button
      type="primary"
      onClick={() => {
        generate(Array.from({length:10}).map(item => {
          let randString = randomString.generate(16);
          return {
            value: randString,
            hash: utils.soliditySha3(randString)
          };
        }));
      }}>
      Generate QR Codes!
    </Button>
  </div>)
}

export default GenerateButton;
