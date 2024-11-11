import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { getDatabase } from 'firebase/database'
import * as fireabaseAuth from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAwrQEWxay6uhNfNIyLPsnh1w4dk6RF9ss',
  authDomain: 'shuttler-p001.firebaseapp.com',
  databaseURL: 'https://shuttler-p001.firebaseio.com',
  projectId: 'shuttler-p001',
  storageBucket: 'shuttler-p001.firebasestorage.app',
  messagingSenderId: '571374342123',
  appId: '1:571374342123:web:a036013b6e887b9e',
  measurementId: 'G-RSTG3KETSG',
}

export const app = initializeApp(firebaseConfig)

const auth = fireabaseAuth.getAuth(app)
export const firestore = getFirestore(app)
export const db = getDatabase(app)

const functions = getFunctions()

export const sendNotification = (title, message) => {
  collection(firestore, 'notifications')
    .add({
      date: Date(),
      title,
      description: message,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
      alert('Message was sent to all users')
    })

    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}

export const makeAdmin = (email) => {
  let addAdmin = httpsCallable(functions, 'makeAdmin')
  addAdmin({ email })
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err))
}

export const signInWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(email, password).catch((error) => {
    console.error('Error signing in:', error.code, ' - ', error.message)
  })
}

export const authStateChange = (fnc) => {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      fnc(true)
      console.log('Signed in')
    } else {
      fnc(false)
      console.log('No auth')
    }
  })
}

export const checkAdmin = async () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      user.getIdTokenResult().then((idTokenResult) => {
        console.log(idTokenResult.claims.admin)
        return idTokenResult.claims.admin
      })
    }
  })
  return false
}

export const signOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log('Signed Out')
    })
    .catch((error) => {
      console.error(error)
    })
}
