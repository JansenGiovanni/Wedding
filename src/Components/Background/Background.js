import React from 'react';
import BackgroundImage from '../../Assets/Asset/DSC_3409.JPG';
import './Background.css';

function Background(){
  return (
        <div className='background' style={{backgroundImage: `url('${BackgroundImage}')`}}></div>
      )
}

export default Background;