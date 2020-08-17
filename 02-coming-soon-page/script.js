document.forms["newsletter-form"].addEventListener("submit", (event) => {
    let email = document.forms["newsletter-form"]["email"];
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let message = document.getElementById("subscription-message");
    message.innerHTML = "Hello World!";

    if (emailRegExp.test(email.value)){
        message.innerHTML = "Thank you for subscribing! 🙏🏾";
        message.classList.add("subscription-validation");
    }
    else if(email.value.length == 0){
        message.innerHTML = "Whoops! It looks like you forgot to add your email!";
        message.classList.add("subscription-error");
    }
    else{
        message.innerHTML = "Please provide a valid email address.";
        message.classList.add("subscription-error");
    }    
    message.removeAttribute("hidden");
    event.preventDefault();
});
