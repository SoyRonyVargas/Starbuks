localStorage.setItem('carrito' , 0)
window.addEventListener('load' , ()=>{

   let botones = document.getElementsByClassName('agregar')
   var carrito = 0
   document.getElementById('numeroCarrito').innerHTML = " " + localStorage.getItem('carrito')
   
   console.log(botones)
   let n = botones.length
   for(let i = 0 ; i < n ; i++)
   {
   	//console.log(botones[i])
   	 botones[i].addEventListener('click', function() {
  
       switch(this.id)
       {
       	case '1':
         console.log('soy el primero')
         carrito++
         localStorage.setItem('carrito' , carrito)
         document.getElementById('numeroCarrito').innerHTML = " " + localStorage.getItem('carrito')
       	break
       }

   	 })

   }

})