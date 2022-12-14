import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = (isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong) => {
  return <>
    <div className="flex items-center justify-around md:w-36 lg:w-52 2x1:w-80">
      <BsArrowRepeat size={30} color={ repeat ? 'red' : '#fff' } onClick={() => setRepeat((prev) => !prev)} className='hidden sm:block cursor-pointer' />
      { currentSongs?.length && <MdSkipPrevious size={30} color='#fff' className='cursor-pointer' onClick={handlePrevSong} /> }

      {isPlaying ? (
        <BsFillPauseFill size={45} color='#fff' onClick={handlePlayPause} className='cursor-pointer' />
      ) : (
        <BsFillPlayFill size={45} color='#fff' onClick={handlePlayPause} className='cursor-pointer' />
      )}
      {currentSongs?.length && <MdSkipNext size={30} color='#fff' onClick={handleNextSong} className='cursor-pointer' />}
      <BsShuffle size={20} color={shuffle ? 'red' : '#fff'} onClick={() => setShuffle((prev) => !prev)} className='hidden sm:block cursor-pointer' />
    </div>
  </>
}

export default Controls