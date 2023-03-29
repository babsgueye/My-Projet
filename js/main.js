let bouton1 = document.getElementById("bouton1")
let compteur1 = document.getElementById("count1")
let compte1 = parseInt(compteur1.innerText);

bouton1.addEventListener('click', function(){
    if(bouton1.style.color == "blue"){
        bouton1.style.color = "red";
        compte1--;
        }else{
    bouton1.style.color = "blue"
    compte1++;
    }compteur1.innerHTML = compte1;
})

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e){
    let myInput1 = document.getElementById('firstname');
    if(myInput1.value.trim() == ""){
        let myError1 = document.getElementById('error1');
        myError1.innerHTML = "Le champ est requis.";
        myError1.style.color = "red";
        e.preventDefault();
    }
    let myInput2 = document.getElementById('name');
    if(myInput2.value.trim() == ""){
        let myError2 = document.getElementById('error2');
        myError2.innerHTML = "Le champ est requis.";
        myError2.style.color = "red";
        e.preventDefault();
    }
    let myInput3 = document.getElementById('pseudo');
    if(myInput3.value.trim() == ""){
        let myError3 = document.getElementById('error3');
        myError3.innerHTML = "Le champ est requis.";
        myError3.style.color = "red";
        e.preventDefault();
    }
    let myInput4 = document.getElementById('tel');
    if(myInput4.value.trim() == ""){
        let myError4 = document.getElementById('error4');
        myError4.innerHTML = "Le champ est requis.";
        myError4.style.color = "red";
        e.preventDefault();
    }
    let myInput5 = document.getElementById('mail');
    if(myInput5.value.trim() == ""){
        let myError5 = document.getElementById('error5');
        myError5.innerHTML = "Le champ est requis.";
        myError5.style.color = "red";
        e.preventDefault();
    }
})
    