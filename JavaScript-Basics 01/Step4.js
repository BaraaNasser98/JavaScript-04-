function Msg(){
    var name=document.getElementById('name').Value;
    var surname=document.getElementById('surname').value;
    var city=document.getElementById('city').value;
    var FMsg="Hello " +name+ " " +surname+"\nFrom "+city;
    alert(FMsg);
}