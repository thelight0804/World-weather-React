import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  const cities = ['서울', '도쿄', '베이징', 'LA', '케나다', '캔버라'];

  const [city, setCity] = useState(cities[0]);
  const [tempature, setTempature] = useState(0);
  const [weather, setWeather] = useState('맑음');

  const [selected, setSelected] = useState(cities[0]);

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
              variant='primary'
              key={index}
              className={`city-button ${city === selected ? 'city-button-selected' : ''}`}
              onClick={() => {
                setCity(cities[index]);
                setSelected(cities[index]);
              }}
            >{city}</Button>
          )
        })}
      </div>
    </div>
  )
}

export default App
