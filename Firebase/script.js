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


// Getting the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, closes it
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
        emailid = document.getElementById("emailid").value;
        getUserData();
    document.getElementById("hyunwookiskorean").innerHTML = `Email: ${email}`; // innerHTML gets input from another field and displays it
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
      const data = { //setting the data
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

  password.onchange = validatePassword; // this means that when the password is changed the website automatically checks the password.
  confirm_password.onkeyup = validatePassword;


  // Tutor Search Functions and search bar with filters
  
  function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query; i.e: if 'Vaa' is entered,
    // the search bar would automatically remove the names that do not contain all the letters in the word 'Vaa.'
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
  
  // displaying tutor information functions
  function elidisplay() {
  
  
  
    const name = "Name: Eli Preston"
    const strengths ="Areas of Strength: World History, Drama, Astrophysics"
    const average = "Average: 99"
    const email = "Email: eli.preston@ucc.on.ca"
    const rating ="Tutor Rating: 9.3"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
  
  }
  
  function frandisplay() {
  
    const name = "Name: Francesco Rende"
    const strengths ="Areas of Strength: Music, French, Writing"
    const average = "Average: 96"
    const email = "Email: francesco.rende@ucc.on.ca"
    const rating ="Tutor Rating: 10"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }
  
  function ibdisplay() {
  
    const name = "Name: Ibhrahim Fadel"
    const strengths ="Areas of Strength: Coding, French, Physics"
    const average = "Average: 99"
    const email = "Email: ibrahim.fadel@ucc.on.ca"
    const rating ="Tutor Rating: 9.9"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }
  
  function jleedisplay() {
  
    const name = "Name: Justin Lee"
    const strengths ="Areas of Strength: History, English, Math"
    const average = "Average: 99"
    const email = "Email: justin.lee22@ucc.on.ca"
    const rating ="Tutor Rating: 9.8"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }
  
  function kalendisplay() {
  
    const name = "Name: Kalen Janmohamed"
    const strengths ="Areas of Strength: Latin"
    const average = "Average: 88"
    const email = "Email: kalen.janmohamed@ucc.on.ca"
    const rating ="Tutor Rating: 7.3"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }
  
  function lukasdisplay() {
  
    const name = "Name: Lukas Timusk"
    const strengths ="Areas of Strength: French, Chemistry"
    const average = "Average: 92"
    const email = "Email: lukas.timusk@ucc.on.ca"
    const rating ="Tutor Rating:8.9"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }
  
  function stefdisplay() {
  
    const name = "Name: Stefan Ateljevic"
    const strengths ="Areas of Strength: French, Biology, English"
    const average = "Average: 89"
    const email = "Email: stefan.ateljevic@ucc.on.ca"
    const rating ="Tutor Rating: 8.6"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }
  
  function vaanandisplay() {
  
    const name = "Name: Vaanan Murugathas"
    const strengths ="Areas of Strength: Chemistry, Mandarin, Film"
    const average = "Average: 96"
    const email = "Email: vaanan.murugathas@ucc.on.ca"
    const rating ="Tutor Rating: 8.4"
    const tutoryear = "Year: 10"
  
    document.getElementById("tutorName").innerHTML = name;
    document.getElementById("tutorStrengths").innerHTML = strengths;
    document.getElementById("tutorAverage").innerHTML = average;
    document.getElementById("tutorEmail").innerHTML = email;
    document.getElementById("tutorRating").innerHTML = rating;
    document.getElementById("tutorYear").innerHTML = tutoryear;
  
    
  }