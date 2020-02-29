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
    console.log("logged in");
    window.location.href = "dashboard.html"
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
      .signInWithPopup(provider)
      console.log("logged in")
  }

  document.getElementById("testypoopy").addEventListener('click', () => {
    submit()
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
  } 
  else {
      confirm_password.setCustomValidity("You're good!");
  }
  }

  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;


  // Tutor Search Functions
  
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  function elidisplay() {
  
    console.log("bruh")
  
  
    const name = "Name: Eli Preston"
    const strengths ="Areas of Strength: World History, Drama, Astrophysics"
    const average = "Average: 99"
    const email = "Email: eli.preston@ucc.on.ca"
    const rating ="Tutor Rating: 9.3"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
  
  }
  
  function frandisplay() {
  
    const name = "Name: Francesco Rende"
    const strengths ="Areas of Strength: Music, French, Writing"
    const average = "Average: 96"
    const email = "Email: francesco.rende@ucc.on.ca"
    const rating ="Tutor Rating: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }
  
  function ibdisplay() {
  
    const name = "Name: Ibhrahim Fadel"
    const strengths ="Areas of Strength: Coding, French, Physics"
    const average = "Average: 99"
    const email = "Email: ibrahim.fadel@ucc.on.ca"
    const rating ="Tutor Rating: 9.9"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }
  
  function jleedisplay() {
  
    const name = "Name: Justin Lee"
    const strengths ="Areas of Strength: History, English, Math"
    const average = "Average: 99"
    const email = "Email: justin.lee22@ucc.on.ca"
    const rating ="Tutor Rating: 9.8"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }
  
  function kalendisplay() {
  
    const name = "Name: Kalen Janmohamed"
    const strengths ="Areas of Strength: Latin"
    const average = "88"
    const email = "Email: kalen.janmohamed@ucc.on.ca"
    const rating ="Tutor Rating: 7.3"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }
  
  function lukasdisplay() {
  
    const name = "Name: Lukas Timusk"
    const strengths ="Areas of Strength: French, Chemistry"
    const average = "Average: 92"
    const email = "Email: lukas.timusk@ucc.on.ca"
    const rating ="Tutor Rating:8.9"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }
  
  function stefdisplay() {
  
    const name = "Name: Stefan Ateljevic"
    const strengths ="Areas of Strength: French, Biology, English"
    const average = "Average: 89"
    const email = "Email: stefan.ateljevic@ucc.on.ca"
    const rating ="Tutor Rating: 8.6"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }
  
  function vaanandisplay() {
  
    const name = "Name: Vaanan Murugathas"
    const strengths ="Areas of Strength: Chemistry, Mandarin, Film"
    const average = "Average: 96"
    const email = "Email: vaanan.murugathas@ucc.on.ca"
    const rating ="Tutor Rating: 8.4"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
  
    
  }