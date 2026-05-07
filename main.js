function checkLogin() {
    const correctUsername = "Keane";
    const correctPassword = "tunggtungsahur";

    let username = document.getElementById("UserName").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("loginStatus").innerHTML = "Login successful. good job admin!!!";
    } else {
        document.getElementById("loginStatus").innerHTML = "Login failed! you are not the admin fam!!!";
    }
}

