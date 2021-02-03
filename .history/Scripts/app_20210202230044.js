/* Custom JavaScript goes here */


"use strict";

(function(){

    function displayHome(){
        let paragraphOneText = "Welcome to DeRa Development Website for WebD6201";
        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
    }
    function displayAbout(){

    }
    function displayProducts(){

    }
    function displayServices(){

    }
    function displayContact(){

        let messageArea = document.getElementById("messageArea");
        messageArea.hidden = true;

        //Form Validation...

        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function(){
            if(fullName.value.length < 2){
                fullName.focus;
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please, Enter an appropriate name."
            }
            else{
                messageArea.removeAttribute("Class");
                messageArea.hidden = true;
            }
        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            event.preventDefault();
        });
        //validating email
        let emailAddress = document.getElementById("emailAddress");
        let pattern = /^[^]+@[^]+\.[A-Z]{2,3}$/;

        if(emailAddress.matches(pattern)){

            messageArea.removeAttribute("Class");
            messageArea.hidden = true;
        }
        else{
            emailAddress.focus;
            emailAddress.select();
            messageArea.hidden = false;
            messageArea.className = "alert alert-danger";
            messageArea.textContent = "Please, Insert a valid email"

        }




    }


    function Start(){
        console.log("App Start...");

        switch (document.title) {

            case 'Home':
                displayHome();
                break;
            case 'About':
                displayAbout();
                break;
            case 'Products':
                displayProducts();
                break;
            case 'Services':
                displayServices();
                break;
            case 'Contact':
                displayContact();
                break;

        }
        displayHome();

    }
    window.addEventListener("load",Start);

})();