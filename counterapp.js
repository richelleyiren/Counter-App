let count = 0
let sum = 0
let countPeople = document.getElementById("count-num")
let savePeople = document.getElementById("final")
let overAll = document.getElementById("overall")
let total = []

function increment(){
    count += 1
     countPeople.textContent = count   
}


function save(){
    let finalSave = count + " - "
    savePeople.textContent +=  finalSave
    countPeople.innerText= 0 
    total.push(count)
   
    count = 0
    
    
}

function alL() {//
    
    for ( let i = 0; i < total.length; i++) {
        sum  += total[i]
   }
    overAll.textContent = " This is what is in the array : " + total  + " || " +"Overall People : " + " " + sum
//
}

