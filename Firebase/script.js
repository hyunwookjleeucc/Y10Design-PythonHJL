var provider = new firebase.auth.GoogleAuthProvider();
        var userId = document.getElementById("uid").innerHTML;
        
        // Your web app's Firebase configuration that we copy-and-paste from 
        // the Firebase setup
        var config = {

          ////////////// INSERT FIREBASE AUTHENTICATION CODE HERE //////////////
          apiKey: "AIzaSyBOxwNCB9sDtOztxEUpgZCOiWYYK9PNzrY",
            authDomain: "ucc2019-02.firebaseapp.com",
            databaseURL: "https://ucc2019-02.firebaseio.com",
            projectId: "ucc2019-02",
            storageBucket: "ucc2019-02.appspot.com",
            messagingSenderId: "830766808371",
            appId: "1:830766808371:web:dba771fae5e2cdf445d246",
            measurementId: "G-S2JG61Y858"
          ////////////// INSERT FIREBASE AUTHENTICATION CODE HERE //////////////

          };

        firebase.initializeApp(config);
        //firebase.analytics();

        // Authentication Check: to see if you are logged in
        firebase.auth().onAuthStateChanged(function(user) {
            if (user == null) {
                document.getElementById("uid").innerHTML = "not logged in";
                return;
            } else {
                userId = user.uid; // you can also get .displayName, .photoURL, .email
                document.getElementById("uid").innerHTML = userId; // display Google uid on page
                
            } // end user null check
        }); // end check auth state


        // Functions that will be used to "get" and "set" data, among other "helper"
        // functions too...

        function signin() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider).then(function(result) { 
                window.location.replace("fbtest.html");
            });
        } // end signin 


        function setData() {

            // Create a database object that we can refer to
            var database = firebase.database();

            // Create a reference to a particular location or "node" called StudentInfo
            var ref = database.ref('StudentInfo');

            // Grab the Name, Subject, and Grade obtained from the HTML frontend textboxes
            var sname = document.getElementById("student").value;
            var ssubject = document.getElementById("subject").value;
            var smark = document.getElementById("mark").value;
            
            // Create a JSON object to add to the database with user-inputted data
            var data = {
                name: sname,
                subject: ssubject,
                mark: smark
            }
            // "PUSH" means we add something to the database
            ref.push(data);
        } // end setdata

        function getData() {

            // Create a database object that we can refer to
            var database = firebase.database();

            // Create a reference to a particular location or "node"
            // 'StudentInfo'is the name of the main branch in the database
            var ref = database.ref('StudentInfo');

            // we will make reference to each 'value' of a database object which will have 
            // two helper functions latched "on" to it to perform additional tasks 
            // - either we have access to data values, or we don't and there is an error

            ref.on('value', gotData, errData) 
            // jump to the helper function...think of 'value' as the parameter that is passed

        } // end getdata

        function gotData(data){

            // clear items from previously created lists
            document.getElementById("studentList").innerHTML = "";
            document.getElementById("subjectList").innerHTML = "";
            document.getElementById("markList").innerHTML = "";
            
            // collect all of the unique objects ('keys' or id's) out of the database
            var studentData = data.val(); // access the data 'value' of each student 'object' 
            var keys = Object.keys(studentData);
            console.log(keys);

            // iterate through the unique object id's and grab data fields: 'name', 'subject', 'mark'
            for (var i = 0; i < keys.length; i++){
              var k = keys[i];
              var name = studentData[k].name;
              var subject = studentData[k].subject;
              var mark = studentData[k].mark;

              // DISPLAY STUDENT NAMES
              // Create a reference to the ordered list called 'studentList'
              // called 'oListStudent'
              var oListStudent = document.getElementById('studentList');
              var entry = document.createElement('li'); // a list element to be added to the ordered list
              entry.appendChild(document.createTextNode(name));
              oListStudent.appendChild(entry);

              // DISPLAY STUDENT SUBJECTS
              // Create a reference to the ordered list called 'studentList'
              // called 'oListStudent'
              var oListSubject = document.getElementById('subjectList');
              var entry = document.createElement('li'); // a list element to be added to the ordered list
              entry.appendChild(document.createTextNode(subject));
              oListSubject.appendChild(entry);

              // DISPLAY STUDENT MARKS
              // Create a reference to the ordered list called 'markList'
              // called 'oListMark'
              var oListMark = document.getElementById('markList');
              var entry = document.createElement('li'); // a list element to be added to the ordered list
              entry.appendChild(document.createTextNode(mark));
              oListMark.appendChild(entry);
              
              // AJ: we only need to send information to the console window when we
              // are debugging our code of errors
              // console.log (keys[i]);
              // console.log (subject);

            }
        }

        function errData(err){
            console.log('Error!')
            console.log(err)
        }