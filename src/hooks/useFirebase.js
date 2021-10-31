import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/Initialize-Authentication";

initialAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider()

    const auth = getAuth()

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }



    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [auth])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return {
        user,
        googleSignUp,
        logOut
    }


}
export default useFirebase;