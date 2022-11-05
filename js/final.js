"use strict";

/*const valorTicket= 200;


//variables

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;




let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTicket = document.getElementById("cantidadTicket");
let categoria = document.getElementById("categoriaSelect");



let totalValorTicket = (cantidadTicket) * valorTicket;



let btnborrar = document.getElementById("borrar");
let btnresumen = document.getElementById("totalAPagar");


let resumen = document.getElementById("totalAPagar");


const emailValido = mail=>{
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail);
};


function resetTotalAPagar(){
    quitarClaseError();
    totalPago.innerHTML = "";
};


function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let y;
    for ( i = 0; i<x.length; i++ ){
        x[i].classList.remove("is-invalid");

    }


};
 

 
btnresumen.addEventListener("click", () => {
        

        if (nombre.value === "") {

            alert("el nombre no puede estar vacio");
            nombre.classList.add("is-invalid");
            nombre.focus();
            return;


        }


        if (apellido.value === "") {

            alert("el apellido no puede estar vacio");
            apellido.classList.add("is-invalid");
            apellido.focus();
            return;

        }


        if (mail.value === "") {

            alert("el mail no puede estar vacio");
            mail.classList.add("is-invalid");
            mail.focus();
            return;

        }

        if (!emailValido(mail.value)) {
            alert("por favor, escriba un mail valido");
            mail.classList.add("is-invalid");
            mail.focus();
            return;


        }




        if (cantidadTicket.value === "") {

            alert("la cantidad de ticket no puede estar vacio");
            cantidadTicket.classList.add("is-invalid");
            cantidadTicket.focus();
            return;

        }

        if (categoria.value === "") {

            alert("la categoria no puede estar vacia");
            categoria.classList.add("is-invalid");
            categoria.focus();
            return;


        }




    }


);






function totalAPagar(){



    if (categoria.value == 0 ){ 
        totalValorTicket = totalValorTicket;


    }

    if (categoria.value == 1 ){ 
        totalValorTicket = totalValorTicket - (descuentoEstudiante / 100 * totalValorTicket);

    }
    
    if (categoria.value == 2 ){ 
        totalValorTicket = totalValorTicket - (descuentoTrainee / 100 * totalValorTicket);

    }
    else (categoria.value == 3 );{ 
        totalValorTicket = totalValorTicket - (descuentoJunior / 100 * totalValorTicket);

        totalPago.innerHTML = totalValorTicket;


}

};

btnResumen.addEventListener("click", totalAPagar);
btnBorrar.addEventListener("click", resetTotalAPagar);*/


/*otra opcion
const valorTicket= 200;

let descuentoEstudiante= 80;
let descuentoTrainee= 50;
let descuentoJunior= 15;

let nombre= document.getElementById ("nombre");

let apellido= document.getElementById ("apellido");

let mail= document.getElementById ("mail");

let cantidadTickets= document.getElementById ("cantidadTickets");

let categoria= document.getElementById ("categoriaSelect");

let totalPago= document.getElementById ("totalPago");



function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i=0; i<x.length; i++){
        x[i].classList.remove("is-invalid");
    }
}

function resetTotalAPagar(){
    quitarClaseError();
    totalPago.innerHTML ="";
}

function totalAPagar(){
        quitarClaseError();

        if (nombre.value === "") {
            nombre.classList.add("is-invalid");
            nombre.focus();
            alert("Por favor, escriba su nombre");
            return;
        }
        if (apellido.value === "") {
            apellido.classList.add("is-invalid");
            apellido.focus();
            alert("Por favor, escriba su apellido");
            return;
        }
        if (mail.value === "") {
            mail.classList.add("is-invalid");
            mail.focus();
            alert("Por favor, escriba su E-mail");
            return;
        }
         const emailValido = mail => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
         }
        
        if (!emailValido(mail.value)){
            mail.classList.add("is-invalid");
            mail.focus();
            alert("Por favor, escriba un correo electrónico valido");
            return;
        }

        if ( ( cantidadTickets.value == 0) || (isNaN (cantidadTickets.value) ) ){
            cantidadTickets.classList.add ("is-invalid");
            cantidadTickets.focus();
            alert("Por favor, ingrese la cantidad de tickets que desea adquirir")   
            return
        }    

        if(categoria.value ==""){
            categoria.classList.add("is-invalid");
            categoria.focus();
            alert ("Seleccione una categoría");
            return;
        }
    

    let totalValorTickets = (cantidadTickets.value)*valorTicket;
    
    switch (categoria.value) 
    { 
        case "n":
        totalPago.innerHTML = (totalValorTickets = totalValorTickets);
        break;
          
        case"e":
        totalPago.innerHTML = (totalValorTickets= (totalValorTickets - (descuentoEstudiante/100*totalValorTickets)))
        break
    
        case"t":
        totalPago.innerHTML = (totalValorTickets = (totalValorTickets-(descuentoTrainee/100*totalValorTickets)))
        break;
        
        case"j":
        totalPago.innerHTML = (totalValorTickets =(totalValorTickets-(descuentoJunior/100*totalValorTickets)))
        break;
        default:
        break;
     }    
    }

    btnResumen.addEventListener('click',totalAPagar);

    btnBorrar.addEventListener('click',resetTotalAPagar);*/



    