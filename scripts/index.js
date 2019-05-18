 window.addEventListener('load', () => {

	console.log('hey')

	let inicio = document.getElementById('logo')
	inicio.addEventListener('click' , () => {
  
        window.location = "index.html"

	})

	let ver = document.getElementById('ver-bebidas').addEventListener('click', ()=>{
		window.location = "bebidas.html"
	})
	/*var ver = document.getElementById('ver-bebidas')
	ver.addEventListener('click', ()=>{
		window.location = "bebidas.html"
	})*/
})