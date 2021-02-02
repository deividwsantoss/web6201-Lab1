/* Custom JavaScript goes here */


"use strict";

(function(){

    function displayHome{
        let paragraphOneText = "Welcome to DeRa Development Website for WebD6201";
        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
    }


    function Start(){
        console.log("App Start...");

        displayHome();

    }
    window.addEventListener("load",Start);

})();