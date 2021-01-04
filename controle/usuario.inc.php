<?php
 
 date_default_timezone_set('America/Sao_Paulo');

///recebe os valores do arquivo .js start
$userInserir = @$_GET['userInserir'];
$senhaInserir = @$_GET['senhaInserir'];


$command =@$_GET['command'];
$userEntrar = @$_GET['userEntrar'];
$senhaEntrar = @$_GET['senhaEntrar'];


///recebe os valores do arquivo .js end



 $okdb = mysqli_connect("localhost", "root", "", "campeonatobr");///conexão com o banco de dados
   

///inserir no banco star
    if($command == 'insert'){
    ///executera a QUERY start
               $execQuery = "
                      INSERT INTO usuario 
                          (
                           user,
                           senha,
                           data_criacao                        
                           
                           ) VALUES(
                                '".$userInserir."',
                                '".$senhaInserir."',
                                '".date("Y-m-d")."'
                                                       
                                ); ";
           $result = mysqli_query($okdb,$execQuery)or 
           die(false);
             ///echo "OK mensagem gravado com sucesso!!"

          $strJson = '{"status":true}';
            echo $strJson;

    ///inserir no banco end
    ///fazer login start     

    }elseif($command == 'entrar'){
   
         $sql = "SELECT COUNT(*)
               AS
               quantidade
               FROM usuario
               WHERE 
                  user=
               '".$userEntrar."' 
               and senha=
               '".$senhaEntrar."'";
      // echo $sql;
        //    echo $email.'<->'.$senha;
      //exit();
        $result = mysqli_query($okdb,$sql);
           
           $rows = $result->fetch_assoc();
           $quantidade = $rows['quantidade'];


           if($quantidade==1 ){

            $strJson = '{"status":true}';
             echo $strJson;
           }else {
             $strJson = '{"status":false}';
            echo $strJson;
           }
    };
     
 
  ///fazer login end


?>