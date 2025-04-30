

import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";






const firebaseConfig = {
  apiKey: "AIzaSyBt-wQgq43hxU3NIwm1n3RLXW9wPyak448",
  authDomain: "netflix-clone-24dee.firebaseapp.com",
  projectId: "netflix-clone-24dee",
  storageBucket: "netflix-clone-24dee.appspot.com",
  messagingSenderId: "398006322016",
  appId: "1:398006322016:web:70b025da12563d4186d405"

};

  const app = initializeApp(firebaseConfig);
 
  const auth = getAuth(app);
  

 export {auth};

 
 
 