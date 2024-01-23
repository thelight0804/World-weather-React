import { useEffect, useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AppJP() {
  const cities = ['東京', '大阪', 'ソウル', '北京', 'LA', 'カナダ', 'キャンベラ', 'デリー', 'ロンドン', 'ローマ', 'ベルリン', 'メキシコ', 'ブラジリア'];
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState(cities[0]);
  const [engCity, setEngCity] = useState(cityToEnglish(city));
  const [tempature, setTempature] = useState(0);
  const [weather, setWeather] = useState('晴天');

  const [selected, setSelected] = useState(cities[0]);

  function cityToEnglish(city) {
    switch (city) {
      case 'ソウル':
        return 'Seoul';
      case '東京':
        return 'Tokyo'
      case '北京':
        return 'Beijing'
      case 'LA':
        return 'Los Angeles'
      case 'カナダ':
        return 'Canada'
      case 'キャンベラ':
        return 'Canberra'
      case 'デリー':
        return 'Delhi'
      case 'ロンドン':
        return 'London'
      case 'ローマ':
        return 'Rome'
      case 'ベルリン':
        return 'Berlin'
      case 'メキシコ':
        return 'Mexico City'
      case 'ブラジリア':
        return 'Brasilia'
      case '大阪':
        return 'Osaka'
    }
  }

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${engCity}&appid=${API_KEY}&units=metric&lang=ja`)
      .then((response) => {
        setTempature(response.data.main.temp);
        setWeather(response.data.weather[0].description);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [city]);

  return (
    <div>
      <div className='lenguage-box'>
        <Link to='/World-weather-React' className='lenguage__btn link-unselected'>KR</Link>
        <Link to='/World-weather-React/ja' className='lenguage__btn'>JP</Link>
      </div>
      <h1 className='title'>世界の現在の天気</h1>

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

export default AppJP
