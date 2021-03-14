function Cal(){
    var FN=document.getElementById('first_number').value;
    var SN=document.getElementById('second_number').value;
	var BTN=document.getElementById('validate');
  var Res= parseInt(FN) / parseInt(SN);
  
    alert(FN +" Div "+ SN + " = " + Res);
    }
