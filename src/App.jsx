import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import './App.css'
import axios from 'axios';

function App() {
  //API 키
  const API_KEY = import.meta.env.VITE_OPEN_OPENWEATHER_API_KEY;
  const cities = ['서울', '도쿄', '홋카이도', '베이징', '타이베이', '모스크바', '캔버라', '델리', '런던', '로마', '베를린', 'LA', '케나다', '멕시코', '브라질리아'];

  const [city, setCity] = useState(cities[0]);
  const [engCity, setEngCity] = useState(cityToEnglish(city));
  const [tempature, setTempature] = useState(0);
  const [weather, setWeather] = useState('맑음');

  const [selected, setSelected] = useState(cities[0]);

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${engCity}&appid=${API_KEY}&units=metric&lang=kr`)
    .then((response) => {
      setTempature(response.data.main.temp);
      setWeather(response.data.weather[0].description);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [city])

  function cityToEnglish(city) {
    switch (city) {
      case '서울':
        return 'Seoul';
      case '도쿄':
        return 'Tokyo';
      case '베이징':
        return 'Beijing';
      case '홋카이도':
        return 'Hokkaido';
      case '타이베이':
        return 'Taipei';
      case '모스크바':
        return 'Moscow';
      case '캔버라':
        return 'Canberra';
      case '델리':
        return 'Delhi';
      case '런던':
        return 'London';
      case '로마':
        return 'Rome';
      case '베를린':
        return 'Berlin';
      case 'LA':
        return 'Los Angeles';
      case '케나다':
        return 'Canada';
      case '멕시코':
        return 'Mexico';
      case '브라질리아':
        return 'Brasilia';
      default:
        return 'Seoul';
    }
  }

  return (
    <div>
      <h1 className='title'>세계 현재 날씨</h1>
      <div className='weather-box'>
        <div className='weather-info'>
            <div className='city'>{city}</div>
          <div>
            <div className='weather'>{weather}</div>
            <div className='tempature'>{`${tempature}℃`}</div>
          </div>
        </div>
      </div>
      <div className='city-box'>
        {cities.map((city, index) => {
          return (
              <Button
                variant={`${city === selected ? 'outline-secondary' : 'secondary'}`}
                className='city-button'
                key={index}
                onClick={() => {
                  setCity(cities[index]);
                  setSelected(cities[index]);
                  setEngCity(cityToEnglish(city));
                }}
              >{city}</Button>
          );
        })}
      </div>
    </div>
  )
}

export default App
