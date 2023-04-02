//Una cadena de texto con tu Nombre
let Nombre= "Javier";
console.log(Nombre);

//Otra cadena de texto con tu Apellido
let Apellido= "Luna Reyes";
console.log(Apellido);

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante= Nombre+ " "+ Apellido;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus=estudiante.toUpperCase();
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus=estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numEstudiante=estudiante.length;
console.log(numEstudiante);

//Una variable que contenga la primera letra del Nombre
let primeraLet=Nombre.charAt(0);
console.log(primeraLet);

//Otra variable que contenga la última letra del Apellido
let ultimaLet=Apellido.charAt(9);
console.log(ultimaLet);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let elimEspacio=estudiante.trim();
console.log(elimEspacio);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let booleana=estudiante.includes(Nombre);
console.log(booleana);