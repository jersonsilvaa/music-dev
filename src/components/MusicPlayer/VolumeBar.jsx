import React from 'react'

import { BsVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs'

const VolumeBar = (value, min, max, onChange, setVolume) => {
    return <>
        <div className="hidden lg:flex flex-1 items-center justify-end">
            { value <= 1 && value > 0.5 && <BsVolumeUpFill size={25} color='#fff' onClick={() => setVolume(0)} /> }
            { value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color='#fff' onClick={() => setVolume(0)} /> }
            { value === 0 && <BsFillVolumeMuteFill size={25} color='#fff' onClick={() => setVolume(0)} /> }

            <input
            min={min}
            max={max}
            type="range"
            step='any'
            value={value}
            onChange={onChange}
            className="2x1:w-40 lg:w-32 h-1 ml-2"
            />
        </div>
    </>
}

export default VolumeBar