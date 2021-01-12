
let submitButton = document.querySelector("#submitButton");
let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
let email = document.querySelector("#email");
let message = document.querySelector("#message");





class ContactForm {

    constructor(firstName, lastName, email, message){  // Constructor
        this.fName = firstName;
        this.lName = lastName;
        this.uEmail = email;
        this.uMessage = message;
      }

    }

     function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    submitButton.onclick = function(){
        let data = 
        '\r First Name: ' + firstName.value + ' \r\n ' + 
        'Last Name: ' +lastName.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Message: ' + message.value + ' \r\n ';

        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'Responses.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
        console.log(data);
    }
        
    


