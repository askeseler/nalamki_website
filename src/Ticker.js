import React from "react";
import Ticker from "react-ticker";
import events1 from './Pages/events.js';
let events = events1//events1.reverse();

export default function CustomTicker() {
  return (
    <Ticker>
      {({ index }) => (
        <>
          <div style={{ paddingRight: "0.5em" }}>
            &nbsp; {events[index%events.length][2]===""?<>{events[index%events.length][0]}: {events[index%events.length][1]}</>:<><a href={events[index%events.length][2]} style={{color:"black"}}>{events[index%events.length][0]}: {events[index%events.length][1]}</a></>} &nbsp;
          </div>
        </>
      )}
    </Ticker>
  );
}



