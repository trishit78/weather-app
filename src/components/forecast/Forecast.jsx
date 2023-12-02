import React from "react";


import './forecast.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";


const  week = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATERDAY','SUNDAY'];



function forecast({ data }) {


    // const dayInAWeek = new Date().getDay();
    // const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  
    const dayInWeek = new Date().getDay();

    const forecastDay = week.slice(dayInWeek,week.length).concat(week.slice(0,dayInWeek));

    console.log(forecastDay)

  return (
    <>
      <h1 className="text-4xl mt-12 mb-6 text-bold text-center ">Upcoming Forecast</h1>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex w-1/2  pl-6  pr-6  justify-between ml-80 bg-gray-200 rounded-full mb-8">
                    <div className="flex ">
                        
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="img"
                    className="icon-small"
                    />
                  <label className="ml-4 mt-12  font-bold">{forecastDay[idx]}</label>
                    </div>

                  <div className="flex mt-12 space-x-3">
                    <p className="font-bold">{item.weather[0].description}</p>
                    <p className="text-blue-600 font-semibold ">{item.main.temp_max}°C{" "}/ </p>
                    <p className="text-blue-600 font-semibold">{item.main.temp_min}</p>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default forecast;
