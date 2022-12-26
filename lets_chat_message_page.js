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
name : user_name,
message : msg,
likes : 0
});
document.getElementById("msg").value = "";
}

function getData(){ 
  firebase.database().ref("/"+room_name).on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) 
  { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
 Name = message_data['name'];
message = message_data['message'];
likes = message_data['likes'];
name_with_tag = "<h4>"+Name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes:"+ likes+"</span> </button> <hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;

function updateLike(message_id){
console.log("clicked on the like button- "+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like: updated_likes
});
}
//End code
} });  }); }
getData();
