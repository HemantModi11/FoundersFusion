import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnYDkPlJs-xRvXVisDD0kdijFheDbIqqY",
    authDomain: "founderfusion-3d93d.firebaseapp.com",
    databaseURL: "https://founderfusion-3d93d-default-rtdb.firebaseio.com",
    projectId: "founderfusion-3d93d",
    storageBucket: "founderfusion-3d93d.appspot.com",
    messagingSenderId: "354791703971",
    appId: "1:354791703971:web:8322c648a0c4bf7d728616",
    measurementId: "G-KK525RQHN0"
};

const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'it';

console.log(app)

signUp.addEventListener('click',(e) =>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;

          set(ref(database, 'users/' + user.uid), {
            username: username,
            email: email
          })

          alert('Account Created!! You can now Login.')
          
          window.location.href = '../Homepage/homepage.html';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)

        });
});

login.addEventListener('click',(e) =>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;

          const dt = new Date(); 

          update(ref(database, 'users/' + user.uid), {
            last_login: dt
          })

          alert('Login Success')

          window.location.href = '../Homepage/homepage.html';

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)

        });
})

const googleLogin = document.getElementById('google')
googleLogin.addEventListener('click', (e) =>{
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            window.location.href = '../Homepage/homepage.html';
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
})

const user = auth.currentUser;
onAuthStateChanged(auth, (user) =>{
    if(user){
        const uid = user.uid;
    }
})