import React, { useRef, useState, useEffect } from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {

  const newRef = useRef();
  const [values, setValues] = useState("");

  const focusInput = () => {
    newRef.current.focus();
  };
  const settingValue = () => {
    setValues(newRef.current.value);
  }

  return (
    <div>
      <InputField ref={newRef} type="text" /><br />
      <button id="settingValueButton" onClick={settingValue}>Set Value</button>
      <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br /><br />
      <textarea id="textarea" defaultValue={values}></textarea>

    </div>
  );
}


export default App;