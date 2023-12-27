import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  const cities = ['서울', '도쿄', '베이징', 'LA', '케나다', '캔버라']; //여기에 값이 1억개가 있어요

  return (
    <div>
      <Button variant="primary" className='city-button'>{cities[0]}</Button>
      <Button variant="primary" className='city-button'>{cities[1]}</Button>
      <Button variant="primary" className='city-button'>{cities[2]}</Button>
      <Button variant="primary" className='city-button'>{cities[3]}</Button>
      <Button variant="primary" className='city-button'>{cities[4]}</Button>
      <Button variant="primary" className='city-button'>{cities[5]}</Button>
    </div>
  )
}

export default App
