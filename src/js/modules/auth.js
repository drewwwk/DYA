var firebaseConfig = {
  apiKey: "AIzaSyCfN2a2aSKepaNJwYSOrK57C5NwRGjEtgs",
  authDomain: "dyakiv-r-r.firebaseapp.com",
  databaseURL: "https://dyakiv-r-r.firebaseio.com",
  projectId: "dyakiv-r-r",
  storageBucket: "dyakiv-r-r.appspot.com",
  messagingSenderId: "310204987443",
  appId: "1:310204987443:web:60540b98d3f66dcca54b46",
  measurementId: "G-XBLTY1N73Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const loginButton = document.getElementById('button');

loginButton.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword(document.getElementById('email').value, document.getElementById('password').value)
  .then(function(result) {
    window.location.href = "profile.html";
  }).catch(function(error) {
    document.getElementById('error_handler').innerText = error.message
});
});
