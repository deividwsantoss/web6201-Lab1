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