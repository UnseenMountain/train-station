# train-station

Is this application you will input a train name, a destination, and train time press the input button and you train name destination time it comes and time it takes to get to your destination will be displayed.

Firebase is the main focal point of this application it is storing each and every input you make into the table. 

Technologies used:

Javascript

firebase

HTML 

CSS

## fire base required infomation
var firebaseConfig = {
  apiKey: "AIzaSyCtKZ0nmLMZtdOLHS_M4tLRJcPQFVZ1DeM",
  authDomain: "train-station-ac729.firebaseapp.com",
  databaseURL: "https://train-station-ac729.firebaseio.com",
  projectId: "train-station-ac729",
  storageBucket: "train-station-ac729.appspot.com",
  messagingSenderId: "580715683846",
  appId: "1:580715683846:web:a487f888cd32fdbd30a387",
  measurementId: "G-VJ0XENCEQD",
  
};

## takes in the user input
var empName = $("#train-name-input").val().trim();
  var empDestination = $("#destination-input").val().trim();
  var empStart = $("#start-input").val().trim();
  var empMin = $("#min-input").val().trim();

## stores everything inside a varable
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());
  var empName = childSnapshot.val().name;
  var empDestination = childSnapshot.val().destination;
  var empStart = childSnapshot.val().start;
  var empMin = childSnapshot.val().min;

## Appends user input and adds it to a new row
 var newRow = $("<tr>").append(
    $("<td>").text(empName),
    $("<td>").text(empDestination),
    $("<td>").text(empStart),
    $("<td>").text(empMin)
  );