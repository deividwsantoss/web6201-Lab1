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

    }
    function displayAbout(){
        
    }
    function displayServices(){
        
    }
    function displayProducts(){
        
    }
    function displayContact(){
        
       
        
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

})();