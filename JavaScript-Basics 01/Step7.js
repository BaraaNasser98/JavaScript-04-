function Cal(){
    var SS=document.getElementById('shoe_size').value;
    var YE=document.getElementById('year').value;
    var Res= ((((SS*2)+5)*50)-YE)+1766;
    alert("Result = " + Res);
    }