$(document).ready(function(){
    if(window.matchMedia("(max-width: 768px)").matches){    
        $('#main').hide();
        $('#navbar').hide();
        if(window.navigator.userAgent.match(/Android/i)) 
            $('#app-store').hide();
        else
            $('#play-store').hide();
        
    } else{
    // The viewport is at least 768 pixels wide
        $('#mobile').hide();
    }
});