import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useCheckAuth = (q) => {
  const [user, setUser] = useState(false);

  // console.log("useCheckAuth");
  const checkUserStatus = async (q) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // console.log("onAuthStateChanged");
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const userMail = user.email;
        // console.log(user);
        if (user.uid) {
          setUser(true);
        } else {
          setUser(false);
        }

        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  };

  useEffect(() => {
    checkUserStatus();
  }, []);

  return { user };
};
