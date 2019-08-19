import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../firebase/firebaseContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function LandingPage(){
  // hooks equivalent to <FirebaseContext.Consumer>
  const firebase = useContext(FirebaseContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    const currentUser = firebase.auth().currentUser;
    setLoggedIn(!!currentUser);
  }
  , [firebase]);

  const uiConfig = {
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful.
    signInSuccessUrl: '/home',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  };


  return (
    <div>
      <h3>Landing Page</h3>
      <div>
        {loggedIn ?
          <p>you are signed in</p> :
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        }
      </div>
    </div>
  );
}