import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { storage } from './firebase';

export default function ImageUpload() {
    const [caption,setcaption]=useState(' ');
    const [progress,setprogress]=useState(0);
    const [image,setImage]=useState(null);

    function handleChange(e){
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    function handleUpload(){
        const uploadTask= storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
                setprogress(progress);
            }
        )
    }

  return (
    <div className='imageupload'>
      <input type="text" placeholder='Caption' value={caption} onChange={event=>setcaption(event.target.value)}/>
      <input type="file" onChange={handleChange}/>
      <Button onClick={handleUpload}>+</Button>
    </div>
  )
}
