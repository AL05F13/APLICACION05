// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btndatos').on('click',function () {
		$('body').pagecontainer ("change","#datos",{transition:"flip"});
//}); 
});
$('#btnresultado').on('click',function () {
		$('body').pagecontainer ("change","#resultado",{transition:"flip"});
 var IMC;
 var peso= $('#txtpeso').val();
 var talla= $('#txttalla').val();
  //alert(peso);
  //alert(talla);
  imc=(peso/(talla*talla));
  $('#imc').text('Nombre '+ $('#txtnombre').val()
  +' imc= '+imc);
//}); 
});
});

