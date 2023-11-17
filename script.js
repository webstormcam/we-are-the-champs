import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://we-the-champs-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const congratsInDB = ref(database, "congrats")










const textPlace = document.getElementById('textPlace')
const to0 = document.getElementById('to')
const from0 = document.getElementById('from')
const button = document.getElementById('submitButton')

button.addEventListener('click',function(event){
    if (textPlace.value==""){
        alert("Please fill out all fields!!")
        event.preventDefault()
    } else{
        const value = textPlace.value
        push(congratsInDB,value)
        textPlace.value=""
    }
   
})

onValue(congratsInDB,function(snapshot){
    if(snapshot.exists()){
        let itemsArray =Object.entries(snapshot.val())
        console.log(itemsArray)
    }

    // for (let i=0;i<itemsArray.length;i++){
    //     let currentItem= itemsArray[i]
    // }
})

