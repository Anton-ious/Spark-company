// create
const color_1= document.getElementById("color-1")
const color_2= document.getElementById("color-2")
const color_3= document.getElementById("color-3")

const first_form= document.getElementById("f-1");
const Second_form= document.getElementById("f-2");
const Third_form= document.getElementById("f-3");

let current_form = first_form;
const Later= document.getElementById("later");
const C_ontinue= document.getElementById("continue");

// read

function Continue(){
    if(current_form == first_form){
        first_form.style.display="none"
        Second_form.style.display="block"
        current_form ="";
        Later.style.display="block"
        color_2.style.background="linear-gradient(135deg, rgba(255, 106, 0, 0.725), rgba(65, 38, 199, 0.238))"
    }
    if(current_form == Second_form){
        Second_form.style.display="none"
        Third_form.style.display="block"
        current_form = Third_form;
        C_ontinue.style.display="none"
        color_3.style.background="linear-gradient(135deg, rgba(255, 106, 0, 0.912), rgba(65, 38, 199, 0.452))"
    }
    current_form=Second_form;
}
function later(){
    if(Third_form.style.display == "block"){
        Third_form.style.display="none"
        Second_form.style.display="block"
        current_form = Second_form;
        C_ontinue.style.display="block"
        color_3.style.background="transparent"
    }
    else if(Second_form.style.display == "block"){
        Second_form.style.display="none"
        first_form.style.display="block"
        current_form = first_form;
        Later.style.display="none";
        color_2.style.background="transparent"
    }
}