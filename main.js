console.log("hello mundo")

$(document).ready(function(){
    
  //función cuando el usuario registra numeros mediante el teclado

  $('.monto').keyup(function() {
        var importe_total = 0
          $(".monto").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
         $("#subtotal").val(importe_total);

    });

    //función cuando el usuario registra numeros mediante la pestaña del 
    //input de numero

    $('.monto').change(function(){
        //alert($('.monto').val());
        var importe_total = 0
          $(".monto").each(
            function(index, value) {
              if ( $.isNumeric( $(this).val() ) ){
              importe_total = importe_total + eval($(this).val());
              //console.log(importe_total);
              }
            }
          );
         $("#subtotal").val(importe_total);
    });
    
    //validación de correo
    
  // cuando pierde el foco, este valida si lo que esta en el campo de texto si es un correo o no y muestra una respuesta
    $('form').find('input[type=email]').blur(function(){
    caracteresCorreoValido($(this).val(), '#xmail')
    });
  // cambiar valor al div en su color <css>
    $('#rojo').click(function(){
      $('#div').css('background-color', 'red');
     });  
    $('#azul').click(function(){
      $('#div').css('background-color', 'blue');
     });   

  //calcular longitud de texto
  $('#longitud').keyup(function() {
    var numeroCaracteres = 0;
    var palabra = $('#longitud').val();
    numeroCaracteres = palabra.length;
    console.log(numeroCaracteres);

    if(numeroCaracteres ==13){
      $('#open').text('Cantidad Correcta');
     
    }else{
      $('#open').text('El valor tiene que ser de 13 digitos');
    } 

  });   



});

function caracteresCorreoValido(email, div){
    console.log(email);
    //var email = $(email).val();
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if (caract.test(email) == false){
        $(div).hide().removeClass('hide').slideDown('fast');

        return false;
    }else{
        $(div).hide().addClass('hide').slideDown('slow');
//        $(div).html('');
        return true;
    }



}

