let cont =1;
document.getElementById("radio1").checked=true;

setInterval(function(){
    cont++;
    if(cont>3){
        cont = 1;
    }


    document.getElementById("radio"+cont).checked=true;
}, 4000);


let url = ("https://api.sampleapis.com/coffee/hot");




        document.getElementById("carrosel-"+1).src = "https://img.olhardigital.com.br/wp-content/uploads/2022/06/imagem-cafe.jpg";

        document.getElementById("carrosel-"+2).src = "https://wallpapercrafter.com/desktop/23168-glass-coffee-light-cafe-4k.jpg";

        document.getElementById("carrosel-"+3).src = "https://emc.tudoep.com/dbimagens/cafe_no_1200x675_13122021161943.webp";


