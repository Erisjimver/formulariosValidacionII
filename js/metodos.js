
$(document).ready(function() {
	
	$("#form_registro").validate({

		rules:{

			e_mail: {
				required:true,
				email:true
			},
			password:{
				required:true,
				rangelength:[8,16]
			},
			confirma:{
				equalTo:"#password"
			}
		},//se cierra rules

		messages:{

			e_mail:{

				required:"Introduce email, por favor",
				email: "el formato es erroneo"

			},
			password:{
				required:"Por favor introduce contraseña",
				rangelength:"Entre 8 y 16 caracteres"
			},
			confirma:{
				equalTo:"No coinciden los campos"
			}

		},//cierre de mensajes
		errorPlacement:function(error,element){
			if(element.is(":radio")||element.is(":checkbox")){
				error.appendTo(element.parent());
			}else{
				error.insertAfter(element);
			}
		}
	});
	
}); 