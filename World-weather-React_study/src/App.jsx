import { useEffect, useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const cities = ['서울', '도쿄', '베이징', 'LA', '케나다', '캔버라', '델리', '런던', '로마', '베를린', '멕시코', '브라질리아'];
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState(cities[0]);
  const [engCity, setEngCity] = useState(cityToEnglish(city));
  const [tempature, setTempature] = useState(0);
  const [weather, setWeather] = useState('맑음');

  const [selected, setSelected] = useState(cities[0]);

  function cityToEnglish(city) {
    switch (city) {
      case '서울':
        return 'Seoul';
      case '도쿄':
        return 'Tokyo'
      case '베이징':
        return 'Beijing'
    }
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${engCity}&appid=${API_KEY}&units=metric&lang=kr`)
      .then((response) => {
        // console.log(response.data.main.temp); // 온도
        // console.log(response.data.weather[0].description); // 날씨

        setTempature(response.data.main.temp);
        setWeather(response.data.weather[0].description);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [city]);

  return (
    <div>
      <h1 className='title'>세계 현재 날씨</h1>

      <div className='weather-box'>
        <div className='weather-info'>
          <div className='city'>{city}</div>
          <div>
            <div className='weather'>{weather}</div>
            <div className='tempature'>{tempature} °C</div>
          </div>
        </div>
      </div>

      <div className='city-box'>
        {cities.map((city, index) => {
          return(
            <Button
              variant={`${city === selected ? 'outline-secondary' : 'secondary'}`}
              key={index}
              className={'city-button'}
              onClick={() => {
                setCity(cities[index]);
                setSelected(cities[index]);
                setEngCity(cityToEnglish(city));
              }}
            >{city}</Button>
          )
        })}
      </div>
    </div>
  )
}

export default App
