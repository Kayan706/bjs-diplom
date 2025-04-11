"use strict"
let user = new UserForm();

user.loginFormCallback = function(data) {
    ApiConnector.login(data, (res) => {
        console.log(res.success)
        if(res.success){
            location.reload()
        } else {
            user.setLoginErrorMessage(String(res.error));
        }
    })
}

user.registerFormCallback = function(data){
    ApiConnector.register(data, (res) => {
        console.log(res.success)
        if(res.success){
            location.reload()
        } else {
            user.setRegisterErrorMessage(String(res.error));
        }
    })
}

