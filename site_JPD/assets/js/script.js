function trocarImgTeste(source) {

    if(source == "sreg1"){
        document.getElementById("img-teste").src= "img/pika.png"
    }
    if(source == "sreg2"){
        document.getElementById("img-teste").src= "img/bagulho.png"
    }

    
}

function letMeCallYou()
{
    alert("Bazinga!!!  you called letMeCallYou")
}

function pageScroll(x) {
    window.scrollTo({ top: x, behavior: 'smooth' })
}