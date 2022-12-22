const email = document.querySelector(".input")
const incorrect = document.querySelector(".validate")
let emailregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const error = document.querySelector(".error")

const validation = () =>{
    if(emailregex.test(email.value)){
        console.log("bien")
    }else{
        incorrect.style.display = "block"
        error.style.display = "block"
        email.style.border = "1px solid hsl(0, 93%, 68%)"
    }
}