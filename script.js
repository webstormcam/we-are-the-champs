import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    databaseURL: "https://we-the-champs-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const congratsInDB = ref(database, "congrats")










const textPlace = document.getElementById('textPlace')
// const to0 = document.getElementById('to')
// const from0 = document.getElementById('from')
const button = document.getElementById('submitButton')
const thanksArea= document.getElementById('endorsement-area')

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
        clearList()
       itemsArray.reverse()
        for(let i=0;i<itemsArray.length;i++){
            const congrat =itemsArray[i][1]
            const del_code = itemsArray[i][0]
            createSquare(congrat,del_code)
        }
    } else{
        thanksArea.innerHTML="No thanks here... yet"
    }

    
})


function clearList(){
    thanksArea.innerHTML=""
}

function createSquare(value,number){
    const el = document.createElement('div')
    el.classList.add('endorsement')
    const p = document.createElement('p')
    p.classList.add('endorse-words')
    p.textContent=value
    el.append(p)
    
    
    // `<div class="endorsement">
    // <p class="endorse-words">${value}</p>
    // </div>`
    el.addEventListener("click",function(){
        let exactLocationOfItemInDB = ref(database, `congrats/${number}`)
        remove(exactLocationOfItemInDB)
    })
    thanksArea.append(el)

}

