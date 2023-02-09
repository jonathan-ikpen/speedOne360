import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC67S8P-Rdjjw_hB_6YAoGuY66y-LBDX94",
  authDomain: "speedone360-e5f7b.firebaseapp.com",
  databaseURL: "https://speedone360-e5f7b-default-rtdb.firebaseio.com",
  projectId: "speedone360-e5f7b",
  storageBucket: "speedone360-e5f7b.appspot.com",
  messagingSenderId: "582193523750",
  appId: "1:582193523750:web:9a1a513e47160890eccae7",
  measurementId: "G-BHG0TMZW45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// dB
export const database = getDatabase(app);
