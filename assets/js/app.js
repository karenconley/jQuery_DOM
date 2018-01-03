$(document).ready(() => {
});



/*guardamos 'container' porque ese es el div
que contiene la info*/
var cont = $('.container');
/*guardamos los div con su class*/
var mexico = $(.'mexico');
var peru = $(.'peru');
var chile = $(.'chile');
var everyone = $(.'everyone');

//evento para que funcione el select (onchange)
$('.categorias').on('change',function(){
	//guardo el valor del select en la variable selection:
	var selection = $('#categorias').val();
	//se escribe el valor del value ('mexico')
	//si es igual al valoer mexico...
	if (selection === 'mexico'){
		//que recorra var 'data'
		for (var i = 0; i < data.length; i++){
			//'México' es el string de sede
			if(data[i].sede === 'México'){
				mexico.append('<div class=row>' + 
					'<div class="col-md-12 text-center">' + 
					'img src="assets/' + data[i].foto + '">' + 
					'<h3>' + data[i].nombre + '</h3>' + '<p>Edad: ' + data[i].edad + '</p>' + 
					
					)

			}
		}
	}
})