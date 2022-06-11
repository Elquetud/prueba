console.log("hello mundo")

$(document).ready(function(){

   /** 
    $('#numero1').on('input', function(){
        console.log($(this).val());
        suma();
    });
    $('#numero2').on('input', function(){
        console.log($(this).val());
        suma();
    });
    $('#numero3').on('input', function(){
        console.log($(this).val());
        suma();
    });

    function suma (){
        var suma = 0;

        $('.monto').each(function(){
            
            if (isNaN(parseFloat($(this).val()))) {

              suma += 0;
          
              } else {
        
            suma += parseFloat($(this).val());
                $('#subtotal').val(suma);
            }
        });
    }
   */
    
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
