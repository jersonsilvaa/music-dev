import React from 'react'

const Track = (isPLaying, isActive, activeSong) => {
    return <>
        <div className="flex-1 flex items-center justify-start">
            <div className={`${isPLaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 mr-4`}>
                <img src={activeSong?.images?.convert} alt="cover art" className='rounded-full' />
            </div>
            <div className="w-[50%]">
                <p className="truncate text-white font-bold text-lg">
                    { activeSong?.title ? activeSong?.title : 'La canción no está activa' }
                </p>
                <p className="truncate text-gray-300">
                    { activeSong?.subtitle ? activeSong?.subtitle : 'La canción no está activa' }
                </p>
            </div>
        </div>
    </>
}

export default Track