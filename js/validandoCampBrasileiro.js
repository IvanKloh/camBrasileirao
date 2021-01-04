
 $(document).ready( function(){



 		/* mostrar e esconder os modais start*/
		  $('#modalApi').click(function() {
			$('#cadastraModal').show();/////mostra modal cadastro
			$('#entraModal').hide();///esconde modal de login

		///console.log($('#recipient-name').val());
//console.log($('#recipient-email').val());
//console.log($('#recipient-message').val());



	
	
		});
		/* mostrar e esconder os modais end*/

 	$('#bntCamp').click(function() {

		 /// Envio de parametros para o usuario.inc.php e grava no banco - Start

        $.ajax({
        		
        		type:'GET',
        		url:"http://localhost/aulaSenacD/controle/usuario.inc.php?command=insert&userInserir="+$('#userInserir').val()+"&senhaInserir="+$('#senhaInserir').val(),///envia os parametros

        		success: function(data){

        			  var meuJson = JSON.parse(data);
        			  //var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}'); 
                      
 					  var st  = meuJson.status;
 				 					  
                     // console.log(st);

                      if(st == true){
                      	$('#entraModal').show();///mostra modal de login
                      	$('#cadastraModa').hide();///esconde o modal de cadastrp
                      	$('#mensagemCadastrar').show();///mostra a mensagem de usuario cadastrado com sucesso
                      	$('#mensagemErro').hide();///esconde a mensagem de usuario ou senha incorreta

                        }

        		},error: function(request,status,error){

        			 console.log('Deu erro');
        		}

        });
      });
/// Envio de parametros para o usuaario.inc.php e grava no banco - End
/// Envio de parametros para o usuario.inc.php e faz a consulta para validar a entrada no API  - Start
  $('#bntEntrar').click(function() {

		  $.ajax({
        		
        		type:'GET',
        		url:"http://localhost/aulaSenacD/controle/usuario.inc.php?command=entrar&userEntrar="+$('#userEntrar').val()+"&senhaEntrar="+$('#senhaEntrar').val(),///envia parametros

        		success: function(data){

        			  var meuJson = JSON.parse(data);
        			  //var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}'); 
                      
 					  var st  = meuJson.status;
 					  
 					  console.log('Deu ');
 					  
                     // console.log(st);

                      if(st == true){///condição de validação dos dados, caso seje verdadeiro vai para a arquivo principalApi.php
                      	console.log("1");
                      	location.href="http://localhost/aulaSenacD/visao/principalApi.php";
                      	$('#userEntrar').val();
                      	$('#senhaEntrar').val();
                      	

                     }else{
                     	console.log("2");
 					$('#mensagemErro').show();///mostra mensagem de erro
 					$('#mensagemCadastrar').hide();///esconde a mensagem de castrado com sucesso

                     }

        		},error: function(request,status,error){

        			 console.log('Deu erro');
        		}

        });
   
 	});
  /// Envio de parametros para o usuario.inc.php e faz a consulta para validar a entrada no API  - end
 
});
