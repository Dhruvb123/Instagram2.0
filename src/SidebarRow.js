import React from 'react'
import './App.css'

export default function SidebarRow({Icon,title,selected}) {
    
  return (
    <div className='sidebarRow' >
        <Icon className="sidebarRow__icons"/>
        {selected?<p className='sidebarRow__title_s'>{title}</p>:<p className='sidebarRow__title'>{title}</p>}
    </div> 
  )
}
