 $(document).ready( function(){
 	/* Valida os campos label e os erros - Inicio */
		$('#recipient-name, #recipient-email,#recipient-message').keyup(function(e) {

		///console.log($('#recipient-name').val());
//console.log($('#recipient-email').val());
//console.log($('#recipient-message').val());



			if(    $('#recipient-name').val() != '' 
				&& $('#recipient-email').val() != '' 
				&& $('#recipient-message').val() != ''){

	
				$("#enviarForm").show();

			} else {

				$("#enviarForm").hide();
console.log(e);
		
}
	
		});
		/* Valida os campos label e os erros - Fim */

 	$('#enviarForm').click(function() {

		$.ajax({
 				type:'GET',
 				url:"http://localhost/aulaSenacD/recebe.php?command=insert&nome="+$('#recipient-name').val()+"&email="+$('#recipient-email').val()+"&mensagem="+$('#recipient-message').val(),
 				success:function(data){
 					var meuJson = JSON.parse(data);//var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}'); 
 					console.log(meuJson);


					var status = meuJson.status;
 					var nm = meuJson.nome;
 					var id= meuJson.id;
 					//console.log(st);


 	 						if(status== true){

 					/*$('#nomeSpan').text(nm);
 					$('#idForm').val(id);
 					$('#myModal').modal('show');*/
 					//location.href="http://localhost/aulaSenacD/form3.php";


}
 					
 				},error:function(request,status,error){
 					console.log("deu erro");
 				}

 		});
 			



		});

 	});
