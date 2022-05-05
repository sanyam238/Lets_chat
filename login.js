function add_user(){
    user_name = document.getElementById("input_username").value;
    localStorage.setItem("user_name",user_name);
    window.location = "lets_chat_room.html";
}