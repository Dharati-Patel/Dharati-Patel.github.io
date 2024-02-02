const firebaseConfig = {
    apiKey: "AIzaSyD-9240g8YgRYzFIBnhT21dNubG7n6YCIc",
    authDomain: "kena-8eb60.firebaseapp.com",
    databaseURL: "https://kena-8eb60-default-rtdb.firebaseio.com",
    projectId: "kena-8eb60",
    storageBucket: "kena-8eb60.appspot.com",
    messagingSenderId: "742722752217",
    appId: "1:742722752217:web:1b00a6636e792fa2a7b8c8"
  };


  //Initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your Database
  var contactFormDB = firebase.database().ref("KeNaContactForm");

  document.getElementById("conForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var msgContent = getElementVal("msgContent");

    if (name.trim() === "" || emailid.trim() === "" || phone.trim() === "" || msgContent.trim() === "") {
      // Display error message
      document.querySelector(".alert").style.backgroundColor = "rgb(255, 0, 0)";
      document.querySelector(".alert").innerText = "You cannot submit an empty form";
      document.querySelector(".alert").style.display = "block";
  
      // Remove the error message after 2 seconds
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);

      // Reset the form
      document.getElementById("conForm").reset();

    } else {
      // Save the data to Firebase
      saveMessages(name, emailid, phone, msgContent);

      // Enable success message
    document.querySelector(".alert").style.backgroundColor = "rgb(0, 255, 106)";
    document.querySelector(".alert").innerText = "Your message sent!";
    document.querySelector(".alert").style.display = "block";

    // Remove the success message after 2 seconds
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("conForm").reset();
  }
  }

  const saveMessages = (name, emailid, phone, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      msgContent: msgContent,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

