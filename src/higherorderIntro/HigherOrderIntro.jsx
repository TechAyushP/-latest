import React from 'react'
import Withloader from './Withloader'
import User from './User'

const HigherOrderIntro = () => {
   let UserWithloader =Withloader(User)
  return (
    <div>
        <UserWithloader/>
    </div>
  )
}

export default HigherOrderIntro