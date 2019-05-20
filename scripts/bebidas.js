window.addEventListener('load', ()=>{
   let logo = document.getElementById('logo')
   logo.addEventListener('click', function(){
       window.location = "index.html"
   })
})

var botones = document.getElementsByClassName('agregar2')
var saber = document.getElementsByClassName('saber')
//console.log(saber)
    //console.log(botones)
    for(let i = 0 ; i < botones.length; i++)
    {
       //console.log(botones[i])
       botones[i].addEventListener('click' , function(){

         console.log(this.id)
         switch(this)
         {
            case botones[0]:
            toastr.success('soy ' +this.id+ "jeje")            
            localStorage.setItem('name' , 'moca 1')
            window.location = "carrito-Midnight-Mint-Mocha-Frapucchino.html"
            break
            case botones[1]:
            window.location = "carrito-Chip-Moca-Mint-Frappuccino.html"            
            break
            case botones[2]:
            window.location = "carrito-Mermaid-Frappuccino-&-blue.html"                           
            break
            case botones[3]:
            window.location = "carrito-Zombie-Frappuccino-Mango.html"                                          
            break
            case botones[4]:
               window.location = "carrito-Berry-Refresher-Soda-Sandia.html"
            break
            case botones[5]:
               window.location = "carrito-Mango.html"
            break


            
            default:
            //console.log('soy '+this.id)
            toastr.success('soy ' +this.id)
            //document.querySelector('#exampleModalScrollableTitle').innerHTML = "HEYEYE"
            break


         }

       })
      
       for(let i = 0 ; i < saber.length ; i++)
       {
    
          saber[i].addEventListener('click', function(){

            //alert('click')
            switch(this)
            {
            
                case saber[0]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape de chocolate con galleta oreo"
                
                document.getElementById('img-global').style.background = 
                'url("img/productos/2.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Midnight Mint Mocha Frapucchino"
                break
                
                case saber[1]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 2"
                
                document.getElementById('img-global').style.background = 
                'url("img/productos/4.jpg")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Chip Moca Mint Frappuccino"
                break

                case saber[2]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("img/productos/8.PNG")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Mermaid Frappuccino & Blue"
                break

                case saber[3]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("img/productos/7.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Zombie Frappuccino Mango"
                break

                case saber[4]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("img/productos/10.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Berry Refresher Soda Sandia"
                break


                case saber[5]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("img/productos/11-n.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Mango Deli Yogurt Frapucchino"
                break


            }
        

          })
          

       }


    }
    