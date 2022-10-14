

$("#cad").click(function(){
   let error = []
    if($("#nome").val()==""){
        error.push("Campo nome nao pode ser vazio")
    }

    if($("#email").val()==""){
        error.push("Campo email nao pode ser vazio");
    }


    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#email").val())){
        error.push("Campo email invalido")
    }

    if($("#mensagem").val()==""){
        error.push("Campo mensagem não pode ser vazio");
    }

    if(error.length > 0){
        
        $("#disney")
            .html(error.join("; "))
            
    }else{

        $("#disney")
        .hide();
        alert("OK");
    }
        
});