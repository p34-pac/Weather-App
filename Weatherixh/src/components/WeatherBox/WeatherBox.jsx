/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './WeatherBox.css'
import { useNavigate } from 'react-router-dom';

function WeatherBox({ children }) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        // Navigate to the previous page
        navigate(-1); // Equivalent to clicking the browser's back button
      };
    



  return (
    <>
        <div className='weatherBox'>
            
            <nav className="wbNav">
                <h1>Weather App</h1>
                {window.location.href.includes("weather")?
                    <button onClick={handleGoBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M6.66669 16H25.3334" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66669 16L14.6667 24" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.66669 16L14.6667 8" stroke="#6C7275" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    :null
                }
            </nav>
            {children}
        </div>
    </>
  )
}

export default WeatherBox
// ℉ ℃

