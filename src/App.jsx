import React from 'react'
import NavbarComp from './components/navbarComp'
import SidebarComp from './components/SidebarComp'
import HomeComp from './components/HomeComp'

const App = () => {
  return (
    <div className='bg-gray-200'>
       <NavbarComp/> 
       <div className='p-4 flex flex-row gap-3'>
        <SidebarComp/>
        <div>
          <HomeComp/>
        </div>
       </div>
    </div>
  )
}

export default App
