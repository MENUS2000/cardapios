	// VALIDADOR DE EMAIL
		 var valido;
	function validar(xemail){
	    var str = xemail;
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
   	if(filter.test(str))
	      valido = true;
    else{
	  //alert("E-mail não é válido!");
	  document.getElementById('email').value='';
      document.cadastro.email.focus();
      valido = false;
	     }
    return valido;
  }
  //TERMINIO DO VALIDADOR
//function valida_campo()
//{  
 // var nome = document.form.nome.value
 // if (nome=="")
  //{
  //  alert("Necessaio informar Nome!");
   // document.form.nome.focus()
   // return false
 //}   
  //var email=document.form.email.value;
 // if (email=="")
 // {
  //  alert("Necessaio informar Email!")
  // document.form.email.focus()
  //  return false
  //}
  // var Telefone = document.form.Telefone.value
  //if (Telefone=="")
  //{
  //  alert("Necessaio informar Telefone!");
   // document.form.Telefone.focus()
  //  return false
  //}
  // var uf = document.form.uf.value
  //if (uf=="")
  //{
  //  alert("Necessaio informar UF!");
 //  document.form.uf.focus()
   // return false
  //}
  // var cidade = document.form.cidade.value
  //if (cidade=="")
  //{
   // alert("Necessaio informar Cidade!");
    //document.form.cidade.focus()
   // return false
 //}
  //var Mensagem=document.form.Mensagem.value;
  //if (Mensagem=="")
  //{
 //   alert("Necessaio informar Mensagem!")
  //  document.form.Mensagem.focus()
 //   return false
 // }  
 // var assunto=document.form.assunto.value;
 // if (assunto=="")
 // {
  //  alert("Necessaio informar Assunto!")
  //  document.form.assunto.focus()
  //  return false
 // }
//}
//-->
// Valida se é só numeros            
function numeros(ie, ff) {
	if (ie) {
		tecla = ie;
	} else {
		tecla = ff;
	}				
	/**
	 * 13 = [ENTER]
	 * 8  = [BackSpace]
	 * 9  = [TAB]
	 * 46 = [Delete]
	 * 48 a 57 = São os números
	 */
	if ((tecla >= 48 && tecla <= 57) || (tecla == 8) || (tecla == 13) || (tecla == 9) || (tecla == 46)) {
		return true;
	}
	else {
		return false;
	}
}	
//function telefone(f) 
//{
//if (f.Telefone.value.length<9 || f.Telefone.value.length>10)
//{
//alert("Preencha o Telefone corretamente.");
//f.Telefone.focus();
//}
//else{ddd = f.Telefone.value.substring(0,2);
//if (f.Telefone.value.length==9) 
//{
//part1 = f.Telefone.value.substring(2,5);
//part2 = f.Telefone.value.substring(5,9);
//}
//if (f.Telefone.value.length==10) 
//{
//part1 = f.Telefone.value.substring(2,6);
//part2 = f.Telefone.value.substring(6,10);
//}
//f.Telefone.value = "("+ddd+") "+part1+"-"+part2
	//}
//}