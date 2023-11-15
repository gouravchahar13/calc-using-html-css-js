let st="";
const btns= document.querySelectorAll(".ind_button");
const input=document.getElementById("input");

Array.from(btns).forEach((button)=>{
    button.addEventListener("click",(e)=>{

        if (e.target.innerHTML == "="){
            st= eval(st);
            input.value=st;
        }
        else if (e.target.innerHTML == "C"){
            st= "";
            input.value=st;
        }
        else{
        console.log(e.target)
        st=st+e.target.innerHTML;
        input.value=st;
        
    }
    })
})