import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Track from './Track'
import Player from './Player'
import SeekBar from './SeekBar'
import Controls from './Controls'
import VolumeBar from './VolumeBar'

import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice'

const MusicPlayer = () => {
    const dispatch = useDispatch()
    const [repeat, setRepeat] = useState(false)
    const [volume, setVolume] = useState(0.3)
    const [shuffle, setShuffle] = useState(false)
    const [appTime, setApptime] = useState(0)
    const [seekTime, setSeekTime] = useState(0)
    const [duration, setDuration] = useState(0)
    
    const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player)

    useEffect(() => {
        if (currentSongs.length) dispatch(playPause(true))
    }, [currentIndex])

    const handlePlayPause = () => {
        if (!isActive) return
        
        isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true))
    }

    const handleNextSong = () => {
        dispatch(playPause(false))

        if (!shuffle) {
            dispatch(nextSong((currentIndex + 1) % currentSongs.length))
        } else {
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
        }
    }

    const handlePrevSong = () => {
        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs.length - 1))
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
        } else {
            dispatch(prevSong(currentIndex - 1))
        }
    }
    return <>
        <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
            <Track
            isActive={isActive}
            isPlaying={isPlaying}
            activeSong={activeSong}
            />
            <div className="flex-1 flex flex-col items-center justify-center">
                <Controls 
                repeat={repeat}
                shuffle={shuffle}
                isActive={isActive}
                isPlaying={isPlaying}
                setRepeat={setRepeat}
                setShuffle={setShuffle}
                currentSongs={currentSongs}
                handlePrevSong={handlePrevSong}
                handleNextSong={handleNextSong}
                handlePlayPause={handlePlayPause}
                />
                <SeekBar
                min='0'
                max={duration}
                value={appTime}
                onInput={e => setSeekTime(e.target.value)}
                appTime={appTime}
                setSeekTime={setSeekTime}
                />
                <Player
                volume={volume}
                repeat={repeat}
                onEnded={handleNextSong}
                seekTime={seekTime}
                isPlaying={isPlaying}
                activeSong={activeSong}
                currentIndex={currentIndex}
                onTimeUpdate={e => setApptime(e.target.currentTime)}
                onLoadedData={e => setDuration(e.target.duration)}
                />
            </div>
            <VolumeBar
            min='0'
            max='1'
            value={volume}
            onChange={e => setVolume(e.target.value)}
            setVolume={setVolume}
            />
        </div>    
    </>

}

export default MusicPlayer