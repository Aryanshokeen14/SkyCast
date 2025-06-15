import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
import Navbar from "./navbar.jsx";
import Footer from "./Footer.jsx";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    weather: "haze",
    feelslike: 24.8,
    temp: 24.8,
    tempMin: 24.8,
    tempMax: 24.8,
    humidity: 24.8,
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  const style = {
    border: "1px solid black",
    background: "#D1F2EB",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={style}>
      <Navbar />

      <div style={{ flex: "1" }}>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
        <br />
      </div>
      <Footer />
    </div>
  );
}
