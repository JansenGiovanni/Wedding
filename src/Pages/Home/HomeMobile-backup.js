import React, {useEffect, useRef, useState} from 'react';
import { Dimensions} from 'react-native';
import BackgroundTransparant from '../../Assets/Asset/bg transparant.PNG';
import Image1 from '../../Assets/Asset/gambar2.jpg';
import './HomeMobile.css';

function HomeMobile(){
  const heightResponsive = Dimensions.get('window').height;
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Sep 14, 2024 19:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  };

  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });

  return (
        <section id="home">
          <div style={{
                        backgroundImage: `url('${Image1}')`, 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `100% ${heightResponsive}px`,
                        height: heightResponsive, 
                        width: '100%'}}>
            <img src={BackgroundTransparant} alt='background' className='background'></img>
            
            <div className='countdown'>
              <div style={{padding: '10px'}}>
                <div className='theWedding'>The wedding of</div>
                <div className='theCouple'>Jansen & Adel</div>
                <hr className='horizontalLine'></hr>
                <div style={{display: 'flex'}}>
                <div className='dateTimePlace'>Saturday, September 14th 2024 <br /> at Bekasi Convention Center <br /> Bekasi Selatan</div>
                <div className='verticalLine'></div>
                <div>
                  <section className='countdownTime'>
                    <p>{timerDays}</p>
                    <p>{timerHours}</p>
                    <p>{timerMinutes}</p>
                    <p>{timerSeconds}</p>
                  </section>
                  <section className='countdownDate'>
                    <p>Days</p>
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                  </section>
                </div>
                </div>
                <hr className='horizontalLine'></hr>
              </div>
            </div>
          </div>
        </section>
      )
}

export default HomeMobile;