import React from 'react';
import Prewed2 from '../../Assets/Asset/couple2.png';
import './OpeningMobile.css';
import './Countdown';

function OpeningMobile(){
  return (
      <section id='opening'>
        <div style={{position: 'relative', zIndex:0}}>
            <div className='backgroundOpening' style={{backgroundImage: `url('${Prewed2}')`}}>
              <div className='openingCouple'>
                <div className='titleTheWedding'>THE WEDDING OF</div>
                <div className='titleOurName'>JANSEN & ADEL</div>
                <div className='invitationDateOpening'>SATURDAY, 14 SEPTEMBER 2024</div>
                <div className='groupCountdown'>
                  <div className='countdown'>
                    <div>Days</div>
                    <div id='days'></div>
                  </div>
                  <div className='countdown'>
                    <div>Hours</div>
                    <div id='hours'></div>
                  </div>
                  <div className='countdown'>
                    <div>Minutes</div>
                    <div id='minutes'></div>
                  </div>
                  <div className='countdown'>
                    <div>Seconds</div>
                    <div id='seconds'></div>
                  </div>
                </div>
              </div>
              <div className='quotesWrapper'>
                <div className='titleQuotes'>
                  Dhammapada XXIII
                </div>
                <div className='quotes'>
                  If in the journey of your life you find a friend who is wise and suitable to live with you, let yourself walk with them, happily and
                  knowingly overcome all the distress. 
                </div>
              </div>
            </div>
        </div>
      </section>
      )
}

export default OpeningMobile;