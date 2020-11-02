import firebase from 'firebase';
require('@firebase/firestore')

/*var firebaseConfig = { 
  apiKey: "AIzaSyBQ_ArYTm_rJ684VKEXQ2-gOZU4RMZlB8I", 
  authDomain: "booksanta-16989.firebaseapp.com", 
  databaseURL: "https://booksanta-16989.firebaseio.com", 
  projectId: "booksanta-16989", 
  storageBucket: "booksanta-16989.appspot.com",
  messagingSenderId: "10721774895", 
  appId: "1:10721774895:web:376725aae5485956b425da" 
};*/

var firebaseConfig = {
  apiKey: "AIzaSyD1SSsrC6u-LUZpon0v6noLriS0J6XQzmc",
  authDomain: "book-santa-bb19c.firebaseapp.com",
  databaseURL: "https://book-santa-bb19c.firebaseio.com",
  projectId: "book-santa-bb19c",
  storageBucket: "book-santa-bb19c.appspot.com",
  messagingSenderId: "469086894157",
  appId: "1:469086894157:web:d4d86f87bf5c80b13ec404"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
