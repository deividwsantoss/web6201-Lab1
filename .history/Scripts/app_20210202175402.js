/* Custom JavaScript goes here */



(function(){

    function displayHome(){
        let paragraphOneText = "Welcome to DeRa Development. ";
        let paragraphOneElement = document.getElementById("paragraphOne");

        //let paragraphOneParagraph = document.getElementsByTagName("p")[0];
        //let paragraphOneQuery = document.querySelector("p");
        //let paragraphOneQuerys = document.querySelectorAll("p")[0];

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        //SECOND METHOD 
        //Step 1. document.createElement
        let newParagraph = document.createElement("p");
        //configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "... And this is Paragraph Two";
        //step 3. Select the parent element 
        let mainContent = document.getElementsByTagName("main")[0];
        //step 4. Add / Insert the element 
        mainContent.appendChild(newParagraph);
        
        newParagraph.className = "fs-5";

    }
    function displayAbout(){
        
    }
    function displayServices(){
        
    }
    function displayProducts(){
        
    }
    function displayContact(){
        let messageArea  = document.getElementById("messageArea");
        messageArea.hidden = true;


        //Form Validation
        
        let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() {

            if(fullName.value.length < 2 ){
                
                fullName.focus;
                fullName.select();
                messageArea.hidden = false;
                messageArea.className = "alert alert-danger";
                messageArea.textContent = "Please Enter an appropriate name ";
            }
            else{
                messageArea.removeAttribute("Class");
                messageArea.hidden = true;
            }

        });

        let sendButton = document.getElementById("sendButton");
        sendButton.addEventListener("click", function(event){
            event.preventDefault();

           // console.log(fullName.value);
           // console.log(contactNumber.value);
           // console.log(emailAddress.value);
        });
        
    }

function Start(){

    console.log("App Started...");
    switch(document.title)
    {
        case 'Home':
            displayHome();
            break;
        case 'About':
            displayAbout();
            break; 
        case 'Projects':
            displayProjects();
            break;
        case 'Services':
            displayServices();
            break;
        case 'Contact':
            displayContact();
            break;    
    }
}

})();