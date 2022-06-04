const submit=document.getElementById("submit1");
const accounts=JSON.parse(localStorage.getItem("accounts")) || [];

submit.addEventListener("click",() =>{

    let un = document.getElementById("username1");
    let pw = document.getElementById("password1");
    let found=false;   

    console.log(un.value);
    console.log(pw.value);   
    for(let i=0;i<accounts.length;i++){    

        if(accounts[i].username==un.value){
            
            found=true;
            if(accounts[i].password==pw.value){
                localStorage.setItem("currentUser",JSON.stringify(accounts[i]));
                if(accounts[i].type=="admin"){
                    window.location.href="./home.html";
                }
                else{
                    window.location.href="./home.html";
                }
                break;
            }else{
                alert("Password is wrong");
                break;
            }
        }
    }
    if(!found){
        alert("Account not found");
    }
    
})