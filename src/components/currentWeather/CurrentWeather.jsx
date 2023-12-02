import React from "react";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./currentWeather.css";
function CurrentWeather({ data }) {
  return (
    <>
    <div className="currentweather">

    
      <div className="w-1/2 bg-black shadow-xxl mt-6  pb-8 rounded pt-4 ">
        <div className="flex justify-between mr-8  ">
          <div className="ml-4 ">
            <h1 className="text-xl text-white text-bold">{data.city}</h1>
            <p className="text-white ">{data.weather[0].description}</p>
          </div>
          {/* <WbSunnyIcon style={{ color: "yellow", fontSize: "60px" }} /> */}
          <img
                    src={`icons/${data.weather[0].icon}.png`}
                    alt="img"
                    className="flex justify-center items-center"
                  />
        </div>

        <div className="flex mt-8">
          <div className="text-5xl  ml-4 mt-4 mr-8">
            <h1 className="text-white text-bold text-6xl">
              {Math.round(data.main.temp)}°C{" "}
            </h1>
          </div>

          <div className="ml-24  text-white">
            <p className="text-bold ">Details</p>
            <ul>
              <li>
                <p>Feels Like: {Math.round(data.main.feels_like)}°C</p>
              </li>

              <li>
                <p>Wind : {data.wind.speed}m/s</p>
              </li>
              <li>
                <p>Humidity: {data.main.humidity}%</p>
              </li>
              <li>
                <p>Pressure: {data.main.pressure}h/pa</p>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>

      </div>
    </>
  );
}

export default CurrentWeather;
