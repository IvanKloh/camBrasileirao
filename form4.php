 <?php

$server = $_SERVER['HTTP_HOST'];
date_default_timezone_set('America/Sao_Paulo');
?>

<html>
   <head>
      <meta charset="UTF-8"/>
       <title>Jquery Forms 4</title>
      
       
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >

    

        <script type="text/javascript"  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Última versão JavaScript compilada e minificada -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>

        <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
  
        <script type="text/javascript"  src="js/validandoCampBrasileiro.js"></script>
       <style type="text/css"> 
       .modal-header {
          padding: 15px;
          border-bottom: 1px solid red;
        } 
          .modal-header-campeonato {
          padding: 15px;
          border-bottom: 1px solid blue;
        } 
           
           
      </style>



       
    </head>
    <body id = "tudo">
      
       <center> <button type = "button" class = "btn btn-primary" data-toggle = "modal" data-target = "#newMessage" data-whatever = "@fat" id = "btnsend" style="margin-top: 20%;"> Login </button></center>
          <div id="container">
            <div class = "modal fade" id = "newMessage" tabindex = "-1" role = "dialog" aria-labelledby = "newMessageLabel" aria-hidden = "true">

              <div class = "modal-dialog" role ="document" >
              
                <div class = "modal-content" id ="entraModal"style="border-color: blue; border-radius: 10px; border-width: 10px;">
              
                  <div class = "modal-header-Campeonato">
                    <h1 class = "modal-title" id = "newMessageLabel" style="color: blue; border-color:blue;"> Campeonato Brasileiro ! </h1>
                    <h5 class="modal-title" id="mensagemErro"style="color:red;display: none">Senha ou usuário incorreto</h5>
                    <h5 class="modal-title" id="mensagemCadastrar" style="color:green;display: none">Cadastrado com sucesso!</h5>

                  <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close" style="color: blue; border-color:blue;">
                  <span aria-hidden="true">&times;</span>             
                  </button>
              
                </div>
              
              <div class = "modal-body">
                 <div class = "form-group">
                    <label for = "userEntrar" class = "col-form-label"> Email: </label>
                    <input type = "email" class = "form-control" id = "userEntrar" required>
                  </div>

                  <div class = "form-group">
                    <label for = "senhaEntrar" class = "col-form-label"> Senha </label>
                    <input type="password" class = "form-control" id = "senhaEntrar" required>
                  </div>
                     
                      
            <div class = "modal-footer">

                <button type = "button" class = "btn btn-tertiary" data-dismiss = "modal"> Fechar </button>
                <button type = "button" class = "btn btn-secondary" id="modalApi" data-toggle="modal" data-target="#registrar"style="color: red; border-color:red;"  > Registrar </button>
                <button type = "button" class = "btn btn-primary" id="bntEntrar"  style="margin-right: 80%; margin-top: -7%;" >Entrar </button>
            </div>
               
          </div>         
       </div>
    </div>

          <div class = "modal fade" id = "registrar" tabindex = "-1" role = "dialog" aria-labelledby = "registrarLabel" aria-hidden = "true" >
            <div class = "modal-dialog" role ="document">
              <div class = "modal-content" id="registrar"style="border-color: red; border-radius: 10px; border-width: 10px;">
              
                <div class = "modal-header">
              
                  <h5 class = "modal-title" id = "registrarLabel" style="color: red; border-color:red;"> Inserir Usuario ! </h5>
                  <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close" style="color: red; border-color:red;">
                  <span aria-hidden="true">&times;</span>            
                  </button>
              
                </div>
              
                <div class = "modal-body">
              
                  <div class = "form-group">
                    <label for = "userInserir" class = "col-form-label"> Email </label>
                    <input type = "email" class = "form-control" id = "userInserir" required>
                  </div>

                  <div class = "form-group">
                    <label for = "senhaInserir" class = "col-form-label" > Senha </label>
                    <input type= "password" class = "form-control" id = "senhaInserir" style="color: red; border-color:red;"required>
                  </div>

                 <div class = "modal-footer">

                  <button type = "button" class = "btn btn-primary" data-dismiss = "modal"> Fechar </button>
                  <button type = "button" id="bntCamp" class = "btn btn-secondary" data-toggle="modal" data-target="#registrar"style="color: red; border-color:red;"  > Cadastrar </button>
              
                </div>
                 </div>         
       </div>
    </div>
            </div>           
      </body>
</html>   