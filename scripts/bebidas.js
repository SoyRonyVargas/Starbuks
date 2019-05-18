var botones = document.getElementsByClassName('agregar2')
var saber = document.getElementsByClassName('saber')
console.log(saber)
    //console.log(botones)
    for(let i = 0 ; i < botones.length; i++)
    {
       //console.log(botones[i])
       botones[i].addEventListener('click' , function(){

         console.log(this.id)
         switch(this.id)
         {
            default:
            //console.log('soy '+this.id)
            toastr.info('soy ' +this.id)
            //document.querySelector('#exampleModalScrollableTitle').innerHTML = "HEYEYE"
            break
            case '1':
            toastr.info('soy el primiero')
            //document.querySelector('#exampleModalScrollableTitle').innerHTML = "Midnight Mint Mocha Frapucchino"
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
                'url("../img/productos/2.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Midnight Mint Mocha Frapucchino"
                break
                
                case saber[1]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 2"
                
                document.getElementById('img-global').style.background = 
                'url("../img/productos/4.jpg")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Chip Moca Mint Frappuccino"
                break

                case saber[2]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("../img/productos/8.PNG")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Mermaid Frappuccino & Blue"
                break

                case saber[3]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("../img/productos/7.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Zombie Frappuccino Mango"
                break

                case saber[4]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("../img/productos/10.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Berry Refresher Soda Sandia"
                break


                case saber[5]:
                document.querySelector("#meter-texto").
                innerHTML= "Frape 3"
                
                document.getElementById('img-global').style.background = 
                'url("../img/productos/11-n.png")no-repeat'
                document.getElementById('img-global').style.backgroundSize = "contain"
                document.getElementById('img-global').style.backgroundPosition = "center"
                document.getElementById("exampleModalScrollableTitle").innerHTML = "Mango Deli Yogurt Frapucchino"
                break


            }
        

          })
          

       }


    }
    