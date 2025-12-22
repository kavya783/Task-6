document.getElementById("saveBtn").addEventListener("click", function () {
    window.location.reload();
  });

function myFunction() {
  let name = document.getElementById("name").value;
  let nameError = document.getElementById("nameerror");
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("mailerror");
  let password = document.getElementById("password").value;
  let passError = document.getElementById("passworderror");
  let rePassword = document.getElementById("repassword").value;
  let rePassError = document.getElementById("re-passworderror");
  let dob = document.getElementById("dob").value;
  let dobError = document.getElementById("doberror");
  let phone = document.getElementById("phone").value;
  let phoneError = document.getElementById("phoneerror");
  let course = document.getElementById("course").value;
  let courseError = document.getElementById("courseerror");
  let genderError = document.getElementById("gendererror");
  let checkGen = document.querySelector('input[name="gender"]:checked');
  let country=document.getElementById("country").value;
  let countryError=document.getElementById("countryerror");
  let address=document.getElementById("address").value;
  let addressError=document.getElementById("addresserror");
  nameError.innerHTML="";
  emailError.innerHTML="";
  passError.innerHTML="";
  rePassError.innerHTML="";
  dobError.innerHTML="";
  phoneError.innerHTML="";
  courseError.innerHTML="";
  genderError.innerHTML="";
  countryError.innerHTML="";
  addressError.innerHTML="";
  
  
   if (name.length == 0) {
    nameError.innerHTML = "Please enter  your name";
    nameError.style.color = "red";
    return false;
  }
    if (!/^[A-Z]/.test(name)) {
    nameError.innerHTML = "Name must start with capital letter";
    nameError.style.color = "red";
    return false;
    
  }
  else if (/[0-9]/.test(name)) {
    nameError.innerHTML = "numbers  are  not allowed";
    nameError.style.color = "red";
    return false;
  }
 else if (/[@#&*]/.test(name)) {
    nameError.innerHTML = "special characters are not allowed";
    nameError.style.color = "red";
    return false; 
  }
  else if (name.length < 3) {
    nameError.innerHTML = "Name must be at least 3 characters";
    nameError.style.color = "red";
    return false;
  }
   

  else {
    nameError.innerHTML = "";
  
  }


  if (email.length == 0) {
    emailError.innerHTML = "enter your email id";
    emailError.style.color = "red";
     return false;
  }


  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.innerHTML = "please enter this format 'ex@gmail.com'";
    emailError.style.color = "red";
    return false;
  }
   else {
    emailError.innerHTML = "";
 

  }


  if (password.length == 0) {
    passError.innerHTML = "Enter your password";
    passError.style.color = "red";
    return false;
     
  }
  else if (!/[A-Z]/.test(password)) {
    passError.innerHTML = "Add uppercase letter";
    passError.style.color = "red";
    return false;
     
  }
  else if (!/[a-z]/.test(password)) {
    passError.innerHTML = "Add lowercase letter";
    return false;
   
  }
  else if (!/[0-9]/.test(password)) {
    passError.innerHTML = "Add number";
    return false;
    
  }
  else if (!/[*#@&]/.test(password)) {
    passError.innerHTML = "Add special character";
    return false;
    
  }
  else if (password.length < 8) {
    passError.innerHTML = "Minimum 8 characters";
    return false;
     
  }
  else {
    passError.innerHTML = "";

  }

  if (rePassword.length == 0) {
    rePassError.innerHTML = "please enter conform password";
    rePassError.style.color = "red";
    return false;
    
  }

  else if (password !== rePassword) {
    rePassError.innerHTML = "Passwords do not match";
    rePassError.style.color = "red";
    return false;
    
  }
  else {
    rePassError.innerHTML = "";

  }



  let birthDate = new Date(dob);
  let age = new Date().getFullYear() - birthDate.getFullYear();

  if (dob.length == 0) {
    dobError.innerHTML = "Enter DOB";
    dobError.style.color = "red";
    return false;
   
  }

  else if (age < 18) {
    dobError.innerHTML = "Age must be 18+";
    dobError.style.color = "red";
    return false;
    
  }
  else {
    dobError.innerHTML = "";

  }

 
  if (phone.length == 0) {
    phoneError.innerHTML = "enter your phone number";
    phoneError.style.color = "red";
    return false;
     
  }
 if (!/^[6-9]/.test(phone)) {
    phoneError.innerHTML = "Phone number must start with 6-9.";
     phoneError.style.color = "red";
    return false;
}
else if (!/^\d{10}$/.test(phone)) {
    phoneError.innerHTML = "Phone number must be exactly 10 digits.";
     phoneError.style.color = "red";
    return false;
}

  else {
    phoneError.innerHTML = "";

  }



 
  if (checkGen == null) {
    genderError.innerHTML = "Select gender";
    genderError.style.color = "red";
    return false;
   
  }
  else {
    genderError.innerHTML = "";
  }

     if (course.length == 0) {
    courseError.innerHTML = "Select course";
    courseError.style.color = "red";
    return false;
     
  }
  else {
    courseError.innerHTML = "";

  }
  


  
  if (country.length == 0) {
    countryError.innerHTML = "Select country";
   countryError.style.color = "red";
   return false;
   
  }
  else {
    countryError.innerHTML = "";

  }
  if(address.length==0)
  {
    addressError.innerHTML="please enter your address";
    addressError.style.color="red";
    return false;
  }
  else{
    addressError.innerHTML=" ";
  }

  

    const modal = new bootstrap.Modal(document.getElementById("myModal"));
    modal.show();
    return true;


}
