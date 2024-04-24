/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom';

import "./App.css";
import CustomTemplate from "./components/CustomTemplate/CustomTemplate";
import InputLocale from "./components/WeatherBox/InputLocale";
import WeatherBox from "./components/WeatherBox/WeatherBox";
import { changeLocation, updateWeather } from "./redux/action";
import WeatherDetails from "./components/WeatherBox/WeatherDetails";



function App() {
  const navigate = useNavigate();
  const [weather, setWeather] = useState(null)
  const [showWeatherDetails, setShowWeatherDetails] = useState(false)
  const weatherGet = useSelector(state => state.weather)
  const myLocation = useSelector(state => state.location)


  const dispatch = useDispatch();

  useEffect(()=>{
    // weatherGet.then(res => setWeather(res))
    setWeather(weatherGet)
  }, [weatherGet])
  useEffect(()=>{
    handleUpdateWeather(myLocation)
  }, [myLocation])
  useEffect(()=>{
    if(weather){
      navigate('/weather')
    }
  }, [weather])
  useEffect(()=>{
    setWeather(null)
  },[])

  const handleUpdateWeather =  async (weatherInfo) => {
    let weatherObj = await getWeather(weatherInfo)
    dispatch(updateWeather(weatherObj))
  };



  

  const handleChangeLocation = async (location) => {
    event.preventDefault();

    if (location === 0) {
      // Check if Geolocation is supported
      if ("geolocation" in navigator) {
        // Request location
        navigator.geolocation.getCurrentPosition(
          // Success callback
          function (position) {
            // Retrieve coordinates
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
  
            dispatch(changeLocation({
              latitude,
              longitude,
            }));
          },
          // Error callback
          function (error) {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported in this browser");
      }
    } else {
      dispatch(changeLocation(location));    
      handleUpdateWeather(myLocation)

    }
  };




  
  

 




  async function fetchWeather(area) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=ae9a8de3a3b0411db47172713241304&q=${area}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function getWeather(location) {
    if (typeof location == "string") {
      let weather = await fetchWeather(location);
      return(weather);
    } else if (typeof location == "object") {
      try{
        let weather = await fetchWeather(`${location.latitude},${location.longitude}`);
        return(weather);
      }catch(err){
        return
      }
    }
  }


  const colorPalettes = [
    { primary: "#008000", secondary: "#B87333" }, // Emerald Green & Copper
    { primary: "#0F52BA", secondary: "#B76E79" }, // Sapphire Blue & Rose Gold
    { primary: "#008080", secondary: "#CD7F32" }, // Teal & Bronze
    { primary: "#FF6F61", secondary: "#40E0D0" }, // Coral Pink & Turquoise
    { primary: "#6A0DAD", secondary: "#C0C0C0" }, // Royal Purple & Silver
    { primary: "#800000", secondary: "#F7E7CE" }, // Maroon & Champagne
    { primary: "#E6E6FA", secondary: "#98FF98" }, // Lavender & Mint Green
    { primary: "#191970", secondary: "#FFD700" }, // Midnight Blue & Gold
    { primary: "#DC143C", secondary: "#FFFFF0" }, // Crimson Red & Ivory
  ];




  return (
    <>
      <header>View your weather sits</header>
      <CustomTemplate templateColors={colorPalettes} />

      <div className="weatherDetailsBox">
        <WeatherBox>
            <Routes>
              <Route path="/" element={<InputLocale passState={(typed) => handleChangeLocation(typed)} />} />
              <Route path="/weather" element={<WeatherDetails weather={weather}/>} />
            </Routes>
        </WeatherBox>
      </div>
    </>
  );
}

export default App;
