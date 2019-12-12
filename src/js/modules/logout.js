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

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    firebase.auth().signOut().then(function() {
    window.location.href = "index.html";
        
      }).catch(function(error) {
        console.log(error)
      });
});
