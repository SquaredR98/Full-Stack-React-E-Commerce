import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD89ahSvFPYfUQpkdKoPHwyvlLIvgurfkI",
    authDomain: "ecommerce-squaredr.firebaseapp.com",
    projectId: "ecommerce-squaredr",
    storageBucket: "ecommerce-squaredr.appspot.com",
    messagingSenderId: "484311770039",
    appId: "1:484311770039:web:149af1ea5794ec5bf07e32"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('Error creating user', err.message);
        }
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 