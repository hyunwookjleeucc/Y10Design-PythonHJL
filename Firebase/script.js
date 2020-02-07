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

 /////////////////// FUNCTIONS //////////////////

let email;
// let language;
// let socialmedia;
// let interests;
console.log(firebase.auth());
  firebase.auth().onAuthStateChanged(async function(user) {
    if (user) {
      userId = user.uid;
        email = user.email;
        getUserData();
        // console.log(userData);
    document.getElementById("hyunwookiskorean").innerHTML = `Email: ${email}`;
    // document.getElementById("hyunwookiskorean2").innerHTML = `Languages: ${userData.languages}`;
    // document.getElementById("hyunwookiskorean3").innerHTML = `Subjects & Interests: ${userData.interests}`;
    // document.getElementById("hyunwookiskorean4").innerHTML = `Social Media: ${userData.socialmedia}`;
    //                                                         // "Email: " + email;
    } else {
        console.log("not logged in");
      return;
    }
  });

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

      document.getElementById("hyunwookiskorean2").innerHTML = `Languages: ${data.languages}`;
      document.getElementById("hyunwookiskorean3").innerHTML = `Subjects & Interests: ${data.interests}`;
      document.getElementById("hyunwookiskorean4").innerHTML = `Social Media: ${data.socialmedia}`;
      document.getElementById("hyunwookiskorean5").innerHTML = `Name: ${data.firstname} ${data.lastname}`;

    });
  })
}


  function signin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider);
  }

  document.getElementById("testypoopy").addEventListener('click', () => {
    submit();
  });

  function submit() {
    // Create a database object that we can refer to
    // var database = firebase.database();

    // Create a reference to a particular location or "node" called StudentInfo
    // var ref = database.ref('userinfo');

    // Grab the Name, Subject, and Grade obtained from the HTML frontend textboxes
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

    // "PUSH" means we add something to the database

    firebase.database().ref("/userinfo").push(data).then(() => {
      window.location.href="dashboard.html"
    });
  }

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


  function getData() {

    // Create a database object that we can refer to
    var database = firebase.database();

    // Create a reference to a particular location or "node"
    // 'StudentInfo'is the name of the main branch in the database
    var ref = database.ref('tutorinfo');

    // we will make reference to each 'value' of a database object which will have 
    // two helper functions latched "on" to it to perform additional tasks 
    // - either we have access to data values, or we don't and there is an error

    ref.on('value', gotData, errData) 
    // jump to the helper function...think of 'value' as the parameter that is passed

} // end getdata

function displayinfo() {

  console.log(hi)
  var data ={
    areas = firebase.database().ref("/tutorinfo/Eli Preston")
  }
  // document.getElementById("tutor1").innerHTML = `Languages: ${data.languages}`;
  // document.getElementById("tutor2").innerHTML = "";
  // document.getElementById("tutor3").innerHTML = "";
  // document.getElementById("tutor4").innerHTML = "";

    
  }