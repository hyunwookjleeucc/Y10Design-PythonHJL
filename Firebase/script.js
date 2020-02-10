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
  };


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
function signinwemail() {
  const email = document.getElementById("emailid").value;
  const password = document.getElementById("passwordid").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      alert(`${err.code} ${err.message}`);
    });
    console.log("logged in")
}

  
  function logout(){
    firebase.auth().signOut();
  }
  


//  displaying the user email based on the logged in user
let email;
console.log(firebase.auth());
  firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      userId = user.uid;
        email = user.email;
        getUserData();
    document.getElementById("hyunwookiskorean").innerHTML = `Email: ${email}`;
    } else {
        console.log("not logged in");
      return;
    }
  });

// displaying the gathered user data in dashboard
const getUserData = async () => {
  firebase.database().ref("/userinfo").once("value").then(_users => {
    _users.forEach(_user => {
      const user = _user.val();
      const data = {
        languages: user.languages,
        interests: user.interests,
        socialmedia: user.socialmedia,
        firstname: user.firstname,
        lastname: user.lastname
      }

      document.getElementById("hyunwookiskorean2").innerHTML = `${data.languages}`;
      document.getElementById("hyunwookiskorean3").innerHTML = `${data.interests}`;
      document.getElementById("hyunwookiskorean4").innerHTML = `${data.socialmedia}`;
      document.getElementById("hyunwookiskorean5").innerHTML = `Name: ${data.firstname} ${data.lastname}`;

    });
  })
}

// sign in with Google function
  function signin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider);
  }

  document.getElementById("testypoopy").addEventListener('click', () => {
    submit();
  });

  function resetinfo() {
    window.location.href = "personalquestions.html"
  }

  // creating a new node for personal information for the tutees.
  function submit() {
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var socialmedia = document.getElementById("socialmedia").value;
    var slanguages = document.getElementById("language").value;
    var sinterests = document.getElementById("interest").value;
    
    // Create a JSON object to add to the database with user-inputted data
    var data = {
        firstname: firstname,
        lastname: lastname,
        socialmedia: socialmedia,
        languages: slanguages,
        interests: sinterests
    }

    firebase.database().ref("/userinfo").push(data).then(() => {
      window.location.href="dashboard.html"
    });
  }

  // Checking the password to see if the two passwords match
  function validatePassword() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("passwordr");
  if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
  } else {

      confirm_password.setCustomValidity("You're good!");
  }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;


  const tutordisplay = async () => {
    firebase.database().ref("/tutorinfo").once("value").then(_users => {
      _users.forEach(_user => {
        const user = _user.val();
        const data = {
          areas: user.languages,
          average: user.interests,
          rating: user.socialmedia,
          firstname: user.firstname,
          lastname: user.lastname
        }
  
        document.getElementById("hyunwookiskorean2").innerHTML = `${data.languages}`;
        document.getElementById("hyunwookiskorean3").innerHTML = `${data.interests}`;
        document.getElementById("hyunwookiskorean4").innerHTML = `${data.socialmedia}`;
        document.getElementById("hyunwookiskorean5").innerHTML = `Name: ${data.firstname} ${data.lastname}`;
  
      });
    })
  }