/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './CustomTemplate.css'

function CustomTemplate({ templateColors }) {
    const [colorObj, setColorObj] = useState({primary: "#333333", secondary: "#FFFFFF"})
    const [theme, setTheme] = useState({light: false})
    const {darkPrimary , darkSecondary} = {
        darkPrimary: '#333333', /* Main accent color */
        darkSecondary: '#FFFFFF' /* Secondary accent color */
    }
    // svgs
    const MoonSVG = ({ width, height, fillColor }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="none"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill={fillColor} />
        </svg>
    );

    const SunSVG = ({ width, height, fillColor }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <rect width='24' height='24' fill="none"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L17.7071 7.70711C17.3166 8.09763 16.6834 8.09763 16.2929 7.70711C15.9024 7.31658 15.9024 6.68342 16.2929 6.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18 12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19C18.4477 13 18 12.5523 18 12Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 16.2929C8.09763 16.6834 8.09763 17.3166 7.70711 17.7071L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L6.29289 16.2929C6.68342 15.9024 7.31658 15.9024 7.70711 16.2929Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44772 13 2 12.5523 2 12Z" fill={fillColor}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill={fillColor}/>
        </svg>
    );
    //   ---------------------



    async function setColor(primary, secondary){
        setColorObj(
            {
                primary,
                secondary
            }
        )
    }
    // Generate a random number between 1 and 5 (inclusive)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function toggleTheme() {
        theme.light ? setTheme({light: false}) : setTheme({light: true})
    }
    // Function to determine text color based on background color brightness
    const getTextColor = (color) => {
        // Convert hex to RGB
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);

        // Calculate brightness
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // Return white for dark backgrounds, black for light backgrounds
        return brightness > 125 ? '#000000' : '#FFFFFF';
    };
    // Function to generate a dimmed version of a color
    const dimColor = (color, factor) => {
        // Convert hex to RGB
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
    
        // Dim the color by reducing the RGB values
        const dimmedR = Math.round(r * factor);
        const dimmedG = Math.round(g * factor);
        const dimmedB = Math.round(b * factor);
    
        // Convert dimmed RGB back to hex
        const dimmedHex = `#${dimmedR.toString(16).padStart(2, '0')}${dimmedG.toString(16).padStart(2, '0')}${dimmedB.toString(16).padStart(2, '0')}`;
    
        return dimmedHex;
    };
    

    function setColors() {
        // Update CSS variables at the root level
        document.documentElement.style.setProperty('--primary', colorObj.primary);
        document.documentElement.style.setProperty('--secondary', colorObj.secondary);
        document.documentElement.style.setProperty('--primary-text', getTextColor(colorObj.primary));
        document.documentElement.style.setProperty('--secondary-text', getTextColor(colorObj.secondary));
        document.documentElement.style.setProperty('--sub-primary', dimColor(colorObj.primary, 0.6));
        document.documentElement.style.setProperty('--sub-secondary', dimColor(colorObj.secondary, 0.6));
        document.documentElement.style.setProperty('--sub-hov-primary', dimColor(colorObj.primary, 0.7));
        document.documentElement.style.setProperty('--sub-hov-secondary', dimColor(colorObj.secondary, 0.7));
    }
    setColors()
    useEffect(() => {
        setColors()

    }, [colorObj, theme])
    useEffect(() => {
        if(!theme.light){
             setColor(darkPrimary, darkSecondary)
        }else{
            let randomTemplate = getRandomNumber(0, templateColors.length - 1)
            setColor(templateColors[randomTemplate].primary, templateColors[randomTemplate].secondary)
        }
    }, [theme])
    

    const colorPallet = templateColors.map((color, index) => {
        const { primary, secondary } = color
        return <li key={index} onClick={() => {
            if(!theme.light){
                toggleTheme()
            }
            setColor(primary, secondary)

        }} style={{backgroundColor: primary, border: `2px solid ${secondary}`}}></li>
    })
    
  return (
    <div className='customTemplate'>
        <button className="themeMode" onClick={() => toggleTheme()}>
            {theme.light ? <SunSVG width={30} height={30} fillColor={getTextColor(colorObj.primary)}/> : <MoonSVG width={30} height={30} fillColor={getTextColor(colorObj.primary)}/>}
        </button>
        <ul className="template">
           {
                colorPallet
           }
        </ul>
    </div>
  )
}

export default CustomTemplate