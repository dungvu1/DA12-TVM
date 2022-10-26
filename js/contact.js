// function isNumber() { return /^-?[\d.]+(?:e-?\d+)?$/.test();
function send() {
    var name = document.getElementById("name");
    var email= document.getElementById("email");
    var message = document.getElementById("message");
    var subject = document.getElementById("subject");
    debugger
    if (!name.value) {
        alert("Bạn cần điền username");
        name.focus();
    }
     if(!email.value) {
        alert("Bạn cần điền email");
        email.focus();
    }
    if (!subject.value) {
        alert("Bạn cần điền subject");
        subject.focus();
    }
     if (!message.value) {
        alert("Bạn cần điền message");
        message.focus();
    }

   console.log(name.value) ;  
   console.log(email.value) ;  
   console.log(subject.value) ;
   console.log(message.value) ;  
  
}