import React from 'react'

const Header = ({setSearchValue})=>{
  return(
    <div className='header-container'>
      <h1>The Hacker News</h1>
      <input className='header-search' placeholder='Search...' onChange={(e)=>setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Header;