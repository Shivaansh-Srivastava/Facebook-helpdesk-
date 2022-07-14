import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDghR14sN_2UMwQFpgZbh_RmJ6hKUmDquI",
  authDomain: "helpdesk-application-6756a.firebaseapp.com",
  projectId: "helpdesk-application-6756a",
  storageBucket: "helpdesk-application-6756a.appspot.com",
  messagingSenderId: "730128923721",
  appId: "1:730128923721:web:0898d37742cafe4b3a5398"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const usersCollectionRef=collection(db,"Users")