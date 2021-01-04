$.validator.addMethod("password",function(value){
  return value == "sabonete";
});

$.validator.addMethod("equal",function(value,element,param){
  return value == param;
});

$().ready(function(){
  var validator = $("#form").bind("invalid-form.validate",function(){
    $("#msg").html("Este formulario tem "+ validator.numberOfInvalids()+" erro(s)");

  }).validate(
    {
      errorElement:"el",
      errorPlacement: function(error,element){
        element.parent("td").next("td").html(error);

        if (error) {
          $("#botao").hide();
        }

      },
      success: function (label){

        label.text("Ok!").removeClass("error").addClass("ok");

        var numerError = $('#numero-error').text();
        var passError = $('#pass-error').text();
        var validadoError = $('#validado-error').text();

        if (numerError == 'Ok!' && passError == 'Ok!' && validadoError == 'Ok!') {
          $("#botao").show();
        }

      },
      submitHandler:function(form){
      
        form.submit();
      },
      rules:{
        numero:{
          required:true,
          number: true,
          maxlength:15
        },
        pass:{
          required:true,
          password:true
        },
        validado:{
          required:true,
          equal: "Validado"
        }

   },
      messages:{
        numero:{
          required:"Esse campo não pode ser vazio",
          number:"Este campo é numerico",
          maxlength:"apenas 15 caracteres"
        },
        pass:{
          required:"Esse campo não pode ser vazio",
          password: "digite sabonete"
        },
        validado:{
          required:"Esse campo não pode ser vazio",
          equal: "digite Validado"
        }

      }


    }

  )

});