import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Firebase config for prosjektet intern-d002a
// Disse verdiene finner du i Firebase Console → Project Settings → General → Your apps → Web app
const firebaseConfig = {
  apiKey: "AIzaSyBX REPLACE_THIS WITH_YOUR_ACTUAL_API_KEY",
  authDomain: "intern-d002a.firebaseapp.com",
  projectId: "intern-d002a",
  storageBucket: "intern-d002a.appspot.com",
  messagingSenderId: "REPLACE_THIS",
  appId: "REPLACE_THIS",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export async function saveDemoRequest(data: {
  navn: string
  epost: string
  bedrift: string
  telefon: string
  antallBrukere: string
  melding: string
}) {
  try {
    const docRef = await addDoc(collection(db, 'demoRequests'), {
      ...data,
      status: 'ny',
      opprettet: serverTimestamp(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Firestore error:', error)
    return { success: false, error }
  }
}
