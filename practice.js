const firebaseConfig = {
    apiKey: "AIzaSyDIDE85SxuTbij1YjcMaB2rgALQYavL0Mg",
    authDomain: "kwitter-8635a.firebaseapp.com",
    databaseURL: "https://kwitter-8635a-default-rtdb.firebaseio.com",
    projectId: "kwitter-8635a",
    storageBucket: "kwitter-8635a.appspot.com",
    messagingSenderId: "628313390626",
    appId: "1:628313390626:web:bc77e71441669451d7d47b"
  };
  
  //Initialize Firebase//
  firebase.initializeApp(firebaseConfig);
   
  function adduser()
  {
    user_name=document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
});
}