/* Custom JavaScript goes here */


"use strict";

(function(){



    function Start(){
        console.log("App Start...");

        let paragraphOneText = "Welcome to DeRa Development Website for WebD6201";
        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;

    }
    window.addEventListener("load",Start);

})();