var firebaseConfig = {
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

 user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name+"!";

function add_room()
{
room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
      purpose : "to add the room name"
});
localStorage.setItem("room_name",room_name);
window.location = "lets_chat_message.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " +Room_names);

row = "<div class='room_name' id"+Room_names+"+ onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div><hr>" ;
document.getElementById("output").innerHTML += row;

//End code
});});}
getData();

function redirect_to_room_name(Room_names) {
      console.log(Room_names);
      localStorage.setItem("Room_names",Room_names);
      window.location = "lets_chat_message.html";
      }

      function logout(){
            localStorage.removeItem("room_name");
            localStorage.removeItem("user_name");
            window.location = "index.html";
        }