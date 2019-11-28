var config = {

    ///// COPY AND PASTE YOUR FIREBASE CONFIGURATION DATA HERE /////

    apiKey: "AIzaSyBOxwNCB9sDtOztxEUpgZCOiWYYK9PNzrY",
    authDomain: "ucc2019-02.firebaseapp.com",
    databaseURL: "https://ucc2019-02.firebaseio.com",
    projectId: "ucc2019-02",
    storageBucket: "ucc2019-02.appspot.com",
    messagingSenderId: "830766808371",
    appId: "1:830766808371:web:dba771fae5e2cdf445d246",
    measurementId: "G-S2JG61Y858"
    
    ///// COPY AND PASTE YOUR FIREBASE CONFIGURATION DATA HERE /////
    };
  firebase.initializeApp(config);
         
  // Check to see if you are logged in
  firebase.auth().onAuthStateChanged(function(user) {
      if (user == null) {
          document.getElementById("uid").innerHTML = "not logged in";
          return;
      } else {
          userId = user.uid; // you can also get .displayName, .photoURL, .email
          document.getElementById("uid").innerHTML = userId; // display Google uid on page
          
      } // end user null check
  }); // end check auth state
  
 // HERE IS THE FUNCTION TO SHOW HOW TO GET USER DATA
  function getData() {
    var userId = document.getElementById("uid").innerHTML;
    firebase.database().ref('/' + userId).once('value', function(snapshot) {
      document.getElementById("myData").innerHTML = snapshot.val().teacher;
      console.log(snapshot.val().teacher);
      console.log(snapshot.val().email);
    });

  }
 
 // HERE IS THE FUNCTION TO SHOW HOW TO SET/OVERWRITE USER DATA
  function setData() {
    
    var x = document.getElementById("newName").value;
    var x_email = x + "@gmail.com"

    document.getElementById("myName").innerHTML = x;
    firebase.database().ref('/' + userId).set({

      teacher: x,
      email: x_email

    }); 
  }
  
  function signin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).then(function(result) { 
          window.location.replace("fbtest.html");
      });
  }