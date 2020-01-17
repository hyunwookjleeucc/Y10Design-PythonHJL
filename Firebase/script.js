(function() {
    var config = {
        apiKey: "AIzaSyBOxwNCB9sDtOztxEUpgZCOiWYYK9PNzrY",
        authDomain: "ucc2019-02.firebaseapp.com",
        databaseURL: "https://ucc2019-02.firebaseio.com",
        projectId: "ucc2019-02",
        storageBucket: "ucc2019-02.appspot.com",
        messagingSenderId: "830766808371",
        appId: "1:830766808371:web:dba771fae5e2cdf445d246",
        measurementId: "G-S2JG61Y858"
    };
    firebase.initializeApp(config);
  })();
  
  const signup = () => {
    let newUser = undefined;
    let ableToCreateUser = true;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordr = document.getElementById("passwordr").value;
    
    console.log(email, password, passwordr);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        alert(`Uh oh! Poopee! | ${err.code}: ${err.message}`);
        ableToCreateUser = false;
      })
      .then(user => {
        if (ableToCreateUser) {
          console.log("HI");
          newUser = {
            email,
            password,
            passwordr,
          };
        }
      })
      .then(() => {
        if (ableToCreateUser) {
          console.log("hello");
          firebase
            .database()
            .ref("/users")
            .push(newUser);
        }
      });
    //   const firstName = document.getElementById("firstName").value;
    //   const lastName = document.getElementById("lastName").value;
    //   const email = document.getElementById("email").value;
    //   const password = document.getElementById("password").value;
  
    //   const user = {
    //     firstName,
    //     lastName,
    //     email,
    //     password
    //   };
  
    //   firebase
    //     .database()
    //     .ref("/users")
    //     .push(user)
    //     .then(() => {
    //       alert("Signed up!");
    //     })
    //     .catch(err => {
    //       alert(err.code, err.message);
    //     });
  };


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  


  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      userId = user.uid;
    } else {
      return;
    }
  });

  /////////////////// FUNCTIONS //////////////////

  function signin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider);
  }
