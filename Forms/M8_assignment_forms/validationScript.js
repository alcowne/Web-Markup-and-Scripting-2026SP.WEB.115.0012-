    // JavaScript code for form validation
	// Prevent form from submitting. Done
    // Retrieve the input field value. Done.
    // Regular expression pattern for alphanumeric input. done.
    // Check if the input value matches the pattern. Done.
    // Valid input: display confirmation and submit the form. Done.
    // Invalid input: display error message. Done

let form = document.getElementById("myForm")
let input = document.getElementById("inputField")

form.addEventListener("submit", function(event){

    let test = /^[a-zA-Z0-9]+$/;
    let value = input.value;

    if(!test.test(value)){
        event.preventDefault();
        alert("Error: not a-z, A-Z, or 0-9, rember no spaces, or special charaters for alphanumeric.")
    }
    else{
        alert("Form submitted.")
    }

});

      

