//auth
import {
  getAuth, //function that triger the aute prosses
  createUserWithEmailAndPassword, //creats a new user//async function returns a promice
  signOut, //a func that sign the user out
  signInWithEmailAndPassword, //a func to auth users at sign in
  onAuthStateChanged, //lets us know wen the user is signdin or out in real time
} from "firebase/auth";

const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection, //gets the collection refernce needs 2 args the dataBase ref and the collection neme
  getDocs, //a promice that gets all the docs from a collection needs 1 arg the colection ref
  addDoc,
  deleteDoc, // function that used to delete a document from the dataBase gets one arg the doc ref
  doc, // use to get a ref for a single doc in the collection gets 3 args the db,the coll Name and the id of the doc
  onSnapshot, // syncrunos function that gets data from the database and refres evry tim thers a cheng
  query, //use to query the database for diferent data gets 2 args the ref of the collection and the where function
  where, // use inside the query to retrive data gets 3 args the field name, comperasion like == ,what we wont it to be equal to
  orderBy, //get the option to order the data theks one arg the property we wont to order by
  serverTimestamp, //
  getDoc, //gets a singel document
  updateDoc, //gives the option to update a singale ducument //gets a ducRef and an object containing the  payload
} = require("firebase/firestore");

//TO-DO: create an .env file fore firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyAbPZibCSrcmKfdFQWq2TgVlbeGXl0CyPw",
  authDomain: "my-knowledge-f7b06.firebaseapp.com",
  projectId: "my-knowledge-f7b06",
  storageBucket: "my-knowledge-f7b06.appspot.com",
  messagingSenderId: "139448644860",
  appId: "1:139448644860:web:15d2f00049f43e3c431379",
};

// initialize the app
initializeApp(firebaseConfig);

//init services
//fireStore
export const db = getFirestore();

//init aute
export const auth = getAuth();
//collection ref
export const collArreyRef = collection(db, "Arreys");
export const collhtmlTagsRef = collection(db, "htmlTags");
export const collhtmlAttrRef = collection(db, "htmlAttributes");
export const collRegexRef = collection(db, "regexCheatSheet");
export const CollectionsDataRef = collection(db, "CollectionsData");
export const JsOneLinersRef = collection(db, "JsOneLiners");
export const toDoRef = collection(db, "toDo");
export const sqlGeneralRef = collection(db, "sqlGeneral");

//querys

export const q = query(collArreyRef);

//add to data base
export function addToDataBase(collectionRef, data) {
  console.log(data);
  addDoc(collectionRef, { ...data });
}

//remove from data base
//js
export function removeFromDataBase(collName, id) {
  const docRef = doc(db, collName, id);
  deleteDoc(docRef);
}

//updat document
export function upDateDataBase(collName, id) {
  const docRef = doc(db, "Arreys", "7BwxXa2vyVmG2O41akxJ");
  updateDoc(docRef, {
    name: "reduce",
  }).then(console.log("update done"));
}

//creats user
export function creatUser(email, password) {
  createUserWithEmailAndPassword(
    auth,
    "hezirahmani@getDefaultNormalizer.com",
    "H@e*z(i!"
  )
    .then((Credential) => {
      console.log("user creaetd");
      console.log(Credential);
    })
    .catch((err) => {
      console.log(err.massage);
    });
}

//need to check way we dont need Credentials
export function signOutFunc(params) {
  signOut(auth)
    .then((Credential) => console.log(Credential))
    .catch((err) => console.log(err.message));
}

export function signInFunc(params) {
  signInWithEmailAndPassword(
    auth,
    "hezirahmani@getDefaultNormalizer.com",
    "H@e*z(i!"
  )
    .then((Credential) => console.log(Credential))
    .catch((err) => console.log(err.message));
}

//subsciption to auth
// onAuthStateChanged(auth,(user)=>
// {console.log(user);

// })
export function auteStatus(params) {}
