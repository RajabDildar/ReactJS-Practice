import WeatherInfo from "./WeatherInfo";
import { useState } from "react";
import SearchBox from "./SearchBox.jsx";

export default function WeatherApp() {
  let [cityName, setCityName] = useState("");
  let [weather, setWeather] = useState();
  let [error, setError] = useState(false);
  let [imgUrl, setImgUrl] = useState(
    "https://images.unsplash.com/photo-1607364851800-991c1f32e943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D"
  );

  const apiKey = import.meta.env.VITE_API_KEY;
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(URL);
      let jsonRes = await res.json();
      console.log(jsonRes);
      console.log(jsonRes.message);
      console.log(error);
      if (jsonRes.message) {
        console.log(json.message);
        setError(true);
        console.log(json.message);
      } else {
        setWeather(jsonRes);
        setError(false);
        setImgUrl((currUrl) => {
          currUrl =
            jsonRes.main.humidity > 80
              ? "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D"
              : jsonRes.main.humidity > 60
              ? "https://images.unsplash.com/photo-1580324409155-6ef2a085444d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjBob3R8ZW58MHx8MHx8fDA%3D"
              : "https://images.unsplash.com/photo-1607364851800-991c1f32e943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHNlYXNvbnxlbnwwfHwwfHx8MA%3D%3D";

          return currUrl;
        });
      }
    } catch (e) {
      console.log(`e = ${e}`);
      setError(true);
    }
  };

  let handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div>
      <h2>Weather App</h2>
      <SearchBox
        cityName={cityName}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <WeatherInfo error={error} imgUrl={imgUrl} weather={weather} />
    </div>
  );
}
