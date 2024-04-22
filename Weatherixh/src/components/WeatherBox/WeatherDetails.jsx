/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateWeather } from '../../redux/action'
import { useNavigate } from 'react-router-dom';

function WeatherDetails({weather}) {
    const [isScrollEnd, setIsScrollEnd] = useState(false);
    const [isScrollTop, setIsScrollTop] = useState(false);
    const [chooseAnim, setChoseAnim] = useState(false)

    const navigate = useNavigate();
    function getCloudCategory(cloudCoverPercent) {
        const cloudCover = cloudCoverPercent / 100; // Convert percentage to fraction
      
        if (cloudCover <= 0.1) {
          return "Clear Sky";
        } else if (cloudCover <= 0.3) {
          return "Few Clouds";
        } else if (cloudCover <= 0.7) {
          return "Partly Cloudy";
        } else if (cloudCover <= 0.9) {
          return "Mostly Cloudy";
        } else {
          return "Cloudy/Overcast";
        }
      }

    useEffect(() => {
        const element = document.getElementById('content');
        function handleScroll() {
            const element = document.getElementById('content');

            // Check if the user has scrolled to the bottom
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // Add 'bouncy' class to trigger the animation
            setIsScrollEnd(true);
            if(!chooseAnim){
                setChoseAnim(1)
            }
            // Remove the 'bouncy' class after the animation completes
            setTimeout(() => {
                setIsScrollEnd(false);
                setChoseAnim(false)

            }, 500); // Adjust timing to match animation duration
            }else if (element.scrollTop === 0) {
                // Add 'bouncy' class to trigger the animation
                setIsScrollTop(true);
                if(chooseAnim){
                    setChoseAnim(0)
                }
                // Remove the 'bouncy' class after the animation completes
                setTimeout(() => {
                  setIsScrollTop(false);
                  setChoseAnim(false)

                }, 500); // Adjust timing to match animation duration
              }
        }
        
        
        element.addEventListener('scroll', handleScroll);
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [isScrollEnd]);
    try {
        const {current, location} = weather
        const otherSection = (section, key) => <li key={key} className="detail">
        <i className="icon">{section.icon}</i>
        <b className="context">
        <i className="fig">{section.fig}</i>
        <i className="text">{section.text}</i>
        </b>
        </li>
  
    const sections = [
    {
    icon: "",
    fig: current.feelslike_c+'℃',
    text: "feels like"
    },
    {
    icon: "",
    fig: current.humidity+'%',
    text: "Humidity"
    },
    {
    icon: "",
    fig: current.wind_mph+'mph',
    text: "Wind Direction"
    },
    {
    icon: "",
    fig: current.wind_mph+'mph',
    text: "Wind Direction"
    }
    ]
     


    return (
        <div className={`content ${ chooseAnim === 1 ? 'bouncy' : chooseAnim === 0 ? 'bouncy-up' : ''}`} id='content' >
            <i className="ICN-look"><img src={current.condition.icon} alt="" /></i>
            <b className="temperature">{current.temp_c}℃</b>
            <b className="condition">{current.condition.text}</b>
            <b className="location">
            <i>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                version="1.1"
                >
                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z" />
                </svg>
            </i>
            {location.name}, {location.country}
            </b>

            <ul className="others">
            {sections.map((section, index) => otherSection(section, index))}
            
            </ul>
        </div>  
    )
    } catch (error) {
        navigate('/')
    }


    
}

export default WeatherDetails