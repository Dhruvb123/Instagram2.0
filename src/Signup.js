import React, { useEffect } from 'react'
import {useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
 
export default function Signup() {
    const [open, setOpen] = useState(false);
    const [openSignIn,setOpenSignIn]=useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      backgroundColor: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [user,setuser]=useState(null);

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(authUser)=>{
        if(authUser){
          setuser(authUser); 
        }
        else{
          //user has logged out
          setuser(null);
        }
      })
      return()=>{
        unsubscribe();
      }
    },[user,username]);
    
    function handleSignUp(event){
      event.preventDefault();
      createUserWithEmailAndPassword(auth,email,password)
        .then((userCred)=>{
          // alert("Success");
          return userCred.user.updateProfile({
            displayName: username
          })
        })
        .catch((error)=>{
          alert(error.message);
        })
        setOpen(false);
    }

    function handleSignIn(event){
      event.preventDefault();
      console.log("sign in")
      signInWithEmailAndPassword(auth,email,password)
      .catch((error)=>alert(error.message));
      setOpenSignIn(false);
    }

  return (
    <div className='signup'>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={style}>
          <form className='app__signup'>
            <Input 
                placeholder='username'
                value={username}
                onChange={(e)=>setusername(e.target.value)}
              />
              <Input 
                placeholder='email'
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
              <Input 
                placeholder='password'
                value={password}
                type='password'
                onChange={(e)=>setpassword(e.target.value)}
              />
              <Button type="submit" onClick={handleSignUp}>SignUp</Button>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={()=>setOpenSignIn(false)}
      >
        <div style={style}>
          <form className='app__signup'>
              <Input 
                placeholder='email'
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
              <Input 
                placeholder='password'
                type='password'
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
              />
              <Button type="submit" onClick={handleSignIn}>SignIn</Button>
          </form>
        </div>
      </Modal>

      {user?(
        <Button onClick={()=>auth.signOut()}>Logout</Button>
      ):(
        <div className="app__logincontainer">
          <Button onClick={()=>setOpenSignIn(true)}>SignIn</Button>
          <Button onClick={handleOpen}>SignUp</Button>
        </div>
      )
      }
    </div>
  )
}
