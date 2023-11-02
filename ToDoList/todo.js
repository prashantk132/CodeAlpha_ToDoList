let inputs=document.getElementById("inp");
let text=document.querySelector(".text")

function Add(){
    if(inputs.value==""){
        alert("Please Enter Task");
    }
    else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <span>X</span>`; // ${} --> is used to add something and delete icon.
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("span").addEventListener("click", remove);
        function remove(){
            newEle.remove();
        }
    }
}