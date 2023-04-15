import React from 'react'
import './App.css'
import { Avatar } from '@mui/material'

export default function Post({username,caption,imageURL}) {
  return (
    <div className='post'>
        <div className="post__header">
        <Avatar className='post__avatar' src='https://www.pexels.com/photo/man-smiling-behind-wall-220453/' alt={username}/>
        <h3>{username}</h3>
        </div>
      <img src={imageURL}alt="404" className='post__img' height="583px" width="473px"/>
      <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
      <hr />
    </div>
  )
}
