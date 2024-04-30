import { getFirebaseApp } from "../firebaseHalper";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateEmail, sendEmailVerification, updatePassword } from "firebase/auth";
import { child, getDatabase, ref, set, update } from "firebase/database";
import { authenticate , logout} from "../../store/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData } from "./userActions";

export const signUp = (email,
    userName,
    city,
    password,
    confirmPassword) => {
    return async dispatch => {
        const app = getFirebaseApp()
        const auth = getAuth(app)
        console.log(auth.currentUser);

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            const { uid, stsTokenManager } = result.user

            const { accessToken, expirationTime } = stsTokenManager;

            const expiryDate = new Date(expirationTime)

            const userData = await createUser(email, userName, city, uid)
            dispatch(authenticate({ token: accessToken, userData, isNewUser: true }))
            saveDataToStorage(accessToken, uid, expiryDate)

        } catch (error) {
            console.log(error);
            const errorCode = error.code

            let message = "Something went wrong"
            if (errorCode === "auth/email-already-in-use") {
                message = "This email already in use"
            }
            throw new Error(message)
        }
    }
}

const createUser = async (email, userName, city, userId) => {
    const userData = {
        email,
        userName,
        city,
        userId,
        bio: "",
        profilePicURL: "",
        followers: [],
        following: [],
        Subscribers:[],
        rank: 0,
        NumberOfReports: 0,
        signUpDate: new Date().toISOString()
    }

    const dbRef = ref(getDatabase())
    const childRef = child(dbRef, `users/${userId}`)
    await set(childRef, userData)
    return userData
}

const saveDataToStorage = (token, userId, expiryDate) => {
    AsyncStorage.setItem("userData", JSON.stringify({ token, userId, expiryDate: expiryDate.toISOString() }))
}


export const login = (email, password) => {
    return async dispatch => {
        const app = getFirebaseApp()
        const auth = getAuth(app)

        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            const { uid, stsTokenManager } = result.user

            const { accessToken, expirationTime } = stsTokenManager;

            const expiryDate = new Date(expirationTime)

            const userData = await getUserData(uid)
            dispatch(authenticate({ token: accessToken, userData, isNewUser: false }))
            saveDataToStorage(accessToken, uid, expiryDate)

        } catch (error) {

            const errorCode = error.code

            let message = "Something went wrong"
            if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
                message = "The username or password was incorrect";
            }
            throw new Error(message)
        }
    }
}

export const userLogOut =   () => {
return async dispatch =>  {
    AsyncStorage.clear()
    dispatch(logout())
}
}



export const updateUserData = async (userId, newData) => {
     
    const dbRef = ref(getDatabase())
    const childRef = child(dbRef, `users/${userId}`)
    await  update(childRef, newData)
}

export const updateUserEmail = async (newEmail,password) => {
    const auth =  getAuth()
    const user = auth.currentUser;
    try {
        // await updateEmail(user, newEmail);
       await updatePassword(user, password)
        
        console.log("Email updated successfully!");
    } catch (error) {
        console.error("Error updating email:", error);
    }
};