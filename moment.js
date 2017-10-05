  var config = {
    apiKey: "AIzaSyATM10OO1zzBbk0TU9v-JCWbL_956_vWMg",
    authDomain: "my-awesome-project-b91a1.firebaseapp.com",
    databaseURL: "https://my-awesome-project-b91a1.firebaseio.com",
    projectId: "my-awesome-project-b91a1",
    storageBucket: "my-awesome-project-b91a1.appspot.com",
    messagingSenderId: "466471583524"
  };
  firebase.initializeApp(config);
  

  //store database in new variable 

   var database = firebase.database();


  //add button for adding new train
  $("#add-train-btn").on("click", function(event) {
     event.preventDefault();
     console.log("#add-train-btn");
     


     //user input is stored in new variable 

     var trainName = $("#train-name-input").val().trim();
     console.log(trainName);
  

     var trainDes =  $("#destination").val().trim();

     var trainTime = $("#first-train-time").val().trim();

     var trainFrequency = $("#frequency").val().trim();

    //create tempoary object

    var newTrain = {

    name: trainName,

    destination: trainDes,

    time: trainTime,

    frequency: trainFrequency,

  };

  console.log(newTrain);

   database.ref().push(newTrain);

   console.log(newTrain.name);
   console.log(newTrain.destination);
   console.log(newTrain.time);
   console.log(newTrain.frequency);

   alert("Train Succesfully Added");


      $("#train-name-input").text("");

     $("#destination").text("");

     $("#first-train-time").text("");

     $("#frequency").text("");


     return false;
 });

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDes = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

   console.log(trainName);
   console.log(trainDes);
   console.log(trainTime);
   console.log(trainFrequency);

   //get current train time amd frequency. use moments to convert to proper librbary

   var current = moment();
   varc currentTrainTime = moment.unix(trainTime).format("MM/DD/YY");
  
  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDes+ "</td><td>" +
  trainTime + "</td><td>" + trainFrequency);
});









