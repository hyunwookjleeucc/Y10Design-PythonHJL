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
        alert(`error | ${err.code}: ${err.message}`);
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
            window.location.href = "personalquestions.html"
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

//   PASSWORD CHECKING FUNCTION

let email;
console.log(firebase.auth());
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      userId = user.uid;
        email = user.email;
        console.log(user.email);
    document.getElementById("hyunwookiskorean").innerHTML = `Email: ${email}`;
                                                            // "Email: " + email;
    } else {
        console.log("not logged in");
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

  function submit() {
      console.log("calling the submit fn")
    // Create a database object that we can refer to
    var database = firebase.database();

    // Create a reference to a particular location or "node" called StudentInfo
    var ref = database.ref('userinfo');

    // Grab the Name, Subject, and Grade obtained from the HTML frontend textboxes
    var socialmedia = document.getElementById("socialmedia").value;
    var slanguages = document.getElementById("language").value;
    var sinterests = document.getElementById("interest").value;
    
    // Create a JSON object to add to the database with user-inputted data
    var data = {
        socialmedia: socialmedia,
        languages: slanguages,
        interests: sinterests
    }
    // "PUSH" means we add something to the database

    ref.push(data).then(() => {
      console.log("YEEEET")
      window.location.href="dashboard.html"
    });
  }


    var password = document.getElementById("password"),
    confirm_password = document.getElementById("passwordr");

    function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {

        confirm_password.setCustomValidity("You're good!");
    }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
