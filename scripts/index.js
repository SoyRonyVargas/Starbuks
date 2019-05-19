 window.addEventListener('load', () => {

//	console.log('hey')
        var n = 0 
	let inicio = document.getElementById('verBebidas')
	inicio.addEventListener('click' , () => {
  
        window.location = "bebidas.html"

	})
	/*var ver = document.getElementById('ver-bebidas')
	ver.addEventListener('click', ()=>{
		window.location = "bebidas.html"
	})*/
	var post = $('#post')
       
	post.on('click', function(){
	    n++
	    switch(n)
	    {
		    case 1:
   
		     $(this).addClass('post-second')
		     break
		     case 2:
                     $(this).removeClass('post-second')
		     n = 0
		     break
		     
	    }
	})

          
 
 
})