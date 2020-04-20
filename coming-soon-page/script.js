const subscribe = () => {
    let form = document.body.getElementsByClassName("b-subscription-form");
    let error = document.body.getElementsByClassName("subscription-error")[0];
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
    let hidden = error.getAttribute('hidden').valueOf();
    console.log(hidden);
}