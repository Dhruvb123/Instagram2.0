import React,{useState,useEffect} from 'react'
import './App.css'
import Header from './Header'
import Post from './Post'
import { collection,onSnapshot } from 'firebase/firestore'
import { db } from './firebase'
 
export default function Content() {
    const [posts,setposts]=useState([])

    useEffect(()=>{
        onSnapshot(collection(db,'igclone-posts'),(snapshot)=>{
            setposts(snapshot.docs.map(doc=>doc.data()));
        })
    },[])

  return (
    <div className='content__main'>
      <Header />
      {
        posts.map((d)=>
         (<Post username={d.username} caption={d.caption} imageURL={d.imageURL}/>)
        )
      }
    </div>
  )
}
