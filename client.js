//OUR VERY FIRST 'CALLBACK FUNCTION'!!
$(document).ready(onReady);
//taking in our function and at some point running that code...?

console.log( 'Jquery intro lecture' );

function onReady() {
    console.log( 'jquery is ready' );
    $('h1').addClass('funny');
    $('h1').css('color', 'red');

    //GETTERS AND SETTERS
    console.log($('h2').text());
    $('h2').text('you have been set');
    console.log($('h2').text());

     //INPUTS (also, getter and setter)
    $('#nameInput').val('slothie');
    console.log($('#nameInput').val());
   //.val is only for inputs
   //.val is a method ;) it's got parentheses.

   //EVENTS
   //even handler
   $('#addPersonButton').on('click', function() {
       let newPersonName = $('#nameInput').val();
       console.log(newPersonName);
       $('#personList').append('<li>' + newPersonName + ' ' + '<button class="deleteButton">delete</button>' + '</li>');
       
}); 

$('#personList').on('click', '.deleteButton', function(){
    console.log('Delete button was clicked.');
    $(this).parent().remove();
});


}







