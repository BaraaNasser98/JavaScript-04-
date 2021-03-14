

function req(){
	const pas=document.querySelector("#password");
const con=document.querySelector("#confirmation");
    if(pas.value != con.value ){
        pas.style.borderColor="red";
        con.style.borderColor="red";
    }
}
