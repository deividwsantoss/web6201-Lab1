/* Custom JavaScript goes here */


"use strict";

(function(){

    function addHR(){
        let aboutUsElement = document.getElementById("aboutId");
        let newNavbar = document.createElement("li");
        let hr = `<a class="nav-link" aria-current="page" href="services.html"><i class="fas fa-user-circle"></i> Human Resources</a>`

        hr.innerHTML.before(aboutUsElement);

    }
    function Projects(){
        let productsElement = document.getElementById("prod");
        let prod = `<a id="prod" class="nav-link" aria-current="page" href="products.html"><i class="fas fa-globe" name="prod"></i> Projects</a>`;
        

        productsElement.innerHTML = prod;

        let prodNameElement = document.getElementById("prodName");
        let projectName = `<h1 id="prodName" class="text-center">Our Projects</h1>`

        prodNameElement.innerHTML = projectName;  
    }
    function displayHome(){
        let paragraphOneText = "Welcome to DeRa Development Website for WebD6201";
        let paragraphOneElement = document.getElementById("paragraphOne");
        
        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-6 ";
    }
    function displayAbout(){

    }
    function displayProducts(){

    }
    function displayServices(){

        //intro text 
        let servicesIntroText = "DeRa Development can provide you the best customized solution for you";
        let servicesIntroElement = document.getElementById("serviceIntro");
        servicesIntroElement.textContent = servicesIntroText;

        // custom dev text
        let customParagraphText = "DeRa Development have been delivering successful custom programs to our clients since the date we were born. \nSince DeRa was born we have seen a rapid change in website technology which we were always able to adapt";
        let customParagraphElement = document.getElementById("customParagraph");
        
        customParagraphElement.textContent = customParagraphText;

        //mobile text
        mobileParagraphText = "We have the knowledge and skills to provide you the best quality solution for any kind of device. \nMobile development is one of our strengths."
        mobileParagraphElement = document.getElementById("mobileParagraph");

        mobileParagraphElement.textContent = mobileParagraphText;

        //design paragraph 
        let webDesignParagraphText = "Our Web Design is awesome";
        let webDesignParagraphElement = document.getElementById("weDesignParagraph");
        webDesignParagraphElement.textContent = webDesignParagraphText;
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

        //validating number
        let contactNumber = document.getElementById("contactNumber");
        contactNumber.addEventListener("blur", function(){

            if(contactNumber.value.length < 10 || contactNumber.value.length > 10 )
            {
                contactNumber.focus;
                contactNumber.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please, Insert a valid Number";
            }
            else {
                messageArea.removeAttribute("Class");
                messageArea.hidden = true;
            }

        });

        // Validating short text
        let shortMessage = document.getElementById("shortMessage");
        shortMessage.addEventListener("blur", function(){

            if(shortMessage.value.length > 50){
                shortMessage.focus;
                shortMessage.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Maximum characters allowed (50)";
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
        document.getElementById("sendButton").onclick = function (){
            location.href = "index.html"
        };

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
        

    }
    window.addEventListener("load",Projects);
    window.addEventListener("load",Start);

})();