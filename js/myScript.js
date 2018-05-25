$(document).ready(function(){

	$(".button-collapse").sideNav();
	$('select').material_select();
	$(".button-collapse").sideNav();

	$('.dropdown-button').dropdown({
         belowOrigin: true,
         constrainWidth: false
    });

	$('.card-panel').fadeIn(2000);

	$('.chips').material_chip();
	$('.chips-initial').material_chip({
		placeholder: 'Ingresa tus horarios',
	    secondaryPlaceholder: 'Agregar otro',
	    data: [{
	      tag: 'Lunes 8-10 am',
	    }, {
	      tag: 'Martes 9-12 am',
	    }, {
	      tag: 'Viernes 6-8 pm',
	    }],
	});
	$('.chips-initial').material_chip('data');

});
