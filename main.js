console.log("hello mundo")

$(document).ready(function(){
    
   //función de suma mediante cuando el evento input se detecta
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

    

});
