import React from 'react'
import NavbarComp from './components/navbarComp'
import SidebarComp from './components/SidebarComp'

const App = () => {
  return (
    <div className='bg-gray-200'>
       <NavbarComp/> 
       <div className='p-4'>
        <SidebarComp/>

       </div>
    </div>
  )
}

export default App
