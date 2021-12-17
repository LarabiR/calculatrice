$(document).ready(function(){
    $('.number').click(function(){
        $('.place-calcule').val($('.place-calcule').val() + $(this).val());
    });
    $('.line-11').click(function(){
        $('.place-calcule').val(' ');
        $('.place-result').val(' ');
    });
    $(".line-54").click(function(){
        $('.place-result').val(eval($('.place-calcule').val()));
    });
    
})
