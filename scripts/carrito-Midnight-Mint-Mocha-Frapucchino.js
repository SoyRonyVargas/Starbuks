window.addEventListener('load', function(){
 
     var l = $('#comprar')
     l.on('click', function(){
         window.location = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W3KZAKPVGKTBU"
     })

})