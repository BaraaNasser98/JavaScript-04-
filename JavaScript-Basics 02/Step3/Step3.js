function Name){
const name=document.querySelector("#name")
const text=document.querySelector("#text")
var line=name.value;
text.innerHTML=line;
name.value=" ";
}