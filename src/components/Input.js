import React, {useState} from 'react';
import {Input, Icon} from 'antd';

const { Search } = Input;

const InputBox = ({add}) => {
  const [value, setValue] = useState('');

  return(<div>
   <Search 
   value={value}
   onChange={(e)=>setValue(e.target.value)}
   placeholder="todo"
   enterButton={<Icon type="plus" />}
   onSearch={()=>{
     add(value);
     setValue('')
  }}
   />

  </div>)
}

export default InputBox;