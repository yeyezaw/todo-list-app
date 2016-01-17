$(document).ready(function(){
    $('ul').on("click", "li", function(){
        $(this).toggleClass('completed');
    });
    
    // Creating Todo
    $('.input-box').keypress(function(event){
        if(event.which === 13){ // if user hit 'enter = 13'
            var inputTextBox = $(this).val(); // get value from 'input'
            // attach new value from 'input' under 'ul' tag
            $('ul').append('<li><span><i class="fa fa-trash"></i></span>' + inputTextBox + '</li>')
            // reset to blank in 'input' after values added to 'ul'
            $(this).val('');
        }
    });
    
    //Click on trash icon to delete todo
    $('ul').on('click','span',function(event){
        $(this).parent().fadeOut(500,function(){ //remove the whole parent element
            $(this).remove(); // this refer 'li'
        });
        event.stopPropagation(); // do on one specific clicks or stop event
    });
    
    // when click 'minus' sign, show and hide of input box
    $('.fa-minus').click(function(){
        $('.input-box').fadeToggle('fast');
    });
});