const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

// // login
// const EmailLogin = document.querySelector(".input-signin-username");
// const PassswordLogin = document.querySelector(".input-signin-passwprd");
// const btnLogin = document.querySelector(".btnsignIn")

// btnLogin.addEventListener("click", function(e){
// 	e.preventDefault();
// 	if(EmailRegister.value ==="" || PasswordRegister.value==="" || NameRegister.value===""){
// 		alert("Plese enter Name or Email or Password");
// 	}

// 	else{
// 		const user = JSON.parse(localStorage.getItem(NameRegister.value))
// 		console.log(user.username.value)
// 		if (user.username == EmailLogin.value && user.password == PassswordLogin.value){
// 			// alert("sucesss")
// 			window.open("index.html")
// 		}else{
// 			alert("Invalid email or password")
// 		}



// 		// console.log("Email: " + EmailRegister.value);
// 		// console.log("Passsword: " +PasswordRegister.value);
// 	}


// })


















// const NameRegister =document.querySelector(".namme");
// const EmailRegister = document.querySelector(".input-signup-username");
// const PasswordRegister = document.querySelector(".input-signup-password");
// const btnRegister = document.querySelector(".btnsignUp");

// btnRegister.addEventListener("click", function(e){
// 	e.preventDefault();
// 	if(EmailRegister.value ==="" || PasswordRegister.value==="" || NameRegister.value===""){
// 		alert("Plese enter Name or Email or Password");
// 	}

// 	else{
// 		const user ={
// 			name: NameRegister.value,
// 			username: EmailRegister.value,
// 			password: PasswordRegister.value
// 		}
// 		let json = JSON.stringify(user);
// 		localStorage.setItem(NameRegister.value, json);
// 		window.location.href = "login.html";





// 		// console.log("Email: " + EmailRegister.value);
// 		// console.log("Passsword: " +PasswordRegister.value);
// 	}

	
// })
// login
const EmailLogin = document.querySelector(".input-signin-username");
const PassswordLogin = document.querySelector(".input-signin-passwprd");
const btnLogin = document.querySelector(".btnsignIn");

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    if (EmailLogin.value === "" || PassswordLogin.value === "") {
        alert("Please enter Email and Password");
    } else {
        const user = JSON.parse(localStorage.getItem(EmailLogin.value));
        if (user && user.password === PassswordLogin.value) {
            window.open("index.html");
        } else {
            alert("Invalid email or password");
        }
    }
});

const NameRegister = document.querySelector(".namme");
const EmailRegister = document.querySelector(".input-signup-username");
const PasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".btnsignUp");

btnRegister.addEventListener("click", function(e) {
    e.preventDefault();
    if (EmailRegister.value === "" || PasswordRegister.value === "" || NameRegister.value === "") {
        alert("Please enter Name, Email, and Password");
    } else {
        const user = {
            name: NameRegister.value,
            username: EmailRegister.value,
            password: PasswordRegister.value
        };
        let json = JSON.stringify(user);
        localStorage.setItem(EmailRegister.value, json);
        window.location.href = "login.html";
    }
});





// var login = document.querySelector("login");
// login.addEventListener("click", function(e){
// 	e.preventDefault;
// 	window.close();
// })