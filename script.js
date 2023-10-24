import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"









const button = document.getElementById('submitButton')

button.addEventListener('click',function(event){
    event.preventDefault()
    console.log("HELLO")
})

