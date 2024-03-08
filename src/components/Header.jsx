import React from 'react'
import RightToVote from './RightToVote'
import useIsChairperson from '../CustomHooks/useIsChairperson'

const Header = () => {
  const isChairperson = useIsChairperson()

  return (
    <header className='flex items-center justify-between px-8 py-4 border-b'>
        <p className='text-blue-300'>Ballot</p>
        <div className='flex items-center w-[40%] justify-between'>  
            {isChairperson && <RightToVote className="mr-4" />}
        <w3m-button />
        </div>
    </header>
  )
}

export default Header