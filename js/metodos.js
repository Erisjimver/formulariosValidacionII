
$(document).ready(function() {
	
	$("#form_registro").validate({

		rules:{

			e_mail: {
				required:true,
				email:true
			}
		},//se cierra rules

		messages:{

			e_mail:{

				required:"Introduce email, por favor",
				email: "el formato es erroneo"

			}

		}//cierre de mensajes

	});
	
}); 