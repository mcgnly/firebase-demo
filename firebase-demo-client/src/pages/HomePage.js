import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../firebase/firebaseContext';

export default function HomePage(){
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState('');

  useEffect(()=>{
    // use this watcher here so that it finishes initializing before updating
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        setUser(user.displayName);
      } else {
        // No user is signed in.
        console.log('no user')
      }
    });
  }
  , [firebase]);

  return (
    <div>
    <h3>Home Page</h3>
    <div>
      {user ?
        <p>Hello, {user}</p> :
        <p>go to landing to sign in</p>
      }
    </div>
  </div>
  );
}