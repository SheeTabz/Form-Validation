const name = document.getElementById('name')
const password = document.getElementById('password')
const age = document.getElementById('age')
const email = document.getElementById('email')
 const form = document.getElementById('form')
 const errorElement = document.getElementById('error')

//PreventDefault of submotting if the fields are not filled in
form.addEventListener('submit', (e) => {
//Prevent the form from submitting itself if the following conditions are met
let message = [] //array to push error message
if (name.value === '' || name.value === null){
message.push('Name must be provided')
}
if(password.value.length<6){
    message.push('Password should be longer than 6 characters')
}
if(password.value.length > 20){
    message.push('Password should be at least 20 characters')
}
if(message.length > 0){
    e.preventDefault()
    errorElement.innerText = message.join('\n') //converts the error messages to a string
}

})