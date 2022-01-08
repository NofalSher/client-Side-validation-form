const form =document.getElementById("form") ; // let is a variable data that can be changed later. we will not use var to make variable. 
const username =document.getElementById("username");
const email =document.getElementById("email");
const password =document.getElementById("Password");
const password2 =document.getElementById("Password2");

//Function to update class and message for errors
function showError(input,message){   // In input we will have any of username,email,password
   // Get perent element of input field(.form-control)
    const formControl=input.parentElement;  // We have basically go to parent of any of input 
  //Replace the class -- add error
    formControl.className="form-control error"   // We are basically overriding or parent class that is adding an extra class there.
    //Get small element for error messages
    const small=formControl.querySelector("small")   // This will basically search for small tag or element in (form-control div) and 
    small.innerText=message; // We are overwriting or replacing error message of small tag
}
//Function to update class for success
function showSuccess(input){
    // Get parent element of input field
    const formControl=input.parentElement;

//Replace the class --add success
formControl.className="form-control success";

}

//Event Listeners
//creating event listener(That checks if any event is performed on page) for submit button
form.addEventListener("submit",function(e){
    e.preventDefault();  // To stop page from reloading on submit.
    // console.log("Submitted");     // This will basically show submitted in console when we click submit button.This will reload page continuously. To prevent reloaded we will add preventDefault function above it 
    // console.log(username.value);// it will give us value we enter in username textfield. 



    // Check if field meets current field requirement
    
    // Check if username is empty or not
    if(username.value==""){
        // alert("Username is required");   //This is basically giving us error. But prompt is very old and is not used mostly now a days.
        // alert basically shows a message . Prompt takes an input and show that 
        showError(username,"Username is require")
    }
    else{
        showSuccess(username);
    }


    // Check if email is empty or not
    if(email.value==""){
        // alert("Email is required");   //This is basically giving us error. But prompt is very old and is not used mostly now a days.
        // alert basically shows a message . Prompt takes an input and show that 
        showError(email,"Email is required")
    }
    else{
        showSuccess(email);
    }



    // Check if password is empty or not
    if(password.value==""){
        // alert("password is required");   //This is basically giving us error. But prompt is very old and is not used mostly now a days.
        // alert basically shows a message . Prompt takes an input and show that 
        showError(password,"Password is required")
    }
    else{
        showSuccess(password);
    }


    // Check if confirm password is empty or not
    if(password2.value==""){
        // alert("confirmpassword is required");   //This is basically giving us error. But prompt is very old and is not used mostly now a days.
        // alert basically shows a message . Prompt takes an input and show that 
        showError(password2,"Confirm Password is required")
    }
    else{
        showSuccess(password2);
    }



});  // when ever we will click submit button html will generate event of submit and will store that in function(e){}


