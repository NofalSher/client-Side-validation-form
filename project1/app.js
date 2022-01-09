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

// Function to check if email is valid
function checkEmail(input){
    //To check it we need a regular expression. 
    //It is difficult to code at beginner level. So we can see it from google.
// Search javascript email regex(regular expression)
    
       const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(re.test(input.value.trim())){  // trim function will remove extra spaces in code
          showSuccess(input);
      } else{
        showError(input,`Please provide a valid email`)
      }
}



 




//Function to check if required fields have data
function checkRequired(inputArray){
    // for this we can use a for loop. But without for loop we can use
    //(for each) that is actually a high order array method. 
    inputArray.forEach(function(input){
        if(input.value==""){
            //showError(input,input.id +" is required") // First Method
            //showError(input,`${input.id} is required`) // Second Method
            showError(input,`${getFieldId(input)} is required`)

        }
        else{
            showSuccess(input);
        }
        });
}

 
//Function to check length of input field
function checkLength(input,min,max){
    if (input.value.length<min){
        showError(input,`${getFieldId(input)} needs to be at least ${min} characters`)
    }
    else if (input.value.length>max){
        showError(input,`${getFieldId(input)} needs to be less than  ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}


//Function to check if password and confirm password matches
function checkPasswordMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,"Confirm Password must macthes password")
    }
}


// Function to get id of input field in sentence case format
function getFieldId(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//Event Listeners
//creating event listener(That checks if any event is performed on page) for submit button
form.addEventListener("submit",function(e){
    e.preventDefault();  // To stop page from reloading on submit.
    // console.log("Submitted");     // This will basically show submitted in console when we click submit button.This will reload page continuously. To prevent reloaded we will add preventDefault function above it 
    // console.log(username.value);// it will give us value we enter in username textfield. 
    // Check if field meets current field requirement
    
   // We will make a function where we can check validity of all variable at a time
    checkRequired([username,email,password,password2])
    checkLength(username,3,10)  //minimum value is 3 and maximum is 10
    checkLength(password,6,30)
    checkEmail(email);

    checkPasswordMatch(password,password2);


});  // when ever we will click submit button html will generate event of submit and will store that in function(e){}
