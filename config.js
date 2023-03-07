import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBjQyUIl93XVadd61SPYCsPJqpZTmBep0k",
        authDomain: "aula-batata.firebaseapp.com",
        databaseURL: "https://aula-batata-default-rtdb.firebaseio.com",
        projectId: "aula-batata",
        storageBucket: "aula-batata.appspot.com",
        messagingSenderId: "892367432617",
        appId: "1:892367432617:web:1d5cc9693cf98a172ff2b8"
      };
    
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();