import React from 'react';

function Home(){
    return (
        <div>
            Counting Days!
            <div className='groupCountdown'>
                <div id='days' className='countdown'></div>
                <div id='hours' className='countdown'></div>
                <div id='minutes' className='countdown'></div>
                <div id='seconds' className='countdown'></div>
              </div>
        </div>
    );
}

export default Home;