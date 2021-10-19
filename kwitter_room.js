
const firebaseConfig = {
      apiKey: "AIzaSyBFHUXF296XR51fdHbqdBgdvFkrh5H7wPQ",
      authDomain: "kwitter-a4949.firebaseapp.com",
      databaseURL: "https://kwitter-a4949-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4949",
      storageBucket: "kwitter-a4949.appspot.com",
      messagingSenderId: "385357146501",
      appId: "1:385357146501:web:cf295c3ccab44ff8513cec"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
