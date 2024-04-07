import React, { useRef, useState, useEffect } from 'react'
import '../css/audio.css'

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

function ReprodutorMp3({ audiofile }) {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };

        const handleDurationChange = () => {
            setDuration(audioRef.current.duration);
        };

        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('durationchange', handleDurationChange);

        return () => {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.removeEventListener('durationchange', handleDurationChange);
        };
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (event) => {
        const seekTime = event.target.value;
        setCurrentTime(seekTime);
        audioRef.current.currentTime = seekTime;
    };


    return (
        <div className="audio-player">
            <audio
                ref={audioRef}
                src={audiofile}
            />
            <button onClick={togglePlayPause}>
                {isPlaying ? <img src={require('../img/pause.svg').default} alt='pause' className='icon' /> : <img src={require('../img/play.svg').default} alt='play' className='icon' />}
            </button>
            <span className='tempo'>{formatTime(currentTime)} / {formatTime(duration)}</span>
            <input
                type="range"
                value={currentTime}
                max={duration}
                onChange={handleSeek}
            />
        </div>
    )
}