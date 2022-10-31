import React, { useEffect, useRef } from 'react'

const Player = (activateSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat) => {
    const ref = useRef(null)

    if (ref.current) {
        if (isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }

    useEffect(() => {
        ref.current.volume = volume
    }, [volume])

    useEffect(() => {
        ref.current.currentTime = seekTime
    }, [seekTime])

    return <>
        <audio
        src={activateSong?.hub?.actions[1]?.uri}
        ref={ref}
        loop={repeat}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedData={onLoadedData}
        />
    </>
}

export default Player