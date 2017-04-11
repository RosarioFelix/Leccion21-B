window.onload=function(){


  var pagImagenes= document.getElementById('imagenes');

  for(var i =1; i<=12; i++){

  var creandoDiv = document.createElement("div");
  creandoDiv.classList.add("grid");

  var figura = document.createElement("figure");
  figura.classList.add("imagenPag");

  var creandoDivDos= document.createElement("div");
  creandoDivDos.classList.add("modal")

  var imagen = document.createElement("img");
  imagen.classList.add("img-box");

  var nombre= document.createElement('span')
//  nombre.classList.add("Proyecto");
  nombre.innerText="Nombre de Proyecto";

  imagen.setAttribute("src","assets/img/poner/"+ i+".jpg");


  //figurita.appendChild(nombre);
  //figura.appendChild(figurita);
  figura.appendChild(imagen);
  figura.appendChild(creandoDivDos);
  creandoDiv.appendChild(figura);
  // el span se pone como hijo de creandoDiv
  creandoDiv.appendChild(nombre);
  pagImagenes.appendChild(creandoDiv);
}



//modal

var myModal=document.getElementById("my-modal");
var close=document.getElementById("cerrar");
var oneByOne = document.getElementById("imagenes");//es el contenedor de mis imagenes
var seeImg=document.getElementById("see-img");

oneByOne.addEventListener("click",function(event){
		if (event.target.tagName == "IMG"){ //en tag name se pone en mayuscula para el elemento que quieres
			myModal.style.display = "block";
			seeImg.src = event.target.src;
		}
});

close.addEventListener("click",function(){
	myModal.style.display = "none";
});

};
