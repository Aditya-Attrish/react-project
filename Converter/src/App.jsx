import { useState, useRef } from 'react'
import { PiArrowsDownUpBold } from "react-icons/pi";
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const inpLabel = useRef();
  const outLabel = useRef();
  
  const Swaping = () => {
    let temp = inpLabel.current.value;
    inpLabel.current.value = outLabel.current.value;
    outLabel.current.value = temp;
    if(input)
      Converter(output)
  }

  const Converter = (x) => {
    //convert a number to other number.
    setInput(x)
    setOutput(parseInt(x,inpLabel.current.value).toString(outLabel.current.value));
  }


  return (
    <>
      <div className="d-flex cols box">
        <div className="my-1 d-flex between">
          <label>
            <select ref={inpLabel}>
              <option value={10}>Decimal</option>
              <option value={2}>Binary</option>
              <option value={16}>Hexadecimal</option>
              <option value={8}>Octo</option>
            </select>
          </label>
          <button onClick={Swaping}><PiArrowsDownUpBold /></button>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => Converter(e.target.value)}
        />
      </div>
      <div className="d-flex cols box">
        <div className="my-1 d-flex between">
          <label>
            <select ref={outLabel}>
              <option value={2}>Binary</option>
              <option value={10}>Decimal</option>
              <option value={16}>Hexadecimal</option>
              <option value={8}>Octo</option>
            </select>
          </label>
        </div>
        <input
          type="text"
          value={output}
          disabled={true}
        />
      </div>
    </>
  )
}

export default App
