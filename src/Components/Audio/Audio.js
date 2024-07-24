import React, { useState, useRef, useEffect } from 'react';
import Audio from '../../Assets/Music/i-will-spend-my-whole-life-loving-you.mp3';
import './Audio.css';

function AudioPlayer(){
 
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
    const handlePlayPause = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

    useEffect(() => {
      const button = document.getElementById('buttonInvitation');
      if (button) {
        button.onclick = handlePlayPause;
      }
  
      // Cleanup function to remove the event listener
      return () => {
        if (button) {
          button.onclick = null;
        }
      };
    });
  
    return (
      <div className="audio-player">
        <audio ref={audioRef} src={Audio} loop/>
        <button className="play-pause-button" onClick={handlePlayPause} >
            {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    );
}

export default AudioPlayer;