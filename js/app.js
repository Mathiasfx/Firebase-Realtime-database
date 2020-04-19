//FUNCION PARA INGRESAR CON MAIL
function Ingresar(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
}

//FUNCION DE SESSION ACTIVA
function observador(){    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          Dashboard();
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
          // ...
        }
      });
      
}

observador();

function Dashboard(){
    window.location="Dashboard.html";
}