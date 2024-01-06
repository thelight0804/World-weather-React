import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import './App.css'

function App() {
  const cities = ['서울', '도쿄', '베이징', '타이베이', '모스크바', '캔버라', '델리', '런던', '로마', '베를린', 'LA', '케나다', '멕시코', '브라질리아'];
  const [city, setCity] = useState(cities[0]);
  const [tempature, setTempature] = useState(0);
  const [weather, setWeather] = useState('맑음');

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
      {cities.map((city, index) => {
        return <Button variant='primary' className='city-button' key={index}>{city}</Button>
      })}
    </div>
  )
}

export default App
