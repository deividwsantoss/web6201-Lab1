/* app.js

Author: Deivid Santos   ID: 100731640
Author: S m hasibur Rahman  ID:100765652

Date Completed: 02.04.2021
*/


"use strict";






$(document).ready(function(){

    console.log("Document is ready!");
});

((core) =>
{

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

       
      formValidation();
        

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            event.preventDefault();
        });
        document.getElementById("sendButton").onclick = function (){
            location.href = "index.html"
        };

    }
    function displayLogin(){
        
       let messageArea = $("#messageArea")
       messageArea.hide();

       let key = location.hash.substring(1);
       let contact = new core.Contact();

       let loginBtn = document.getElementById("")

       $("#btnSubmit").on("click", function() 
      {
        let username = $("#contactName").val();
        let password = $("#password").val();
        

       
       
       location.href = "contact.html"
       $("#fullName").val(username);
        
      });
     
    
}
    function displayContactList() 
    {
      if (localStorage.length > 0) 
      {
        let contactList = document.getElementById("contactList");

        let data = "";

        for (let index = 0; index < localStorage.length; index++) 
        {
          let contactData = localStorage.getItem((index + 1).toString());

          let contact = new core.Contact();
          contact.deserialize(contactData);

          data += `<tr>
          <th scope="row">${index + 1}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
          <td class="text-center"><button value="${index + 1}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
          <td class="text-center"><button value="${index + 1}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
        </tr>`;
        }

        contactList.innerHTML = data;

        //TODO - need to create an edit page
        $("button.edit").on("click", function(){
          console.log($(this).val());
         });

         //TODO - need to fix this item - it breaks when we delete a middle item
         $("button.delete").on("click", function(){
           if(confirm("Are you sure?"))
           {
            localStorage.removeItem($(this).val());
            location.href = "contact-list.html"; // refresh the page
           }
         });
      }
    }
    function testFullName()
    {
      let messageArea = $("#messageArea");
      let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

        
        $("#fullName").on("blur", function()
        {
          if(!fullNamePattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function testContactNumber()
    {
      let messageArea = $("#messageArea");
      let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        
        $("#contactNumber").on("blur", function()
        {
          if(!contactNumberPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Contact Number. Country code and area code are both optional");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }
    function testEmailAddress()
    {
      let messageArea = $("#messageArea");
      let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        
        $("#emailAddress").on("blur", function()
        {
          if(!emailAddressPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Email Address.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }
    function testUserName(){
        

        let messageArea = $("#messageArea");
        let userNamePattern = /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{0,19}$/;
        
        $("#contactName").on("blur", function()
        {
          if(!userNamePattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid user name.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });

    }
    function testPassword(){
       

        let messageArea = $("#messageArea");
        let userPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        
        $("#password").on("blur", function()
        {
          if(!userPasswordPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Password. Minimum six characters, at least one letter and one number");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });

    }

    function formValidation()
    {
      testFullName();
      testContactNumber();
      testEmailAddress();
    }

    function testFirstName(){
        
        let messageArea = $("#messageArea");
        let FirstNamePattern = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

        
        $("#firstName").on("blur", function()
        {
          if(!FirstNamePattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid First name.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });

    }
    function testLastName(){

        let messageArea = $("#messageArea");
        let LastNamePattern = /^(?=.{2,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
        
        $("#lastName").on("blur", function()
        {
          if(!LastNamePattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Please enter a valid Last name.");
          }
          else
          {
              messageArea.removeAttr("class").hide();
          }
        });
    }

    function testRePassword(){
        
        let messageArea = $("#messageArea");
        let userRePasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
       
        let Password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        
        $("#confirmPassword").on("blur", function()
        {
          if(!userRePasswordPattern.test($(this).val()))
          {
            $(this).trigger("focus").trigger("select");
            messageArea.show().addClass("alert alert-danger").text("Password does not matches");
          }
          else if(Password != confirmPassword)
            {
              $(this).trigger("focus").trigger("select");
              messageArea.show().addClass("alert alert-danger").text("Password does not matches!");
            }
            else
            {
                messageArea.removeAttr("class").hide();
            }
          
        });
    }
    function testConfirmPassword(){

        let messageArea = $("#messageArea");
       

        $("#confirmPassword").on("blur", function()
        {
          
        });
        
    }

    function testRegister(){
        testFirstName();
        testLastName();
        testEmailAddress();
        testPassword();
        testRePassword();
        

    }

    function displayRegister(){
     
        let messageArea = $("#messageArea")
        messageArea.hide();

        let registerButton = document.getElementById("registerButton");
        registerButton.addEventListener("click", function(event){
            event.preventDefault();
        testRegister();
        });

    }

    function toggleLogin()
    {
      // if user is logged in
      if(sessionStorage.getItem("user"))
      {
        // swap out the login link for logout
        $("#login").html(
        `<a id="logout" class="nav-link" aria-current="page" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>`
        );

        $("#logout").on("click", function()
        {
          // perform logout
          sessionStorage.clear();

          // redirect back to login
          location.href = "login.html";
        });
       
        $(`<li class="nav-item">
        <a id="contactListLink" class="nav-link" aria-current="page" href="contact-list.html"><i class="fas fa-users fa-lg"></i> Contact List</a>
      </li>`).insertBefore("#login");
      
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
            case 'HR':
                displayHR();
                break;
            case 'Login':
                displayLogin();
                break;
            case 'Register':
                displayRegister();
                break;
            case "Contact-List":
                displayContactList();
                break;

        }
        
        toggleLogin();
    }
   

   window.addEventListener("load", Start);

    core.Start = Start;
    
})(core || (core={}));