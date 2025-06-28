function buttonSubmit(){
    
    let name1Input = document.querySelector("input#name1"); 
    let LastNameInput = document.getElementById('last-name2'); 
    let messageInput = document.getElementById("message"); 
    let emailInput = document.getElementById("emailadd")

    
    let name1Value = name1Input.value;
    let LastNameValue = LastNameInput.value;
    let messageValue = messageInput.value;
    let emailValue = emailInput.value;

    let allFieldsFilled = true; 

    
    if(LastNameValue === ""){
        LastNameInput.style.border = "1px solid red"; 
        allFieldsFilled = false;
    } else {
        LastNameInput.style.border = ""; 
    }

    if(name1Value === ""){
        name1Input.style.border = "1px solid red"; 
        allFieldsFilled = false;
    } else {
        name1Input.style.border = ""; 
    }

    if(messageValue === ""){
        messageInput.style.border = "1px solid red"; 
        allFieldsFilled = false;
    } else {
        messageInput.style.border = ""; 
    }

    if(emailValue === ""){
        emailInput.style.border = "1px solid red";
    }else{
        emailAddress.style.border = ""
    }

    
}