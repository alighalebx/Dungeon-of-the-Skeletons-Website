const submit=document.getElementById("submit");
submit.addEventListener("click",() =>{

    let emailInput = document.getElementById("email");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let accounts=JSON.parse(localStorage.getItem("accounts")) ||[];

      
    let newAcc={
        username:usernameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
        type:"user",

    }
    if(accounts.length==0){
        newAcc.type="admin";
    }
    
        // console.log(document.getElementById("username").attributes['required']);
        // console.log(document.getElementById("name").attributes['required']);
        // console.log(document.getElementById("password").attributes['required'] );
    if(newAcc.username!=="" && newAcc.email!=="" && newAcc.password!==""){
    accounts.push(newAcc);
    localStorage.setItem("accounts",JSON.stringify(accounts));
    window.location.href="./Sign in.html";
    }
    
})