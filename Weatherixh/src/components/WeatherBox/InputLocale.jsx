/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './InputLocale.css'

function InputLocale({ passState }) {
  const [inputState, setInputState] = useState("")


  return (
    <div className='inputLocale'>
            <label htmlFor="location">
              <input type="text" placeholder='Enter City Name' name='location' onChange={e => setInputState(e.target.value)}/>
              <button onClick={()=> passState(inputState)}>GO</button>
            </label>
            <b>or</b>

            <button onClick={() => passState(0)}>Location Auto Detect</button>
        
    </div>
  )
}

export default InputLocale