const firebaseConfig = {
    apiKey: "AIzaSyCPgQts673r8NYH39vjH_mlF0yFurHbyHA",
    authDomain: "lets-chat-c796f.firebaseapp.com",
    databaseURL: "https://lets-chat-c796f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c796f",
    storageBucket: "lets-chat-c796f.appspot.com",
    messagingSenderId: "1087743355680",
    appId: "1:1087743355680:web:d0e49f973d330fad8a8545"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
username : user_name,
message : msg,
likes : 0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();