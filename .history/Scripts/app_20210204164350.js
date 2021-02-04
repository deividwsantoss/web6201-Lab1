/* app.js

Author: Deivid Santos   ID: 100731640
Author: S m hasibur Rahman  ID:100765652

Date Completed: 02.04.2021
*/


"use strict";

(function(){

    function addHr(){

        let navIn = document.getElementById("mainUl");

        let liCreate = document.createElement('li');

        liCreate.innerHTML = `<a id="prod" class="nav-link" aria-current="page" href="hr.html"><i class="fas fa-globe" name="prod"></i> Human Resources</a>`;

        navIn.insertBefore(liCreate, navIn.getElementsByTagName("li")[4]);

    }

    function addFooter(){    
        
     
        const body = document.body;
        let footerNav = document.createElement('footer'); 

        footerNav.innerHTML = `<nav class="navbar fixed-bottom navbar-light bg-light">
        <div class="container-fluid">
          <h4 ><i class="fas fa-copyright fa-sm"></i> Copyright 2021 </h4>
      </div>
        </nav>`
        
        body.appendChild(footerNav);
        
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

        let NameOneText = "Deivid Santos";
        let NameOneElemenet = document.getElementById("nameOne");

        NameOneElemenet.innerText = NameOneText;

        let NameTwoText = "Hasibur Rahman";
        let NameTwoElemenet = document.getElementById("nameTwo");

        NameTwoElemenet.innerText = NameTwoText;


    }
    function displayProducts(){

        //deloitte
        let dlText = "DeRa is proud for leading the main developing project for DL."
        let dlElement = document.getElementById("dlParagraph");

        dlElement.textContent = dlText;

        //Scotia
        let scotiaText = "Another Big company we are proud to have worked with"
        let scotiaElement = document.getElementById("scotiaParagraph");

        scotiaElement.textContent = scotiaText;
        // Canadian Tire

        let canadianParagraphText = "In 2020 we had the opportunity to work with one of the biggest companies in Canada! ";
        let canadianElement = document.getElementById("canadianParagraph");

        canadianElement.innerText = canadianParagraphText;

    }
    function displayHR(){
        let hrText = "Please, our Human Resources would be happy to get in touch with you by humanresources@dera.ca";
        let hrElement = document.getElementById("hrMessage");

        hrElement.innerText = hrText;
    }
    function displayServices(){

        //intro text 
        let servicesIntroText = "DeRa Development can provide you the best customized solution for you";
        let servicesIntroElement = document.getElementById("serviceIntro");
        servicesIntroElement.textContent = servicesIntroText;

        // custom dev text
        let customParagraphText = "DeRa Development have been delivering successful custom programs to our clients since the date we were born. \nSince DeRa was born we have seen a rapid change in website technology which we were always able to adapt";
        let customParagraphElement = document.getElementById("customParagraph");
        
        customParagraphElement.innerText = customParagraphText;

        //mobile text
           
        let mobileParagraphText = "We have the knowledge and skills to provide you the best quality solution for any kind of device. \nMobile development is one of our strengths.";     
        let mobileParagraphElement = document.getElementById("mobileInfo");

        mobileParagraphElement.innerText = mobileParagraphText;
        
        //design paragraph 
        let webDesignParagraphText = "Our high quality design makes the user interaction a whole new journey";
        let webDesignParagraphElement = document.getElementById("DesParagraph");

        webDesignParagraphElement.innerText = webDesignParagraphText;
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
            case 'HR':
                displayHR();
                break;

        }
        

    }
   
    window.addEventListener("load",addFooter);
    window.addEventListener("load",Projects);
    window.addEventListener("load",Start);
    window.onload = addHr();

})();