import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentTime,setCurrentTime]=useState(new Date());
  useEffect(()=>{
    const timer=setInterval(()=>{
      setCurrentTime(new Date());
    },1000)

    return ()=>clearInterval(timer);
  },[]);

    const formatHour = (hour) => {
      return hour===0?12:hour>12?hour-12:hour;
    }

    const formatTimeWithLeadingZero = (num) =>{
      return num<10? `0${num}`:num;
    }

    const formatDate = (date) =>{
      const Option={weekday: "long", year: "numeric", month:"long", day:"numeric"};
      return date.toLocaleDateString(undefined, Option);
    }
  return (
    <>
      <div className="container">
        <div>
          <h1 className="heading">DIGITAL CLOCK</h1>
          <p className="time">
            {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:{formatTimeWithLeadingZero(currentTime.getMinutes())}:{formatTimeWithLeadingZero(currentTime.getSeconds())}
            {currentTime.getHours()>=12?" PM":" AM"}
          </p>
          <p className="day">{formatDate(currentTime)}</p>
        </div>
      </div>
      <p className="footer">Designed by <a href="https://www.linkedin.com/in/veeramanijothimurugan/">Veeramani</a></p>
    </>
  );
}

export default App;
