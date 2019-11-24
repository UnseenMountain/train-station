var firebaseConfig = {
  apiKey: "AIzaSyCtKZ0nmLMZtdOLHS_M4tLRJcPQFVZ1DeM",
  authDomain: "train-station-ac729.firebaseapp.com",
  databaseURL: "https://train-station-ac729.firebaseio.com",
  projectId: "train-station-ac729",
  storageBucket: "train-station-ac729.appspot.com",
  messagingSenderId: "580715683846",
  appId: "1:580715683846:web:a487f888cd32fdbd30a387",
  measurementId: "G-VJ0XENCEQD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  var empName = $("#train-name-input").val().trim();
  var empDestination = $("#destination-input").val().trim();
  var empStart = $("#start-input").val().trim();
  var empMin = $("#min-input").val().trim();


  var newEmp = {
    name: empName,
    destination: empDestination,
    start: empStart,
    min: empMin
  };

  database.ref().push(newEmp);

  console.log(newEmp.name);
  console.log(newEmp.destination);
  console.log(newEmp.start);
  console.log(newEmp.min);

  alert("A new train is entering the station")

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#start-input").val("");
  $("#min-input").val("");
})

database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());
  var empName = childSnapshot.val().name;
  var empDestination = childSnapshot.val().destination;
  var empStart = childSnapshot.val().start;
  var empMin = childSnapshot.val().min;

  console.log(empName);
  console.log(empDestination);
  console.log(empStart);
  console.log(empMin);

  // var empStartThis = moment.unix(empStart).format("00:00.00")
  

  var newRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empDestination),
    // $("<td>").text(empStartThis),
    $("<td>").text(empStart),
    $("<td>").text(empMin)
  );
  
  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
  
})
