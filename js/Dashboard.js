//INICIALIZA CONEXION CON FIREBASE
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDAlb7iJwZvaSFM1PBf9ufC6s0dMrDvFac",
    authDomain: "memoria2020-8cb45.firebaseapp.com",
    databaseURL: "https://memoria2020-8cb45.firebaseio.com",
    projectId: "memoria2020-8cb45",
    storageBucket: "memoria2020-8cb45.appspot.com",
    messagingSenderId: "71649652857",
    appId: "1:71649652857:web:ee1bf7234c4936de19a4a8",
    measurementId: "G-G1D0R5RZ9G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
//LEER DB    
var tdata = document.getElementById('tdata');   

function innerHTML(id,result){
  return document.getElementById(id).innerHTML+=result;
}


function table(name,extra,score){

  return '<tr>'+
  '<td>'+name+'</td>'+
  '<td>'+extra+'</td>'+
  '<td>'+score+'</td>'+
  '</tr>';

}

function verDatos(){
  var db=firebase.database().ref('Leaderboard/');
  db.on("child_added",function(data){
    var dbValue = data.val();
    var result = table(dbValue.name,dbValue.extra,dbValue.score);
    innerHTML("tdata",result);
  })
}



// db.on('value', function(snapshot){    
//       snapshot.forEach(function(childSnapshot){
//       console.log(childSnapshot.Key)
//       console.log(childSnapshot.val())
//     })
// })

//FUNCION DE SESSION ACTIVA
function observador(){    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.        
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...
          console.log('LLego Alguien');

        } else {
          // User is signed out.
          console.log('No hay nadie');
          window.location="index.html";
          // ...
        }
      });
      
}
observador();




//CERRAR SESSION 
function CerrarSession(){
    firebase.auth().signOut();
}

 
