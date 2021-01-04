$(document).ready( function(){// Leitura o body


	$('#formularioContato').validate({
 


           


		// Define as regras

		rules:{
            nome:{
            	required: true,
            	minlength: 2 
            },

            email:{
				required: true,
				email: true
            },

            mensagem:{
            	required: true,
            	minlength: 2 

            }
		},

		// Define as mensagens de erro para cada regra

		messages:{

	 			nome:{
	            	required: 'Digite o nome',
	            	minlength: 'Deve conter no mínimo 2 caracteres' 
	            },

	            email:{
					required: 'Digite o email',
					email: 'DIgite um e-mail válido'
	            },

	            mensagem:{
	            	required: 'Digite a mensagem',
	            	minlength: 'Deve conter no mínimo 2 caracteres' 

	            }
		},

        

	});

    /// Quero que cada vez que troque o campo ele mostre Boa Noite 
    /// no console
 
	/// Valida campos do from -  Start	   
		$('#tudo').click(function() {

			var resulta = false;
		 
		    if(    $('#nome').val() != '' 
		    	&& $('#email').val() != '' 
		    	&& $('#mensagem').val() != ''
		    	&& $("#nome-error").text() == ""
		    	&& $("#email-error").text() == ""
		    	&& $("#mensagem-error").text() == ""){
 			   //console.log('Boa Noite:Nome');

 			   resulta = true;
            } 	
		 
		 	 if (resulta == true){
		 	 	//console.log('Mostra botão');
		 	  
		 	 	 $("#botao").show();
		 	 }else{
		 	 	//console.log('Esconde botão');
		 	 	 $("#botao").hide();
		 	 }


		});
 
/// Valida campos do from -  End


// Envia valores para tela - Start
		$("#botao").click(function() {

              console.log('Mostra campos na tela');

         $("#view").show();

         $("#respNome").text($("#nome").val());
         $("#respEmail").text($("#email").val());
         $("#respMensagem").text($("#mensagem").val());
             

 ///envio de parametros para o recebe.php  e grava no banco start
 		$.ajax({
 				type:'GET',
 				url:"http://localhost/aulaSenacD/recebe.php?command=insert&nome="+$('#nome').val()+"&email="+$('#email').val()+"&mensagem="+$("#mensagem").val(),
 				success:function(data){
 					var meuJson = JSON.parse(data);//var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}'); 
 					console.log(meuJson);


					var status = meuJson.status;
 					var nm = meuJson.nome;
 					var id= meuJson.id;
 					//console.log(st);


 	 						if(status== true){

 					$('#nomeSpan').text(nm);
 					$('#idForm').val(id);
 					$('#myModal').modal('show');


}
 					
 				},error:function(request,status,error){
 					console.log("deu erro");
 				}

 		});


 ///envio de parametros para o recebe.php  e grava no banco end

 ///Envio de parametros para o recebe.php e grava no banco - End
		$('#delete').click(function() {
			$.ajax({
		
		type: 'GET',
				url:"http://localhost/aulaSenacD/recebe.php?command=delete&id="+$('#idForm').val(),
		success:function(data){
						var meuJson = JSON.parse(data);

						var status = meuJson.status;				
                       // console.log(nome);var status = meuJson.status;

                       if(status== true){
                        	console.log('OK - Deletado');
                        	$("#name").val("");
         					$("#mail").val("");
          					$("#mensagem").val("");

          					location.reload();


                      }

						//console.log(meuJson);

				},error: function(request,status,error){
					console.log('Deu erro');
				}

		});
			});
		// Envia valores para a tela - Fim 
	});
// Envia valores para tela - End
});